// Import necessary libraries
const express = require("express");
const cors = require("cors"); // Enable Cross-Origin Resource Sharing

const referralFeesData = require("./referralFeesData");
const {
  calculateReferralFee,
  calculateWeightHandlingFee,
  calculateClosingFee,
  calculatePickAndPackFee,
  calculateTotalFees,
} = require("./calculator"); // Import calculation functions

// Create an instance of Express
const app = express();
app.use(express.json());

// Enable CORS to allow frontend requests from Vite
app.use(
  cors({
    origin: "http://127.0.0.1:5173", // Allow requests only from Vite frontend
  })
);

// Define the port
const PORT = process.env.PORT || 3000;



// API to fetch distinct categories
app.get("/api/data", (req, res) => {
  // Extract distinct categories
  const distinctCategories = [
    ...new Set(referralFeesData.map((item) => item.category)),
  ];

  res.json({
    message: "Hello from the Backend!",
    timestamp: new Date(),
    items: distinctCategories,
  });
});

// Middleware to parse form data and calculate fees
app.post("/api/v1/profitability-calculator", (req, res) => {
  const {
    productCategory,
    sellingPrice,
    weight,
    shippingMode,
    serviceLevel,
    productSize,
    location,
  } = req.body;

  // Validate required fields
  if (
    !productCategory ||
    !sellingPrice ||
    !weight ||
    !shippingMode ||
    !serviceLevel ||
    !productSize ||
    !location
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Perform fee calculations
    const referralFee = calculateReferralFee(productCategory, sellingPrice);

    if (referralFee === null) {
      return res
        .status(400)
        .json({ error: "Invalid entry: Category or Price out of range." });
    }

    const weightHandlingFee = calculateWeightHandlingFee(
      shippingMode,
      weight,
      serviceLevel,
      location,
      productSize
    );
    const closingFee = calculateClosingFee(shippingMode, sellingPrice);
    const pickAndPackFee = calculatePickAndPackFee(shippingMode, productSize);

    const totalFees =
      referralFee + weightHandlingFee + closingFee + pickAndPackFee;
    const netEarnings = sellingPrice - totalFees;

    // Send response with calculated referral fee
    // console.log(
    //   "p",
    //   referralFee,
    //   weightHandlingFee,
    //   closingFee,
    //   pickAndPackFee,
    //   totalFees,
    //   netEarnings,
    //   "p"
    // );
    res.json({
      referralFee,
      weightHandlingFee,
      closingFee,
      pickAndPackFee,
      totalFees,
      netEarnings,
    });
  } catch (error) {
    console.error("Error during fee calculation:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server is running on http://127.0.0.1:${PORT}`);
});
