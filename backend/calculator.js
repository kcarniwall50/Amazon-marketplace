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
const calculateWeightHandlingFee = (serviceLevel, weight, location) => {
  const weightFeeDetails = [
    {
      serviceLevel: "Easy Ship Standard Size - Premium",
      location: [
        { location: "Local", charge: 43 },
        { location: "Regional", charge: 54.5 },
        { location: "National", charge: 76 },
        { location: "IXD", charge: 0 },
      ],
    },
    {
      serviceLevel: "Easy Ship Standard Size - Advanced",
      location: [
        { location: "Local", charge: 43 },
        { location: "Regional", charge: 54.5 },
        { location: "National", charge: 76 },
        { location: "IXD", charge: 0 },
      ],
    },
    {
      serviceLevel: "Easy Ship Standard Size - Standard",
      location: [
        { location: "Local", charge: 49 },
        { location: "Regional", charge: 56.5 },
        { location: "National", charge: 77 },
        { location: "IXD", charge: 0 },
      ],
    },

    {
      serviceLevel: "Easy Ship Standard Size - Basic",
      location: [
        { location: "Local", charge: 55 },
        { location: "Regional", charge: 60.5 },
        { location: "National", charge: 81 },
        { location: "IXD", charge: 0 },
      ],
    },

    {
      serviceLevel: "FBA Standard Size - Premium/Advanced",
      location: [
        { location: "Local", charge: 29 },
        { location: "Regional", charge: 40.5 },
        { location: "National", charge: 63 },
        { location: "IXD", charge: 45 },
      ],
    },
    {
      serviceLevel: "FBA Standard Size - Standard",
      location: [
        { location: "Local", charge: 35 },
        { location: "Regional", charge: 42 },
        { location: "National", charge: 0 },
        { location: "IXD", charge: 46 },
      ],
    },

    {
      serviceLevel: "FBA Standard Size - Basic",
      location: [
        { location: "Local", charge: 41 },
        { location: "Regional", charge: 46.5 },
        { location: "National", charge: 67 },
        { location: "IXD", charge: 50 },
      ],
    },
  ];

  // in kg
  if (weight <= 0.5) {
    for (const dataItem of weightFeeDetails)
      if (dataItem.serviceLevel == serviceLevel) {
        for (const place of dataItem.location)
          if (place.location == location) return place.charge;
      }
  }

  // in kg
  if (weight > 0.5 && weight <= 1) {
    for (const dataItem of weightFeeDetails)
      if (dataItem.serviceLevel == serviceLevel) {
        for (const place of dataItem.location)
          if (place.location == location) {
            if (location == "Local") return place.charge + 13;
            if (location == "Regional") return place.charge + 17;
            if (location == "National") return place.charge + 25;
            return place.charge;
          }
      }
  }

  // in kg
  if (weight > 1 && weight <= 5) {
    for (const dataItem of weightFeeDetails)
      if (dataItem.serviceLevel == serviceLevel) {
        for (const place of dataItem.location)
          if (place.location == location) {
            if (location == "Local")
              return place.charge + 13 + (weight - 1) * 21;
            if (location == "Regional")
              return place.charge + 17 + (weight - 1) * 27;
            if (location == "National")
              return place.charge + 25 + (weight - 1) * 33;
            return place.charge;
          }
      }
  }

  // in kg
  if (weight > 5 && weight < 12) {
    for (const dataItem of weightFeeDetails)
      if (dataItem.serviceLevel == serviceLevel) {
        for (const place of dataItem.location)
          if (place.location == location) {
            if (location == "Local")
              return place.charge + 13 + 4 * 21 + (weight - 5) * 12;
            if (location == "Regional")
              return place.charge + 17 + 4 * 27 + (weight - 5) * 13;
            if (location == "National")
              return place.charge + 25 + 4 * 33 + (weight - 5) * 16;
            return place.charge;
          }
      }
  }

  if (serviceLevel == "Easy Ship Heavy & Bulky") {
    if (weight <= 12)
      if (location == "Local") return 192;
      else if (location == "Regional") return 277;
      else if (location == "National") return 271;
      else return 0;
  } else {
    if (location == "Local") return 192 + 5 * (weight - 12);
    else if (location == "Regional") return 277 + 6 * (weight - 12);
    else if (location == "National") return 271 + 12 * (weight - 12);
    else return 0;
  }

  // FBA Heavy & Bulky , weight
  if (serviceLevel == "FBA Heavy & Bulky - Basic")
    if (weight <= 12) {
      if (location == "Local") return 94;
      else if (location == "Regional") return 135;
      else if (location == "National") return 181.5;
      else return 0;
    } else {
      if (location == "Local") return 94 + 2.5 * (weight - 12);
      else if (location == "Regional") return 135 + 3 * (weight - 12);
      else if (location == "National") return 181.5 + 6 * (weight - 12);
      else return 0;
    }

  if (serviceLevel == "FBA Heavy & Bulky - Standard")
    if (weight <= 12) {
      if (location == "Local") return 88;
      else if (location == "Regional") return 130.5;
      else if (location == "National") return 177.5;
      else return 0;
    } else {
      if (location == "Local") return 88 + 2.5 * (weight - 12);
      else if (location == "Regional") return 130.5 + 3 * (weight - 12);
      else if (location == "National") return 177.5 + 6 * (weight - 12);
      else return 0;
    }

  if (serviceLevel == "FBA Heavy & Bulky - Premium/Advanced")
    if (weight <= 12) {
      if (location == "Local") return 82;
      else if (location == "Regional") return 129;
      else if (location == "National") return 176.5;
      else return 0;
    } else {
      if (location == "Local") return 82 + 2.5 * (weight - 12);
      else if (location == "Regional") return 129 * (weight - 12);
      else if (location == "National") return 176.5 + 6 * (weight - 12);
      else return 0;
    }
};

