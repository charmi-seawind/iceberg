import React from "react";

const ProductIdealFor = ({ idealFor }) => {
  const items = idealFor || [
    "Educational Institutions",
    "Corporate Boardrooms", 
    "Healthcare Facilities",
    "Government Offices",
    "Training Centers",
    "Retail Showrooms"
  ];

  return (
    <div className="w-full">
      <section className="relative w-full pt-10 pb-6">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 tracking-tight">
          Ideal For
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div key={index} className="group bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 p-2 shadow-md hover:shadow-2xl hover:scale-105 hover:border-blue-300 transition-all duration-300 ">
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {item}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductIdealFor;
