const referralFeesData = [
  {
    category: "Automotive - Helmets & Riding Gloves",
    priceRange: "<= 500",
    referralFeePercentage: "6.50%",
  },
  {
    category: "Automotive - Helmets & Riding Gloves",
    priceRange: "> 500",
    referralFeePercentage: "8.50%",
  },
  {
    category: "Automotive - Tyres & Rims",
    priceRange: "<= 500",
    referralFeePercentage: "5.00%",
  },
  {
    category: "Automotive - Tyres & Rims",
    priceRange: "> 500",
    referralFeePercentage: "7.00%",
  },
  {
    category:
      "Automotive Vehicles - 2-Wheelers 4-Wheelers and Electric Vehicles",
    priceRange: "All",
    referralFeePercentage: "5%",
  },
  {
    category: "Automotive – Car and Bike parts",
    priceRange: "<= 500",
    referralFeePercentage: "13.00%",
  },
  {
    category: "Automotive – Car and Bike parts",
    priceRange: "> 500",
    referralFeePercentage: "14.00%",
  },
  {
    category: "Automotive – Cleaning kits",
    priceRange: "<= 500",
    referralFeePercentage: "9.00%",
  },
  {
    category: "Automotive – Cleaning kits",
    priceRange: "> 500",
    referralFeePercentage: "12.00%",
  },
  {
    category: "Automotive Accessories",
    priceRange: "<= 1000",
    referralFeePercentage: "14%",
  },
  {
    category: "Automotive Accessories",
    priceRange: "> 1000",
    referralFeePercentage: "15.50%",
  },
  {
    category: "Vehicle Tools and Appliances",
    priceRange: "<= 300",
    referralFeePercentage: "6.50%",
  },
  {
    category: "Vehicle Tools and Appliances",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "7.50%",
  },
  {
    category: "Vehicle Tools and Appliances",
    priceRange: "> 500",
    referralFeePercentage: "8.50%",
  },
  {
    category: "Oils Lubricants",
    priceRange: "All",
    referralFeePercentage: "8.50%",
  },
  {
    category: "Automotive – Batteries and air fresheners",
    priceRange: "<= 500",
    referralFeePercentage: "6.50%",
  },
  {
    category: "Automotive – Batteries and air fresheners",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "7.50%",
  },
  {
    category: "Automotive – Batteries and air fresheners",
    priceRange: "> 1000",
    referralFeePercentage: "8.50%",
  },
  {
    category: "Car Electronics Devices",
    priceRange: "<= 500",
    referralFeePercentage: "7.50%",
  },
  {
    category: "Car Electronics Devices",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "9.50%",
  },
  {
    category: "Car Electronics Devices",
    priceRange: "> 1000",
    referralFeePercentage: "10%",
  },
  {
    category: "Car Electronics Accessories",
    priceRange: "<= 500",
    referralFeePercentage: "10.50%",
  },
  {
    category: "Car Electronics Accessories",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "11%",
  },
  {
    category: "Car Electronics Accessories",
    priceRange: "> 1000",
    referralFeePercentage: "13%",
  },
  {
    category: "Baby Hardlines",
    priceRange: "<= 300",
    referralFeePercentage: "6%",
  },
  {
    category: "Baby Hardlines",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "8.50%",
  },
  {
    category: "Baby Hardlines",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "6%",
  },
  {
    category: "Baby Hardlines",
    priceRange: "> 1000",
    referralFeePercentage: "7.50%",
  },
  {
    category: "Baby Strollers",
    priceRange: "<= 300",
    referralFeePercentage: "4%",
  },
  {
    category: "Baby Strollers",
    priceRange: "> 300 and <= 1000",
    referralFeePercentage: "6%",
  },
  {
    category: "Baby Strollers",
    priceRange: "> 1000",
    referralFeePercentage: "10%",
  },
  {
    category: "Baby diapers",
    priceRange: "<= 300",
    referralFeePercentage: "5.00%",
  },
  {
    category: "Baby diapers",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "5.50%",
  },
  {
    category: "Baby diapers",
    priceRange: "> 500",
    referralFeePercentage: "9.50%",
  },

  { category: "Books", priceRange: "<= 250", referralFeePercentage: "3%" },
  {
    category: "Books",
    priceRange: "> 250 and <= 500",
    referralFeePercentage: "4.50%",
  },
  {
    category: "Books",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "9%",
  },
  { category: "Books", priceRange: "> 1000", referralFeePercentage: "13.50%" },
  { category: "Movies", priceRange: "All", referralFeePercentage: "6.50%" },
  { category: "Music", priceRange: "All", referralFeePercentage: "6.50%" },
  {
    category: "Musical Instruments - Guitars",
    priceRange: "All",
    referralFeePercentage: "10%",
  },
  {
    category: "Musical Instruments - Keyboards",
    priceRange: "<= 500",
    referralFeePercentage: "8.00%",
  },
  {
    category: "Musical Instruments - Keyboards",
    priceRange: "> 500",
    referralFeePercentage: "12.00%",
  },
  {
    category: "Musical Instruments - Microphones",
    priceRange: "All",
    referralFeePercentage: "9.50%",
  },
  {
    category: "Musical Instruments - Others",
    priceRange: "<= 300",
    referralFeePercentage: "10.00%",
  },
  {
    category: "Musical Instruments - Others",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "7.00%",
  },
  {
    category: "Musical Instruments - Others",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "10.50%",
  },
  {
    category: "Musical Instruments - Others",
    priceRange: "> 1000",
    referralFeePercentage: "11.00%",
  },
  {
    category: "Video Games - Online game services",
    priceRange: "<= 500",
    referralFeePercentage: "2.00%",
  },
  {
    category: "Video Games - Online game services",
    priceRange: "> 500",
    referralFeePercentage: "3.50%",
  },
  {
    category: "Video Games - Accessories",
    priceRange: "<= 500",
    referralFeePercentage: "10.50%",
  },
  {
    category: "Video Games - Accessories",
    priceRange: "> 500",
    referralFeePercentage: "13.50%",
  },
  {
    category: "Video Games - Consoles",
    priceRange: "<= 1000",
    referralFeePercentage: "7.00%",
  },
  {
    category: "Video Games - Consoles",
    priceRange: "> 1000",
    referralFeePercentage: "9.00%",
  },
  {
    category: "Video Games",
    priceRange: "<= 500",
    referralFeePercentage: "9.00%",
  },
  {
    category: "Video Games",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "10.00%",
  },
  {
    category: "Video Games",
    priceRange: "> 1000",
    referralFeePercentage: "12.00%",
  },
  {
    category: "Business and Industrial Supplies - Scientific Supplies",
    priceRange: "<= 300",
    referralFeePercentage: "11%",
  },
  {
    category: "Business and Industrial Supplies - Scientific Supplies",
    priceRange: "> 300 and <= 15000",
    referralFeePercentage: "11.50%",
  },
  {
    category: "Business and Industrial Supplies - Scientific Supplies",
    priceRange: "> 15000",
    referralFeePercentage: "7%",
  },
  {
    category: "OTC Medicine",
    priceRange: "<= 500",
    referralFeePercentage: "12.00%",
  },
  {
    category: "OTC Medicine",
    priceRange: "> 500",
    referralFeePercentage: "15.00%",
  },
  { category: "Masks", priceRange: "All", referralFeePercentage: "7%" },
  {
    category: "Weighing Scales & Fat Analyzers",
    priceRange: "<= 300",
    referralFeePercentage: "11%",
  },
  {
    category: "Weighing Scales & Fat Analyzers",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "10.50%",
  },
  {
    category: "Weighing Scales & Fat Analyzers",
    priceRange: "> 500",
    referralFeePercentage: "13.50%",
  },
  { category: "3D Printers", priceRange: "All", referralFeePercentage: "11%" },
  {
    category: "Business and Industrial Supplies - Material Handling Equipment",
    priceRange: "All",
    referralFeePercentage: "5.50%",
  },

  {
    category: "Business and Industrial Supplies - Power tools & accessories",
    priceRange: "All",
    referralFeePercentage: "10%",
  },
  {
    category: "Occupational Safety Supplies",
    priceRange: "All",
    referralFeePercentage: "5%",
  },
  {
    category: "Stethoscopes",
    priceRange: "All",
    referralFeePercentage: "9.50%",
  },
  {
    category: "Packing materials",
    priceRange: "All",
    referralFeePercentage: "5%",
  },
  {
    category: "Power & hand Tools and Water Dispenser",
    priceRange: "<= 500",
    referralFeePercentage: "8.00%",
  },
  {
    category: "Power & hand Tools and Water Dispenser",
    priceRange: "> 500",
    referralFeePercentage: "10.00%",
  },
  {
    category: "Office products - Office supplies",
    priceRange: "<= 500",
    referralFeePercentage: "10.00%",
  },
  {
    category: "Office products - Office supplies",
    priceRange: "> 500",
    referralFeePercentage: "13.00%",
  },
  {
    category: "Office products - Electronic Devices",
    priceRange: "<= 300",
    referralFeePercentage: "7.50%",
  },
  {
    category: "Office products - Electronic Devices",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "4.50%",
  },
  {
    category: "Office products - Electronic Devices",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "10.00%",
  },
  {
    category: "Office products - Electronic Devices",
    priceRange: "> 1000",
    referralFeePercentage: "10.50%",
  },
  {
    category: "Office products - Arts and Crafts",
    priceRange: "<= 500",
    referralFeePercentage: "10%",
  },
  {
    category: "Office products - Arts and Crafts",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "11%",
  },
  {
    category: "Office products - Arts and Crafts",
    priceRange: "> 1000",
    referralFeePercentage: "12.50%",
  },
  {
    category: "Office products - Writing Instruments",
    priceRange: "<= 300",
    referralFeePercentage: "10%",
  },
  {
    category: "Office products - Writing Instruments",
    priceRange: "> 300 and <= 1000",
    referralFeePercentage: "11%",
  },
  {
    category: "Office products - Writing Instruments",
    priceRange: "> 1000",
    referralFeePercentage: "12.50%",
  },
  {
    category: "Apparel - Accessories",
    priceRange: "<= 500",
    referralFeePercentage: "13%",
  },
  {
    category: "Apparel - Accessories",
    priceRange: "> 500",
    referralFeePercentage: "19%",
  },
  {
    category: "Apparel - Sweat Shirts and Jackets",
    priceRange: "<= 500",
    referralFeePercentage: "8.00%",
  },
  {
    category: "Apparel - Sweat Shirts and Jackets",
    priceRange: "> 500",
    referralFeePercentage: "12.00%",
  },
  {
    category: "Apparel - Shorts",
    priceRange: "<= 300",
    referralFeePercentage: "16.50%",
  },
  {
    category: "Apparel - Shorts",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "13.50%",
  },
  {
    category: "Apparel - Shorts",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "23.50%",
  },
  {
    category: "Apparel - Shorts",
    priceRange: "> 1000",
    referralFeePercentage: "24%",
  },
  {
    category: "Apparel - Baby",
    priceRange: "<= 300",
    referralFeePercentage: "6.00%",
  },
  {
    category: "Apparel - Baby",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "7.50%",
  },
  {
    category: "Apparel - Baby",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "14.00%",
  },
  {
    category: "Apparel - Baby",
    priceRange: "> 1000",
    referralFeePercentage: "20.00%",
  },
  {
    category: "Apparel - Ethnic wear",
    priceRange: "<= 300",
    referralFeePercentage: "6.50%",
  },
  {
    category: "Apparel - Ethnic wear",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "4%",
  },
  {
    category: "Apparel - Ethnic wear",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "8.00%",
  },

  {
    category: "Apparel - Ethnic wear",
    priceRange: "> 1000",
    referralFeePercentage: "17.50%",
  },
  {
    category: "Apparel - Other innerwear",
    priceRange: "<= 300",
    referralFeePercentage: "12.00%",
  },
  {
    category: "Apparel - Other innerwear",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "11.00%",
  },
  {
    category: "Apparel - Other innerwear",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "16.50%",
  },
  {
    category: "Apparel - Other innerwear",
    priceRange: "> 1000",
    referralFeePercentage: "18.50%",
  },
  {
    category: "Apparel - Sleepwear",
    priceRange: "<= 500",
    referralFeePercentage: "10.00%",
  },
  {
    category: "Apparel - Sleepwear",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "16.00%",
  },
  {
    category: "Apparel - Sleepwear",
    priceRange: "> 1000",
    referralFeePercentage: "19.00%",
  },
  {
    category: "Apparel - Sarees and Dress Materials",
    priceRange: "<= 300",
    referralFeePercentage: "10.00%",
  },
  {
    category: "Apparel - Sarees and Dress Materials",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "8.00%",
  },
  {
    category: "Apparel - Sarees and Dress Materials",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "12.00%",
  },
  {
    category: "Apparel - Sarees and Dress Materials",
    priceRange: "> 1000",
    referralFeePercentage: "23.00%",
  },
  {
    category: "Apparel - Men's T-shirts",
    priceRange: "<= 300",
    referralFeePercentage: "2.00%",
  },
  {
    category: "Apparel - Men's T-shirts",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "5.00%",
  },
  {
    category: "Apparel - Men's T-shirts",
    priceRange: "> 500",
    referralFeePercentage: "21.00%",
  },
  {
    category: "Apparel - Womens' Innerwear / Lingerie",
    priceRange: "<= 500",
    referralFeePercentage: "12.00%",
  },
  {
    category: "Apparel - Womens' Innerwear / Lingerie",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "18.00%",
  },
  {
    category: "Apparel - Womens' Innerwear / Lingerie",
    priceRange: "> 1000",
    referralFeePercentage: "15.00%",
  },
  {
    category: "Backpacks",
    priceRange: "<= 300",
    referralFeePercentage: "12.00%",
  },
  {
    category: "Backpacks",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "10.00%",
  },
  {
    category: "Backpacks",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "12.00%",
  },
  {
    category: "Backpacks",
    priceRange: "> 1000",
    referralFeePercentage: "14.50%",
  },
  {
    category: "Eyewear",
    priceRange: "<= 500",
    referralFeePercentage: "14.00%",
  },
  {
    category: "Eyewear",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "14.50%",
  },
  {
    category: "Eyewear",
    priceRange: "> 1000",
    referralFeePercentage: "18.50%",
  },
  {
    category: "Fashion Jewellery",
    priceRange: "<= 500",
    referralFeePercentage: "17.50%",
  },
  {
    category: "Fashion Jewellery",
    priceRange: "> 500",
    referralFeePercentage: "22.50%",
  },
  {
    category: "Fine Jewellery - Gold Coins",
    priceRange: "All",
    referralFeePercentage: "5%",
  },
  {
    category: "Fine Jewellery - studded",
    priceRange: "All",
    referralFeePercentage: "13%",
  },
  {
    category: "Fine Jewellery - unstudded and solitaire",
    priceRange: "All",
    referralFeePercentage: "5%",
  },
  {
    category: "Silver Jewellery",
    priceRange: "<= 1000",
    referralFeePercentage: "10.50%",
  },
  {
    category: "Silver Jewellery",
    priceRange: "> 1000",
    referralFeePercentage: "13.00%",
  },

  {
    category: "Flip Flops Fashion Sandals and Slippers",
    priceRange: "<= 500",
    referralFeePercentage: "13.00%",
  },
  {
    category: "Flip Flops Fashion Sandals and Slippers",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "12.50%",
  },
  {
    category: "Flip Flops Fashion Sandals and Slippers",
    priceRange: "> 1000",
    referralFeePercentage: "15.00%",
  },
  {
    category: "Handbags",
    priceRange: "<= 300",
    referralFeePercentage: "2.00%",
  },
  {
    category: "Handbags",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "10.00%",
  },
  {
    category: "Handbags",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "11.00%",
  },
  {
    category: "Handbags",
    priceRange: "> 1000",
    referralFeePercentage: "12.00%",
  },
  {
    category: "Luggage - Suitcase & Trolleys",
    priceRange: "<= 500",
    referralFeePercentage: "7.50%",
  },
  {
    category: "Luggage - Suitcase & Trolleys",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "6.50%",
  },
  {
    category: "Luggage - Suitcase & Trolleys",
    priceRange: "> 1000",
    referralFeePercentage: "5.50%",
  },
  {
    category: "Luggage - Travel Accessories",
    priceRange: "<= 300",
    referralFeePercentage: "10.00%",
  },
  {
    category: "Luggage - Travel Accessories",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "9.00%",
  },
  {
    category: "Luggage - Travel Accessories",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "10.00%",
  },
  {
    category: "Luggage - Travel Accessories",
    priceRange: "> 1000",
    referralFeePercentage: "12.00%",
  },
  {
    category: "Kids shoes",
    priceRange: "<= 300",
    referralFeePercentage: "10.00%",
  },
  {
    category: "Kids shoes",
    priceRange: "> 300 and <= 1000",
    referralFeePercentage: "14.00%",
  },
  {
    category: "Kids shoes",
    priceRange: "> 1000",
    referralFeePercentage: "16.00%",
  },
  { category: "Shoes", priceRange: "<= 300", referralFeePercentage: "15.00%" },
  {
    category: "Shoes",
    priceRange: "> 300 and <= 1000",
    referralFeePercentage: "14.50%",
  },
  { category: "Shoes", priceRange: "> 1000", referralFeePercentage: "16.50%" },
  {
    category: "Shoes - Sandals & Floaters",
    priceRange: "All",
    referralFeePercentage: "10.50%",
  },
  {
    category: "Wallets",
    priceRange: "<= 500",
    referralFeePercentage: "10.00%",
  },
  {
    category: "Wallets",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "12.50%",
  },
  {
    category: "Wallets",
    priceRange: "> 1000",
    referralFeePercentage: "14.00%",
  },
  { category: "Watches", priceRange: "All", referralFeePercentage: "14%" },
  {
    category: "Cables and Adapters",
    priceRange: "<= 300",
    referralFeePercentage: "21.50%",
  },
  {
    category: "Cables and Adapters",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "17.00%",
  },
  {
    category: "Cables and Adapters",
    priceRange: "> 500",
    referralFeePercentage: "20.00%",
  },
  {
    category: "Camera Accessories",
    priceRange: "<= 500",
    referralFeePercentage: "11.00%",
  },
  {
    category: "Camera Accessories",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "12.50%",
  },
  {
    category: "Camera Accessories",
    priceRange: "> 1000",
    referralFeePercentage: "13.50%",
  },
  { category: "Camera Lenses", priceRange: "All", referralFeePercentage: "7%" },
  {
    category: "Camera and Camcorder",
    priceRange: "All",
    referralFeePercentage: "5%",
  },

  {
    category: "Cases Covers Skins Screen Guards",
    priceRange: "<= 150",
    referralFeePercentage: "3.00%",
  },
  {
    category: "Cases Covers Skins Screen Guards",
    priceRange: "> 150 and <= 300",
    referralFeePercentage: "15.00%",
  },
  {
    category: "Cases Covers Skins Screen Guards",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "22.00%",
  },
  {
    category: "Cases Covers Skins Screen Guards",
    priceRange: "> 500",
    referralFeePercentage: "25.00%",
  },
  { category: "Desktops", priceRange: "All", referralFeePercentage: "8%" },
  {
    category: "Electronic Accessories",
    priceRange: "All",
    referralFeePercentage: "17%",
  },
  {
    category: "Electronic Devices",
    priceRange: "All",
    referralFeePercentage: "9%",
  },
  {
    category: "Entertainment Collectibles",
    priceRange: "<= 300",
    referralFeePercentage: "13%",
  },
  {
    category: "Entertainment Collectibles",
    priceRange: "> 300",
    referralFeePercentage: "17%",
  },
  {
    category: "Fashion Smartwatches",
    priceRange: "All",
    referralFeePercentage: "15.50%",
  },
  {
    category: "GPS Devices",
    priceRange: "All",
    referralFeePercentage: "13.50%",
  },
  {
    category: "Hard Disks",
    priceRange: "<= 1000",
    referralFeePercentage: "9.50%",
  },
  {
    category: "Hard Disks",
    priceRange: "> 1000",
    referralFeePercentage: "11.50%",
  },
  {
    category: "Headsets Headphones and Earphones",
    priceRange: "<= 500",
    referralFeePercentage: "18.00%",
  },
  {
    category: "Headsets Headphones and Earphones",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "17.50%",
  },
  {
    category: "Headsets Headphones and Earphones",
    priceRange: "> 1000",
    referralFeePercentage: "18.00%",
  },
  {
    category: "Keyboards and Mouse",
    priceRange: "<= 500",
    referralFeePercentage: "14.00%",
  },
  {
    category: "Keyboards and Mouse",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "14.50%",
  },
  {
    category: "Keyboards and Mouse",
    priceRange: "> 1000",
    referralFeePercentage: "17%",
  },
  {
    category: "Kindle Accessories",
    priceRange: "All",
    referralFeePercentage: "25%",
  },
  {
    category: "Laptop Bags & Sleeves",
    priceRange: "<= 300",
    referralFeePercentage: "12.00%",
  },
  {
    category: "Laptop Bags & Sleeves",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "10.00%",
  },
  {
    category: "Laptop Bags & Sleeves",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "12.00%",
  },
  {
    category: "Laptop Bags & Sleeves",
    priceRange: "> 1000",
    referralFeePercentage: "14.50%",
  },
  {
    category: "Laptop and Camera Battery",
    priceRange: "<= 300",
    referralFeePercentage: "14.00%",
  },
  {
    category: "Laptop and Camera Battery",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "12.50%",
  },
  {
    category: "Laptop and Camera Battery",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "14.00%",
  },
  {
    category: "Laptop and Camera Battery",
    priceRange: "> 1000",
    referralFeePercentage: "15.50%",
  },
  {
    category: "Laptops",
    priceRange: "<= 70000",
    referralFeePercentage: "6.00%",
  },
  {
    category: "Laptops",
    priceRange: "> 70000",
    referralFeePercentage: "7.00%",
  },
  { category: "Memory Cards", priceRange: "All", referralFeePercentage: "16%" },
  {
    category: "Mobile phones",
    priceRange: "All",
    referralFeePercentage: "5.50%",
  },

  { category: "Tablets", priceRange: "<= 12000", referralFeePercentage: "6%" },
  { category: "Tablets", priceRange: "> 12000", referralFeePercentage: "9%" },
  {
    category: "Modems & Networking Devices",
    priceRange: "All",
    referralFeePercentage: "14%",
  },
  {
    category: "Monitors",
    priceRange: "<= 1000",
    referralFeePercentage: "6.50%",
  },
  {
    category: "Monitors",
    priceRange: "> 1000",
    referralFeePercentage: "8.00%",
  },
  {
    category: "PC Components",
    priceRange: "All",
    referralFeePercentage: "5.50%",
  },
  {
    category: "Power Banks & Chargers",
    priceRange: "<= 1000",
    referralFeePercentage: "20%",
  },
  {
    category: "Power Banks & Chargers",
    priceRange: "> 1000",
    referralFeePercentage: "20.50%",
  },
  {
    category: "Printers & Scanners",
    priceRange: "<= 500",
    referralFeePercentage: "9.00%",
  },
  {
    category: "Printers & Scanners",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "9.50%",
  },
  {
    category: "Printers & Scanners",
    priceRange: "> 1000",
    referralFeePercentage: "10.50%",
  },
  {
    category: "Software Products",
    priceRange: "All",
    referralFeePercentage: "9.50%",
  },
  {
    category: "Speakers",
    priceRange: "<= 500",
    referralFeePercentage: "11.00%",
  },
  {
    category: "Speakers",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "11.50%",
  },
  {
    category: "Speakers",
    priceRange: "> 1000",
    referralFeePercentage: "12.00%",
  },
  { category: "Television", priceRange: "All", referralFeePercentage: "6%" },
  {
    category: "Landline Phones",
    priceRange: "All",
    referralFeePercentage: "7%",
  },
  {
    category: "Smart Watches & Accessories",
    priceRange: "<= 500",
    referralFeePercentage: "15.50%",
  },
  {
    category: "Smart Watches & Accessories",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "16.50%",
  },
  {
    category: "Smart Watches & Accessories",
    priceRange: "> 1000",
    referralFeePercentage: "17.00%",
  },
  {
    category: "USB Flash Drives",
    priceRange: "All",
    referralFeePercentage: "16%",
  },
  {
    category: "Projectors Home Theatre Systems",
    priceRange: "All",
    referralFeePercentage: "6.00%",
  },
  {
    category: "Grocery - herbs and spices",
    priceRange: "<= 300",
    referralFeePercentage: "4%",
  },
  {
    category: "Grocery - herbs and spices",
    priceRange: "> 300 and <= 1000",
    referralFeePercentage: "5.50%",
  },
  {
    category: "Grocery - herbs and spices",
    priceRange: "> 1000",
    referralFeePercentage: "8.00%",
  },
  {
    category: "Grocery & Gourmet - Oils",
    priceRange: "<= 1000",
    referralFeePercentage: "7.50%",
  },
  {
    category: "Grocery & Gourmet - Oils",
    priceRange: "> 1000",
    referralFeePercentage: "9%",
  },
  {
    category: "Grocery - Dried fruits and nuts",
    priceRange: "<= 500",
    referralFeePercentage: "6.00%",
  },
  {
    category: "Grocery - Dried fruits and nuts",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "8.00%",
  },
  {
    category: "Grocery - Dried fruits and nuts",
    priceRange: "> 1000",
    referralFeePercentage: "9.00%",
  },
  {
    category: "Grocery - Hampers and gifting",
    priceRange: "<= 1000",
    referralFeePercentage: "9%",
  },
  {
    category: "Grocery - Hampers and gifting",
    priceRange: "> 1000",
    referralFeePercentage: "11.50%",
  },
  {
    category: "Pet food",
    priceRange: "<= 300",
    referralFeePercentage: "5.50%",
  },

  {
    category: "Pet food",
    priceRange: "> 300 and <= 1000",
    referralFeePercentage: "11.50%",
  },
  {
    category: "Pet food",
    priceRange: "> 1000",
    referralFeePercentage: "12.50%",
  },
  {
    category: "Pet Products",
    priceRange: "<= 300",
    referralFeePercentage: "2.00%",
  },
  {
    category: "Pet Products",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "10.50%",
  },
  {
    category: "Pet Products",
    priceRange: "> 500",
    referralFeePercentage: "12.00%",
  },
  {
    category: "Beauty - Fragrance",
    priceRange: "<= 300",
    referralFeePercentage: "13.50%",
  },
  {
    category: "Beauty - Fragrance",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "12.50%",
  },
  {
    category: "Beauty - Fragrance",
    priceRange: "> 500",
    referralFeePercentage: "14%",
  },
  {
    category: "Beauty - Haircare Bath and Shower",
    priceRange: "<= 300",
    referralFeePercentage: "7.50%",
  },
  {
    category: "Beauty - Haircare Bath and Shower",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "5.00%",
  },
  {
    category: "Beauty - Haircare Bath and Shower",
    priceRange: "> 500",
    referralFeePercentage: "8.00%",
  },
  {
    category: "Beauty - Makeup",
    priceRange: "<= 300",
    referralFeePercentage: "6%",
  },
  {
    category: "Beauty - Makeup",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "4.50%",
  },
  {
    category: "Beauty - Makeup",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "7.50%",
  },
  {
    category: "Beauty - Makeup",
    priceRange: "> 1000",
    referralFeePercentage: "7%",
  },
  { category: "Face Wash", priceRange: "<= 300", referralFeePercentage: "6%" },
  {
    category: "Face Wash",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "5%",
  },
  {
    category: "Face Wash",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "9%",
  },
  {
    category: "Face Wash",
    priceRange: "> 1000",
    referralFeePercentage: "9.50%",
  },
  {
    category: "Moisturizer cream",
    priceRange: "<= 500",
    referralFeePercentage: "6.50%",
  },
  {
    category: "Moisturizer cream",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "9%",
  },
  {
    category: "Moisturizer cream",
    priceRange: "> 1000",
    referralFeePercentage: "9.50%",
  },
  {
    category: "Sunscreen",
    priceRange: "<= 300",
    referralFeePercentage: "5.50%",
  },
  {
    category: "Sunscreen",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "6.00%",
  },
  {
    category: "Sunscreen",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "9.00%",
  },
  {
    category: "Sunscreen",
    priceRange: "> 1000",
    referralFeePercentage: "9.50%",
  },
  {
    category: "Deodrants",
    priceRange: "<= 300",
    referralFeePercentage: "8.50%",
  },
  {
    category: "Deodrants",
    priceRange: "> 300 and <= 1000",
    referralFeePercentage: "6.50%",
  },
  { category: "Deodrants", priceRange: "> 1000", referralFeePercentage: "7%" },
  {
    category: "Facial steamers",
    priceRange: "<= 300",
    referralFeePercentage: "7.00%",
  },
  {
    category: "Facial steamers",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "6.50%",
  },
  {
    category: "Facial steamers",
    priceRange: "> 500",
    referralFeePercentage: "7.00%",
  },
  {
    category: "Prescription Medicine",
    priceRange: "All",
    referralFeePercentage: "6%",
  },

  {
    category: "Health & Personal Care - Medical Equipment & Contact Lens",
    priceRange: "All",
    referralFeePercentage: "8%",
  },
  {
    category: "Health and Personal Care - Ayurvedic products",
    priceRange: "<= 500",
    referralFeePercentage: "6.00%",
  },
  {
    category: "Health and Personal Care - Ayurvedic products",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "7.00%",
  },
  {
    category: "Health and Personal Care - Ayurvedic products",
    priceRange: "> 1000",
    referralFeePercentage: "8.00%",
  },
  {
    category: "Health & Household - Sports Nutrition",
    priceRange: "All",
    referralFeePercentage: "9%",
  },
  {
    category: "Health and Personal Care - Contact lens",
    priceRange: "All",
    referralFeePercentage: "12%",
  },
  {
    category: "Health and Household - Household Cleaning",
    priceRange: "<= 500",
    referralFeePercentage: "4.50%",
  },
  {
    category: "Health and Household - Household Cleaning",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "7.50%",
  },
  {
    category: "Health and Household - Household Cleaning",
    priceRange: "> 1000",
    referralFeePercentage: "8%",
  },
  {
    category: "Health and Household - Vitamins & Supplements",
    priceRange: "<= 500",
    referralFeePercentage: "9.00%",
  },
  {
    category: "Health and Household - Vitamins & Supplements",
    priceRange: "> 500",
    referralFeePercentage: "10.50%",
  },
  {
    category: "Luxury Beauty",
    priceRange: "<= 300",
    referralFeePercentage: "5%",
  },
  {
    category: "Luxury Beauty",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "6%",
  },
  {
    category: "Luxury Beauty",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "9%",
  },
  {
    category: "Luxury Beauty",
    priceRange: "> 1000",
    referralFeePercentage: "10%",
  },
  {
    category: "Car Cradles Lens Kits and Tablet Cases",
    priceRange: "<= 500",
    referralFeePercentage: "19.00%",
  },
  {
    category: "Car Cradles Lens Kits and Tablet Cases",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "25.00%",
  },
  {
    category: "Car Cradles Lens Kits and Tablet Cases",
    priceRange: "> 1000",
    referralFeePercentage: "29.00%",
  },
  {
    category: "Personal Care Appliances - Electric Massagers",
    priceRange: "<= 500",
    referralFeePercentage: "9.50%",
  },
  {
    category: "Personal Care Appliances - Electric Massagers",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "13.50%",
  },
  {
    category: "Personal Care Appliances - Electric Massagers",
    priceRange: "> 1000",
    referralFeePercentage: "14.50%",
  },
  {
    category: "Personal Care Appliances - Grooming & Styling",
    priceRange: "<= 500",
    referralFeePercentage: "11.00%",
  },
  {
    category: "Personal Care Appliances - Grooming & Styling",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "10.00%",
  },
  {
    category: "Personal Care Appliances - Grooming & Styling",
    priceRange: "> 1000",
    referralFeePercentage: "9.00%",
  },
  {
    category: "Personal Care Appliances - Glucometer",
    priceRange: "All",
    referralFeePercentage: "5.50%",
  },
  {
    category: "Personal Care Appliances - Thermometers",
    priceRange: "<= 500",
    referralFeePercentage: "12.50%",
  },
  {
    category: "Personal Care Appliances - Thermometers",
    priceRange: "> 500",
    referralFeePercentage: "10.50%",
  },
  {
    category: "Bean Bags & Inflatables",
    priceRange: "All",
    referralFeePercentage: "11%",
  },
  {
    category: "Mattresses",
    priceRange: "<= 1000",
    referralFeePercentage: "25.50%",
  },
  {
    category: "Mattresses",
    priceRange: "> 1000 and <= 20000",
    referralFeePercentage: "16%",
  },

  {
    category: "Mattresses",
    priceRange: "> 20000",
    referralFeePercentage: "13.50%",
  },
  {
    category: "Rugs and Doormats",
    priceRange: "<= 300",
    referralFeePercentage: "4.00%",
  },
  {
    category: "Rugs and Doormats",
    priceRange: "> 300",
    referralFeePercentage: "9.00%",
  },
  { category: "Clocks", priceRange: "<= 300", referralFeePercentage: "4.00%" },
  {
    category: "Clocks",
    priceRange: "> 300 and <= 1000",
    referralFeePercentage: "9.00%",
  },
  { category: "Clocks", priceRange: "> 1000", referralFeePercentage: "10.00%" },
  {
    category: "Wall Art",
    priceRange: "<= 300",
    referralFeePercentage: "5.00%",
  },
  {
    category: "Wall Art",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "11.00%",
  },
  {
    category: "Wall Art",
    priceRange: "> 500",
    referralFeePercentage: "13.50%",
  },
  {
    category: "Home - Fragrance & Candles",
    priceRange: "<= 300",
    referralFeePercentage: "2.00%",
  },
  {
    category: "Home - Fragrance & Candles",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "7.50%",
  },
  {
    category: "Home - Fragrance & Candles",
    priceRange: "> 500",
    referralFeePercentage: "12.50%",
  },
  {
    category: "Bedsheets Blankets and covers",
    priceRange: "<= 500",
    referralFeePercentage: "3.00%",
  },
  {
    category: "Bedsheets Blankets and covers",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "7.00%",
  },
  {
    category: "Bedsheets Blankets and covers",
    priceRange: "> 1000",
    referralFeePercentage: "8.50%",
  },
  {
    category: "Home furnishing",
    priceRange: "<= 300",
    referralFeePercentage: "2.00%",
  },
  {
    category: "Home furnishing",
    priceRange: "> 300 and <= 1000",
    referralFeePercentage: "7.00%",
  },
  {
    category: "Home furnishing",
    priceRange: "> 1000",
    referralFeePercentage: "11.00%",
  },
  {
    category: "Containers Boxes Bottles Kitchen Storage",
    priceRange: "<= 300",
    referralFeePercentage: "2.00%",
  },
  {
    category: "Containers Boxes Bottles Kitchen Storage",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "5.00%",
  },
  {
    category: "Containers Boxes Bottles Kitchen Storage",
    priceRange: "> 500",
    referralFeePercentage: "12.00%",
  },
  {
    category: "Home improvement - Accessories",
    priceRange: "All",
    referralFeePercentage: "13.50%",
  },
  {
    category: "Home improvement (excl. accessories)",
    priceRange: "All",
    referralFeePercentage: "9%",
  },
  {
    category: "Tiles & Flooring Accessories",
    priceRange: "All",
    referralFeePercentage: "8%",
  },
  { category: "Wires", priceRange: "All", referralFeePercentage: "10%" },
  {
    category: "Ladders Kitchen and Bath fixtures",
    priceRange: "All",
    referralFeePercentage: "8.00%",
  },
  {
    category: "Home Storage",
    priceRange: "<= 300",
    referralFeePercentage: "5.50%",
  },
  {
    category: "Home Storage",
    priceRange: "> 300 and <= 1000",
    referralFeePercentage: "11.00%",
  },
  {
    category: "Home Storage",
    priceRange: "> 1000",
    referralFeePercentage: "15.00%",
  },
  {
    category: "Wallpapers & Wallpaper Accessories",
    priceRange: "<= 500",
    referralFeePercentage: "9.00%",
  },
  {
    category: "Wallpapers & Wallpaper Accessories",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "8.00%",
  },
  {
    category: "Wallpapers & Wallpaper Accessories",
    priceRange: "> 1000",
    referralFeePercentage: "6.50%",
  },
  {
    category: "Home Decor Products",
    priceRange: "<= 300",
    referralFeePercentage: "6.00%",
  },
  {
    category: "Home Decor Products",
    priceRange: "> 300 and <= 1000",
    referralFeePercentage: "12.00%",
  },

  {
    category: "Home Decor Products",
    priceRange: "> 1000",
    referralFeePercentage: "17.00%",
  },
  {
    category: "Wall Paints and Tools",
    priceRange: "<= 300",
    referralFeePercentage: "9%",
  },
  {
    category: "Wall Paints and Tools",
    priceRange: "> 300",
    referralFeePercentage: "6%",
  },
  {
    category: "Home - Waste & Recycling",
    priceRange: "<= 300",
    referralFeePercentage: "7.50%",
  },
  {
    category: "Home - Waste & Recycling",
    priceRange: "> 300",
    referralFeePercentage: "8.00%",
  },
  {
    category: "Craft materials",
    priceRange: "<= 500",
    referralFeePercentage: "2%",
  },
  {
    category: "Craft materials",
    priceRange: "> 500",
    referralFeePercentage: "5%",
  },
  {
    category: "Water Purifier and Accessories",
    priceRange: "<= 5000",
    referralFeePercentage: "6.50%",
  },
  {
    category: "Water Purifier and Accessories",
    priceRange: "> 5000",
    referralFeePercentage: "7.50%",
  },
  {
    category: "Water Heaters and Accessories",
    priceRange: "<= 5000",
    referralFeePercentage: "8%",
  },
  {
    category: "Water Heaters and Accessories",
    priceRange: "> 5000",
    referralFeePercentage: "9%",
  },
  {
    category: "Home improvement - Kitchen & Bath",
    priceRange: "<= 300",
    referralFeePercentage: "5%",
  },
  {
    category: "Home improvement - Kitchen & Bath",
    priceRange: "> 300",
    referralFeePercentage: "12%",
  },
  { category: "Sanitaryware", priceRange: "All", referralFeePercentage: "10%" },
  {
    category: "Home Safety & Security Systems",
    priceRange: "All",
    referralFeePercentage: "6%",
  },
  {
    category: "Inverter and Batteries",
    priceRange: "All",
    referralFeePercentage: "4.50%",
  },
  {
    category: "Cleaning and Home Appliances",
    priceRange: "<= 5000",
    referralFeePercentage: "7.50%",
  },
  {
    category: "Cleaning and Home Appliances",
    priceRange: "> 5000",
    referralFeePercentage: "8.50%",
  },
  {
    category: "Indoor Lighting",
    priceRange: "<= 500",
    referralFeePercentage: "6.00%",
  },
  {
    category: "Indoor Lighting",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "14.50%",
  },
  {
    category: "Indoor Lighting",
    priceRange: "> 1000",
    referralFeePercentage: "11.50%",
  },
  {
    category: "Doors and Windows",
    priceRange: "All",
    referralFeePercentage: "10%",
  },
  {
    category: "LED Bulbs and Battens",
    priceRange: "<= 300",
    referralFeePercentage: "2.00%",
  },
  {
    category: "LED Bulbs and Battens",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "6.50%",
  },
  {
    category: "LED Bulbs and Battens",
    priceRange: "> 500",
    referralFeePercentage: "14.00%",
  },
  {
    category: "Cushion Covers",
    priceRange: "<= 300",
    referralFeePercentage: "3.00%",
  },
  {
    category: "Cushion Covers",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "7.00%",
  },
  {
    category: "Cushion Covers",
    priceRange: "> 500",
    referralFeePercentage: "10.00%",
  },
  {
    category: "Curtains and Curtain Accessories",
    priceRange: "<= 300",
    referralFeePercentage: "15.50%",
  },
  {
    category: "Curtains and Curtain Accessories",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "16.50%",
  },

  {
    category: "Curtains and Curtain Accessories",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "11.50%",
  },
  {
    category: "Curtains and Curtain Accessories",
    priceRange: "> 1000",
    referralFeePercentage: "16.50%",
  },
  {
    category: "Slipcovers and Kitchen Linens",
    priceRange: "<= 300",
    referralFeePercentage: "7.50%",
  },
  {
    category: "Slipcovers and Kitchen Linens",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "11.50%",
  },
  {
    category: "Slipcovers and Kitchen Linens",
    priceRange: "> 500",
    referralFeePercentage: "15.50%",
  },
  {
    category: "Safes and Lockers",
    priceRange: "All",
    referralFeePercentage: "12%",
  },
  {
    category: "Lawn & Garden - Solar Panels",
    priceRange: "All",
    referralFeePercentage: "6%",
  },
  {
    category: "Lawn & Garden - Leaf blower",
    priceRange: "All",
    referralFeePercentage: "6.50%",
  },
  {
    category: "Lawn & Garden - Commercial Agricultural",
    priceRange: "All",
    referralFeePercentage: "3.00%",
  },
  {
    category: "Lawn & Garden - Chemical Pest Control",
    priceRange: "<= 1000",
    referralFeePercentage: "7.00%",
  },
  {
    category: "Lawn & Garden - Chemical Pest Control",
    priceRange: "> 1000",
    referralFeePercentage: "9.00%",
  },
  {
    category: "Lawn & Garden - Solar Devices",
    priceRange: "All",
    referralFeePercentage: "8%",
  },
  {
    category: "Lawn and Garden - Planters",
    priceRange: "<= 300",
    referralFeePercentage: "13%",
  },
  {
    category: "Lawn and Garden - Planters",
    priceRange: "> 300 and <= 15000",
    referralFeePercentage: "10%",
  },
  {
    category: "Lawn and Garden - Planters",
    priceRange: "> 15000",
    referralFeePercentage: "5%",
  },
  {
    category: "Lawn and Garden - Plants Seeds & Bulbs",
    priceRange: "<= 500",
    referralFeePercentage: "9.50%",
  },
  {
    category: "Lawn and Garden - Plants Seeds & Bulbs",
    priceRange: "> 500",
    referralFeePercentage: "11%",
  },
  {
    category: "Lawn and Garden - Outdoor equipments",
    priceRange: "All",
    referralFeePercentage: "6.50%",
  },
  {
    category: "Kitchen - Non Appliances",
    priceRange: "<= 300",
    referralFeePercentage: "6%",
  },
  {
    category: "Kitchen - Non Appliances",
    priceRange: "> 300",
    referralFeePercentage: "11.50%",
  },
  {
    category: "Kitchen - Glassware & Ceramicware",
    priceRange: "<= 500",
    referralFeePercentage: "4.00%",
  },
  {
    category: "Kitchen - Glassware & Ceramicware",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "11.00%",
  },
  {
    category: "Kitchen - Glassware & Ceramicware",
    priceRange: "> 1000",
    referralFeePercentage: "12.50%",
  },
  {
    category: "Kitchen - Gas Stoves & Pressure Cookers",
    priceRange: "<= 1500",
    referralFeePercentage: "6%",
  },
  {
    category: "Kitchen - Gas Stoves & Pressure Cookers",
    priceRange: "> 1500",
    referralFeePercentage: "10%",
  },
  {
    category: "Large Appliances (excl. specified)",
    priceRange: "All",
    referralFeePercentage: "5.50%",
  },
  {
    category: "Large Appliances - Accessories",
    priceRange: "All",
    referralFeePercentage: "16%",
  },
  {
    category: "Large Appliances - Chimneys",
    priceRange: "All",
    referralFeePercentage: "9.50%",
  },
  {
    category: "Large Appliances - Refrigerators",
    priceRange: "All",
    referralFeePercentage: "5%",
  },
  {
    category: "Small Appliances",
    priceRange: "<= 5000",
    referralFeePercentage: "6.50%",
  },

  {
    category: "Small Appliances",
    priceRange: "> 5000",
    referralFeePercentage: "8.00%",
  },
  {
    category: "Fans and Robotic Vacuums",
    priceRange: "<= 3000",
    referralFeePercentage: "6.50%",
  },
  {
    category: "Fans and Robotic Vacuums",
    priceRange: "> 3000",
    referralFeePercentage: "8.00%",
  },
  {
    category: "Bicycles",
    priceRange: "<= 300",
    referralFeePercentage: "7.00%",
  },
  {
    category: "Bicycles",
    priceRange: "> 300 and <= 1000",
    referralFeePercentage: "5.50%",
  },
  {
    category: "Bicycles",
    priceRange: "> 1000",
    referralFeePercentage: "6.00%",
  },
  {
    category: "Sports & Outdoors - Footwear",
    priceRange: "<= 300",
    referralFeePercentage: "11.50%",
  },
  {
    category: "Sports & Outdoors - Footwear",
    priceRange: "> 300 and <= 500",
    referralFeePercentage: "12.50%",
  },
  {
    category: "Sports & Outdoors - Footwear",
    priceRange: "> 500 and <= 1000",
    referralFeePercentage: "14.50%",
  },
  {
    category: "Sports & Outdoors - Footwear",
    priceRange: "> 1000",
    referralFeePercentage: "16.00%",
  },
  {
    category: "Coin Collectibles",
    priceRange: "All",
    referralFeePercentage: "15%",
  },
  {
    category: "Silver Coins & Bars",
    priceRange: "All",
    referralFeePercentage: "3%",
  },
  {
    category: "Furniture - Other products",
    priceRange: "<= 15000",
    referralFeePercentage: "15.50%",
  },
  {
    category: "Furniture - Other products",
    priceRange: "> 15000",
    referralFeePercentage: "11%",
  },
  {
    category: "Consumable Physical Gift Card",
    priceRange: "All",
    referralFeePercentage: "5%",
  },
  {
    category: "Warranty Services",
    priceRange: "All",
    referralFeePercentage: "30%",
  },
];

module.exports = referralFeesData;