// 3. Closing Fee Calculation
const calculateClosingFee = (shippingMode, sellingPrice) => {
  if (sellingPrice <= 250) {
    const shippingDetails = [
      {
        mode: "FBA Normal",
        charge: 25,
      },
      {
        mode: "FBA Exception",
        charge: 12,
      },
      {
        mode: "Easy Ship Standard",
        charge: 4,
      },
      {
        mode: "Self Ship",
        charge: 7,
      },
      {
        mode: "Seller Flex",
        charge: 7,
      },
    ];
    for (const mode of shippingDetails)
      if (mode.mode == shippingMode) return mode.charge;
  } else if (sellingPrice > 250 && sellingPrice <= 500) {
    const shippingDetails = [
      {
        mode: "FBA Normal",
        charge: 20,
      },
      {
        mode: "FBA Exception",
        charge: 12,
      },
      {
        mode: "Easy Ship Standard",
        charge: 9,
      },
      {
        mode: "Self Ship",
        charge: 20,
      },
      {
        mode: "Seller Flex",
        charge: 11,
      },
    ];
    for (const mode of shippingDetails)
      if (mode.mode == shippingMode) return mode.charge;
  } else if (sellingPrice > 500 && sellingPrice <= 1000) {
    const shippingDetails = [
      {
        mode: "FBA Normal",
        charge: 25,
      },
      {
        mode: "FBA Exception",
        charge: 25,
      },
      {
        mode: "Easy Ship Standard",
        charge: 30,
      },
      {
        mode: "Self Ship",
        charge: 41,
      },
      {
        mode: "Seller Flex",
        charge: 30,
      },
    ];
    for (const mode of shippingDetails)
      if (mode.mode == shippingMode) return mode.charge;
  } else {
    const shippingDetails = [
      {
        mode: "FBA Normal",
        charge: 50,
      },
      {
        mode: "FBA Exception",
        charge: 70,
      },
      {
        mode: "Easy Ship Standard",
        charge: 61,
      },
      {
        mode: "Self Ship",
        charge: 80,
      },
      {
        mode: "Seller Flex",
        charge: 61,
      },
    ];
    for (const mode of shippingDetails)
      if (mode.mode == shippingMode) return mode.charge;
  }
};

// 4. Pick and Pack Fee Calculation
const calculatePickAndPackFee = (size) => {
  if (size.includes("Standard")) return 14;
  else return 26;
};

// 5. Storage Fee Calculation
const calculateStorageFee = (durationMonths) => {
  const ratePerCubicFoot = 45; // ₹45 per cubic foot per month
  return ratePerCubicFoot * durationMonths;
};

// 6. Removal Fee Calculation
const calculateRemovalFee = (productSize, shippingMode) => {
  if ((productSize = "Heavy & Bulky")) return 100;
  else {
    if (shippingMode.includes("Standard")) return 10;
    else return 30; // Assuming Expedited Shipping
  }
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
    serviceLevel,
    weight,
    location
  );
  const closingFee = calculateClosingFee(shippingMode, sellingPrice);
  const pickAndPackFee = calculatePickAndPackFee(productSize);
  const storageFee = calculateStorageFee(volumeCubicFeet, storageDuration);
  const removalFee = calculateRemovalFee(productSize, shippingMode);

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
