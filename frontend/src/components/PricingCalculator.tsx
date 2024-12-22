import React, { useState, useEffect } from "react";
import { Calculator } from "lucide-react";
import { PricingFormData } from "../types";
import { fetchBackendData } from "./api";
import { ServiceLevel } from "./ServiceLevel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PricingCalculator() {
  // Use the array variable as the initial state value
  const [category, setCategory] = useState<string[]>([]);

  // useEffect hook to fetch data on component mount
  useEffect(() => {
    async function displayData() {
      try {
        const data = await fetchBackendData();

        const sortedCategories = data.items.sort((a, b) => a.localeCompare(b));

        // Set the sorted categories to the state
        setCategory(sortedCategories);
      } catch (error) {
        console.error("Failed to display data:", error);
      }
    }

    displayData();
  }, []);

  const [formData, setFormData] = useState<PricingFormData>({
    productCategory: "3D Printers",
    sellingPrice: 0,
    weight: 0,
    duration: 0,
    shippingMode: "Easy Ship Standard",
    serviceLevel: "Easy Ship Standard Size - Basic",
    productSize: "Standard Size",
    location: "Local",
  });

  const [results, setResults] = useState<any>();

  const handleCalculate = async () => {
    // verification

    const { sellingPrice, weight, duration } = formData;

    if (sellingPrice <= 0 || weight <= 0) {
      return toast.error("Fields can't be Zero or Negative");
    }
    if (duration < 0) {
      return toast.error("Field can't be Negative");
    }

    try {
      const response = await fetch(
        "http://127.0.0.1:3000/api/v1/profitability-calculator",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Send JSON
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      const res = await response.json();
      setResults(res);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-8">
            <Calculator className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">
              Amazon Pricing Calculator
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Category
                </label>
                <select
                  name="productCategory"
                  value={formData.productCategory}
                  onChange={handleInputChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  {category.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Selling Price (₹)
                </label>
                <input
                  type="number"
                  name="sellingPrice"
                  value={formData.sellingPrice}
                  onChange={handleInputChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  step="0.1"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Storage Duration (months)
                </label>
                <input
                  type="number"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  step="0.1"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Shipping Mode
                  </label>
                  <select
                    name="shippingMode"
                    value={formData.shippingMode}
                    onChange={handleInputChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option>Easy Ship Standard</option>
                    <option>FBA Normal</option>
                    <option>FBA Exception</option>
                    <option>Seller Flex</option>
                    <option>Self Ship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Level
                  </label>
                  <select
                    name="serviceLevel"
                    value={formData.serviceLevel}
                    onChange={handleInputChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    {ServiceLevel.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Product Size
                  </label>
                  <select
                    name="productSize"
                    value={formData.productSize}
                    onChange={handleInputChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option>Standard</option>
                    <option>Heavy & Bulky</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option>Local</option>
                    <option>Regional</option>
                    <option>National</option>
                    <option>IXD</option>
                  </select>
                </div>
              </div>

              <button
                onClick={handleCalculate}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Calculate Fees
              </button>
            </div>

            {results && (
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Fee Breakdown
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Referral Fee:</span>
                    <span className="font-medium">
                      ₹{results.referralFee?.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Weight Handling Fee:</span>
                    <span className="font-medium">
                      ₹{results.weightHandlingFee?.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Closing Fee:</span>
                    <span className="font-medium">
                      ₹{results.closingFee?.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pick & Pack Fee:</span>
                    <span className="font-medium">
                      ₹{results.pickAndPackFee?.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Storage Fee:</span>
                    <span className="font-medium">
                      ₹{results.storageFee?.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Removal Fee:</span>
                    <span className="font-medium">
                      ₹{results.removalFee?.toFixed(2)}
                    </span>
                  </div>
                  <div className="h-px bg-gray-200 my-4"></div>
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-gray-900">Total Fees:</span>
                    <span className="text-blue-600">
                      ₹{results.totalFees?.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-gray-900">Net Earnings:</span>
                    <span className="text-green-600">
                      ₹{results.netEarnings?.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
}
