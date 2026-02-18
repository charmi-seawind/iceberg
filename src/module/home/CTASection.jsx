import React from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import Container from "../../components/Container";

const CTASection = () => {
  return (
    <section className="bg-[#f9fafb] py-6 flex justify-center items-center">
      <div className=" ">
        <div
          className="relative w-full rounded-[40px] shadow-xl border border-gray-100 
                     p-12 md:p-16 flex flex-col lg:flex-row items-center gap-16 
                     bg-cover bg-center "
        >
          <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />

          <div className="relative z-10 flex-1 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 bg-indigo-50 border border-indigo-100 
                         px-4 py-1.5 rounded-full mb-8"
            >
              <Shield className="w-4 h-4 text-[#2c9aef]" />
              <span className="text-xs font-bold text-[#2c9aef] uppercase tracking-wider">
                Our workflow
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold text-gray-900 
                         leading-[1.1] tracking-tight mb-10"
            >
              Ready to transform <br />
              your financial <br />
              <span className="text-[#2c9aef]">management?</span>
            </motion.h1>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-#2c9aef to-indigo-700 
                         text-white font-bold rounded-full shadow-lg 
                         shadow-indigo-200 text-lg transition-all"
            >
              Free Trial
            </motion.button>
          </div>

          <div className="relative z-10 flex-1 hidden lg:flex items-center justify-center"></div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
