import React from "react";

const ProductKeyFeatures = ({ keyFeatures }) => {
  return (
    <div className="w-full">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        Key Features
      </h2>

      <div className="py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pr-2">
          {keyFeatures?.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-medium text-gray-900 text-start">
                {feature}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductKeyFeatures;