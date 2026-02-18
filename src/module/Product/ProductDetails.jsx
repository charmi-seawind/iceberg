import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Container from "../../components/Container";

import ProductKeyFeatures from "./ProductKeyFeatures";
import ProductSize from "./ProductSize";
import ProductCompliance from "./ProductCompliance";
import ProductIdealFor from "./ProductIdealFor";
import ProductPhotos from "./ProductPhotos";

const ProductDetails = ({ productData = [] }) => {
  const details =
    productData.length > 0
      ? productData
      : [
          {
            label:
              "Seamless Performance - Google EDLA Certified Interactive Boards",
          },
          { label: "AI-Powered Interactive Flat Panels (IFP)" },
          { label: "Android Tablet Manufacturing" },
        ];

  const [activeProduct, setActiveProduct] = React.useState(0);
  const currentProduct = productData[activeProduct] || {};

  return (
    <Container className=" font-sans">
      <div className="flex flex-col lg:flex-row gap-10  py-10 lg:gap-24">
     
        <aside className="w-full lg:w-1/3">
          <div className="lg:sticky lg:top-12 space-y-6 sm:space-y-8">
            {details.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveProduct(index)}
                className={`border-t border-gray-200 pt-5 first:border-t-0 first:pt-5 cursor-pointer transition-all
                ${
                  activeProduct === index
                    ? "bg-blue-50 px-4 py-5 rounded-lg"
                    : ""
                }`}
              >
                <p className="text-gray-900 text-base sm:text-lg font-semibold leading-snug">
                  {item.label || item.title}
                </p>
              </motion.div>
            ))}

            
           
          </div>
        </aside>

        
        <main className="w-full lg:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight flex-1">
              {currentProduct.title ||
                "Seamless Performance - Google EDLA Certified Interactive Boards"}
            </h2>
            
            {activeProduct === 0 && (
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300 ml-4 cursor-pointer">
                Buy Now
              </button>
            )}
          </div>

          <div className="">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mt-2.5">
              {currentProduct.overview ||
                "Experience unmatched performance with next-generation Google EDLA Certified Interactive Boards. Designed for smart classrooms, boardrooms, and collaborative environments."}
            </p>
          </div>
          </motion.div>


          <div className="">
            <ProductKeyFeatures
              keyFeatures={currentProduct.keyFeatures}
            />
            <ProductPhotos/>

            <ProductSize
              availableSizes={currentProduct.availableSizes}
            />

            <ProductIdealFor
              idealFor={currentProduct.idealFor}
            />

            <ProductCompliance
              compliance={currentProduct.compliance}
              productIndex={activeProduct}
            />

          </div>
        </main>
      </div>
    </Container>
  );
};

export default ProductDetails;
