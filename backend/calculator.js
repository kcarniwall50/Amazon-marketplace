const referralFeesData = require("./referralFeesData");

// Utility function to match price ranges
const matchesPriceRange = (price, range) => {
  if (range.includes("All")) return true;
  if (range.includes("<=") && price <= parseFloat(range.replace("<= ", "")))
    return true;
  if (range.includes(">") && range.includes("and")) {
    const [min, max] = range.match(/\d+(\.\d+)?/g).map(Number);
    return price > min && price <= max;
  }
  if (range.includes(">")) return price > parseFloat(range.replace("> ", ""));
  return false;
};

// 1. Referral Fee Calculation
const calculateReferralFee = (category, price) => {
  const matchedFee = referralFeesData.find(
    (fee) =>
      fee.category === category && matchesPriceRange(price, fee.priceRange)
  );

  if (matchedFee) {
    return price * (parseFloat(matchedFee.referralFeePercentage) / 100);
  }

  return null;
};

// 2. Weight Handling Fee Calculation
const calculateWeightHandlingFee = (
  shippingMode,
  weight
) => {
  const weightHandlingFees = {
    "Easy Ship Standard": { first500g: 43, additional500g: 17 },
    "FBA Normal": { first500g: 29, additional500g: 13 },
    "FBA Exception": { first500g: 50, additional500g: 25 },
    "Seller Flex": { first500g: 60, additional500g: 30 },
    "Self Ship": { first500g: 20, additional500g: 10 },
  };

  const rates = weightHandlingFees[shippingMode];
  if (!rates) throw new Error("Invalid shipping mode.");

  const first500gRate = rates.first500g;
  const additional500gRate = rates.additional500g;

  let fee = first500gRate;
  if (weight > 500) {
    const extraWeight = weight - 500;
    fee += Math.ceil(extraWeight / 500) * additional500gRate;
  }

  return fee;
};

// 3. Closing Fee Calculation
const calculateClosingFee = (price) => {
  if (price <= 250) return 7;
  if (price > 250 && price <= 500) return 20;
  if (price > 500 && price <= 1000) return 30;
  return 50;
};

// 4. Pick and Pack Fee Calculation
const calculatePickAndPackFee = (shippingMode, size) => {
  const pickAndPackFees = {
    "Standard Size": {
      "Easy Ship Standard": 10,
      "FBA Normal": 14,
      "FBA Exception": 18,
      "Seller Flex": 16,
      "Self Ship": 8,
    },
    "Oversize/Heavy & Bulky": {
      "Easy Ship Standard": 20,
      "FBA Normal": 26,
      "FBA Exception": 30,
      "Seller Flex": 28,
      "Self Ship": 15,
    },
    "All Categories": {
      "Easy Ship Standard": 0,
      "FBA Normal": 0,
      "FBA Exception": 0,
      "Seller Flex": 0,
      "Self Ship": 0,
    },
  };

  const modeFees = pickAndPackFees[size];
  if (!modeFees) throw new Error("Invalid size category.");

  return modeFees[shippingMode] || 0;
};

// 5. Storage Fee Calculation
const calculateStorageFee = (volumeCubicFeet, durationMonths) => {
  const ratePerCubicFoot = 45; // ₹45 per cubic foot per month
  return volumeCubicFeet * ratePerCubicFoot * durationMonths;
};

// 6. Removal Fee Calculation
const calculateRemovalFee = (size, serviceLevel) => {
  const removalFees = {
    "Standard Size": {
      "Standard Shipping": 10,
      "Expedited Shipping": 30,
    },
    "Oversize/Heavy & Bulky": {
      "Standard Shipping": 200,
      "Expedited Shipping": 300,
    },
    "All Categories": {
      "Standard Shipping": 0,
      "Expedited Shipping": 0,
    },
  };

  const levelFees = removalFees[size];
  if (!levelFees) throw new Error("Invalid size category.");

  return levelFees[serviceLevel] || 0;
};

// 7. Total Fees Calculation
const calculateTotalFees = ({
  productCategory,
  sellingPrice,
  weight,
  shippingMode,
  serviceLevel,
  productSize,
  location,
  volumeCubicFeet = 0,
  storageDuration = 0,
}) => {
  const referralFee = calculateReferralFee(productCategory, sellingPrice);
  if (referralFee === null) {
    throw new Error("Invalid entry: Category or Price out of range.");
  }

  const weightHandlingFee = calculateWeightHandlingFee(
    shippingMode,
    weight,
    serviceLevel,
    location,
    productSize
  );
  const closingFee = calculateClosingFee(sellingPrice);
  const pickAndPackFee = calculatePickAndPackFee(shippingMode, productSize);
  const storageFee = calculateStorageFee(volumeCubicFeet, storageDuration);
  const removalFee = calculateRemovalFee(productSize, serviceLevel);

  const totalFees =
    referralFee +
    weightHandlingFee +
    closingFee +
    pickAndPackFee +
    storageFee +
    removalFee;
  const netEarnings = sellingPrice - totalFees;

  return {
    referralFee,
    weightHandlingFee,
    closingFee,
    pickAndPackFee,
    storageFee,
    removalFee,
    totalFees,
    netEarnings,
  };
};

// Export all functions for use in other modules
module.exports = {
  calculateReferralFee,
  calculateWeightHandlingFee,
  calculateClosingFee,
  calculatePickAndPackFee,
  calculateStorageFee,
  calculateRemovalFee,
  calculateTotalFees,
};


