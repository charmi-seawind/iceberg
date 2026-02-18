import React from "react";
import { ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductCompliance = ({ compliance, productIndex }) => {
  const complianceData = compliance || [];
  const navigate = useNavigate();

  const handleInquiryClick = () => {
    navigate('/contact');
  };

  return (
    <div className="w-full">
      <section className="mt-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          Compliance & Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {complianceData.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-300 p-6 hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors flex-shrink-0 mt-0.5" />
                <h3 className="text-sm font-medium text-gray-900 group-hover:text-white transition-colors leading-snug">
                  {item}
                </h3>
              </div>
            </div>
          ))}
        </div>

      
        <div className="flex flex-col sm:flex-row justify-end gap-4 mt-8">
          <button 
            onClick={handleInquiryClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 cursor-pointer"
          >
            Inquiry Now
          </button>
          {productIndex === 0 && (
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 cursor-pointer">
              Buy Now
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductCompliance;
