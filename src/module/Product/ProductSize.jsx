import React, { useState } from "react";
import { Monitor } from "lucide-react";

const ProductSize = ({ availableSizes }) => {
  if (!availableSizes) return null;
  const [selectedSize, setSelectedSize] = useState('75"');

  const sizes = [
    { 
      id: 1, 
      label: '55"', 
      subText: "Compact Setup",
      specifications: {
        "Product form": "Tablet",
        "Appearance Size": "55 Inches",
        "LCD": {
          "Screen Size": "55 Inches",
          "Screen Resolution": "INCELL 3840*2160"
        },
        "TP": "Glass Touch Screen",
        "Battery": {
          "Type": "Lithium-ion polymer battery",
          "Capacity": "3.8V/6600mAh",
          "Duration": "4 hours"
        },
        "Camera": {
          "Front": "5MP",
          "Rear": "13MP"
        },
        "SIM": "2 SIM",
        "Flash light": "Support",
        "Speaker": "Single K Class BOX Speaker",
        "G_sensor": "Built-in: Gravity Acceleration Sensor G-SENSOR",
        "E-COMPASS": "Not Supported",
        "Gyro-sensor": "Not Supported",
        "ALS-PS sensor": "Not Supported",
        "Charging Indicator Light": "Not Supported"
      }
    },
    { 
      id: 2, 
      label: '65"', 
      subText: "Standard Office",
      specifications: {
        "Product form": "Tablet",
        "Appearance Size": "65 Inches",
        "LCD": {
          "Screen Size": "65 Inches",
          "Screen Resolution": "INCELL 3840*2160"
        },
        "TP": "Glass Touch Screen",
        "Battery": {
          "Type": "Lithium-ion polymer battery",
          "Capacity": "3.8V/7500mAh",
          "Duration": "4.5 hours"
        },
        "Camera": {
          "Front": "8MP",
          "Rear": "16MP"
        },
        "SIM": "2 SIM",
        "Flash light": "Support",
        "Speaker": "Dual K Class BOX Speaker",
        "G_sensor": "Built-in: Gravity Acceleration Sensor G-SENSOR",
        "E-COMPASS": "Supported",
        "Gyro-sensor": "Not Supported",
        "ALS-PS sensor": "Not Supported",
        "Charging Indicator Light": "Supported"
      }
    },
    { 
      id: 3, 
      label: '75"', 
      subText: "Premium Boardroom",
      specifications: {
        "Product form": "Tablet",
        "Appearance Size": "75 Inches",
        "LCD": {
          "Screen Size": "75 Inches",
          "Screen Resolution": "INCELL 3840*2160"
        },
        "TP": "Glass Touch Screen",
        "Battery": {
          "Type": "Lithium-ion polymer battery",
          "Capacity": "3.8V/8800mAh",
          "Duration": "5 hours"
        },
        "Camera": {
          "Front": "8MP",
          "Rear": "16MP"
        },
        "SIM": "2 SIM",
        "Flash light": "Support",
        "Speaker": "Single K Class BOX Speaker",
        "G_sensor": "Built-in: Gravity Acceleration Sensor G-SENSOR",
        "E-COMPASS": "Not Supported",
        "Gyro-sensor": "Not Supported",
        "ALS-PS sensor": "Not Supported",
        "Charging Indicator Light": "Not Supported"
      }
    },
    { 
      id: 4, 
      label: '86"', 
      subText: "Large Cinema",
      specifications: {
        "Product form": "Tablet",
        "Appearance Size": "86 Inches",
        "LCD": {
          "Screen Size": "86 Inches",
          "Screen Resolution": "INCELL 3840*2160"
        },
        "TP": "Glass Touch Screen",
        "Battery": {
          "Type": "Lithium-ion polymer battery",
          "Capacity": "3.8V/10000mAh",
          "Duration": "6 hours"
        },
        "Camera": {
          "Front": "12MP",
          "Rear": "20MP"
        },
        "SIM": "2 SIM",
        "Flash light": "Support",
        "Speaker": "Dual K Class BOX Speaker",
        "G_sensor": "Built-in: Gravity Acceleration Sensor G-SENSOR",
        "E-COMPASS": "Supported",
        "Gyro-sensor": "Supported",
        "ALS-PS sensor": "Supported",
        "Charging Indicator Light": "Supported"
      }
    },
    { 
      id: 5, 
      label: '98"', 
      subText: "Ultra Presentation",
      specifications: {
        "Product form": "Tablet",
        "Appearance Size": "98 Inches",
        "LCD": {
          "Screen Size": "98 Inches",
          "Screen Resolution": "INCELL 3840*2160"
        },
        "TP": "Glass Touch Screen",
        "Battery": {
          "Type": "Lithium-ion polymer battery",
          "Capacity": "3.8V/12000mAh",
          "Duration": "7 hours"
        },
        "Camera": {
          "Front": "16MP",
          "Rear": "24MP"
        },
        "SIM": "2 SIM",
        "Flash light": "Support",
        "Speaker": "Quad K Class BOX Speaker",
        "G_sensor": "Built-in: Gravity Acceleration Sensor G-SENSOR",
        "E-COMPASS": "Supported",
        "Gyro-sensor": "Supported",
        "ALS-PS sensor": "Supported",
        "Charging Indicator Light": "Supported"
      }
    },
  ];

  const selectedSizeData = sizes.find(size => size.label === selectedSize);

  const renderSpecificationValue = (value) => {
    if (typeof value === 'object' && value !== null) {
      return (
        <div className="space-y-1">
          {Object.entries(value).map(([subKey, subValue]) => (
            <div key={subKey} className="text-sm">
              <span className="text-gray-600">{subKey}: </span>
              <span className="text-gray-900 font-medium">{subValue}</span>
            </div>
          ))}
        </div>
      );
    }
    return <span className="text-gray-900 font-medium text-sm">{value}</span>;
  };

  return (
    <div className="w-full">
      <section className="relative w-full pt-10 pb-6">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 tracking-tight">
          Available Sizes
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
          {sizes.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedSize(item.label)}
              className={`relative cursor-pointer rounded-2xl transition-all duration-300 transform
                ${
                  selectedSize === item.label
                    ? "bg-gradient-to-br from-gray-900 to-black scale-105 shadow-2xl"
                    : "bg-white hover:scale-105 hover:shadow-xl"
                }
                border ${
                  selectedSize === item.label
                    ? "border-black"
                    : "border-gray-200"
                }
              `}
            >
              {/* Glow Effect */}
              {selectedSize === item.label && (
                <div className="absolute inset-0 rounded-2xl bg-white/10 blur-xl -z-10"></div>
              )}

              <div className="p-6 flex flex-col items-center justify-center space-y-4">
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full transition-all duration-300
                    ${
                      selectedSize === item.label
                        ? "bg-white/10 text-white"
                        : "bg-gray-100 text-gray-700"
                    }
                  `}
                >
                  <Monitor className="w-8 h-8" strokeWidth={1.2} />
                </div>

                <div className="text-center">
                  <h3
                    className={`text-3xl font-light tracking-tight transition-colors
                      ${
                        selectedSize === item.label
                          ? "text-white"
                          : "text-gray-900"
                      }
                    `}
                  >
                    {item.label}
                  </h3>

                  <p
                    className={`text-[11px] uppercase tracking-widest mt-2 transition-colors
                      ${
                        selectedSize === item.label
                          ? "text-white/70"
                          : "text-gray-500"
                      }
                    `}
                  >
                    {item.subText}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>


        {selectedSizeData && (
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Product Specifications - {selectedSize}
            </h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                {Object.entries(selectedSizeData.specifications).map(([key, value], index) => (
                  <div key={key} className={`p-4 border-b border-r border-gray-100 ${
                    index % 3 === 2 ? 'md:border-r-0' : ''
                  } ${
                    index >= Object.keys(selectedSizeData.specifications).length - 3 ? 'border-b-0' : ''
                  }`}>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                        {key}
                      </h4>
                      <div className="text-gray-700">
                        {renderSpecificationValue(value)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default ProductSize;
