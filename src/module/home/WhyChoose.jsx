import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Container from "../../components/Container";
import why1 from "../../assets/home/why-1.avif";
import why2 from "../../assets/home/why-2.avif";
import why3 from "../../assets/home/why-3.avif";
import why4 from "../../assets/home/why-4.avif";
import why5 from "../../assets/home/why-5.avif";
import why6 from "../../assets/home/why-6.avif";

const services = [
  {
    id: "01",
    title: "Google EDLA Certified Products",
    description:
      "We create distinctive brand identities that resonate with your audience and stand the test of time. From logo design to brand strategy, we ensure your message is clear and impactful.",
    image: why1,
  },
  {
    id: "02",
    title: "AI-Powered Learning & Collaboration Tools",
    description:
      "User-centric designs that are beautiful, functional, and responsive. We focus on creating seamless digital experiences that convert visitors into loyal customers.",
    image: why2,
  },
  {
    id: "03",
    title: "High-Precision Manufacturing in India",
    description:
      "Robust and scalable web applications built with the latest technologies. Our development process ensures high performance, security, and a bug-free experience.",
    image: why3,
  },
  {
    id: "04",
    title: "Custom OEM/ODM Support",
    description:
      "Data-driven marketing strategies to grow your online presence. We handle SEO, social media, and third-party integrations to maximize your business reach.",
    image: why4,
  },
  {
    id: "05",
    title: "BIS, ISO & All Indian Certifications Cleared",
    description:
      "We ensure all compliance requirements are met, delivering certified and trusted products across India.",
    image: why5,
  },
  {
    id: "06",
    title: "Robust After-Sales & PAN India Support",
    description:
      "Nationwide support infrastructure ensuring seamless after-sales service.",
    image: why6,
  },
];

const WhyChoose = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container className="bg-white font-sans selection:bg-[#2c9aef] selection:text-white relative">
      <div className="">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-black font-serif tracking-tight mb-8
                     text-4xl sm:text-5xl md:text-6xl leading-[1.05]"
        >
          Why Choose Iceberg ?
        </motion.h1>

        <motion.div
          className="border-t border-gray-200"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={service.id}
                className="border-b border-gray-200 py-6 sm:py-8 relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <div
                  className="flex items-center justify-between cursor-pointer group gap-4"
                  onClick={() => handleToggle(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative flex-1">
                    <span className="absolute -top-5 left-0 text-[#2c9aef] text-xs sm:text-sm font-medium">
                      {service.id}
                    </span>

                    <h2
                      className="mt-2 font-medium tracking-tight text-[#1a1a1a]
                                 text-lg sm:text-xl md:text-2xl
                                 transition-transform duration-300 group-hover:translate-x-2"
                    >
                      {service.title}
                    </h2>
                  </div>

                  <div
                    className={`shrink-0 rounded-full border flex items-center justify-center transition-all duration-300
                      w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16
                      ${
                        isOpen
                          ? "bg-black border-black"
                          : "border-gray-300 group-hover:border-black"
                      }`}
                  >
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <Plus
                        size={20}
                        className={isOpen ? "text-white" : "text-gray-400"}
                      />
                    </motion.div>
                  </div>
                </div>

                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 z-50
                                 w-40 h-40 rounded-lg overflow-hidden shadow-2xl pointer-events-none"
                    >
                      <img
                        src={service.image}
                        alt="Service preview"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 sm:pt-8 pb-4 max-w-2xl">
                        <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed">
                          {service.description}
                        </p>

                        {/* <button
                          className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 bg-gray-800 text-white
                                     rounded-full font-bold uppercase text-xs tracking-widest
                                     hover:bg-[#2c9aef] transition-colors"
                        >
                          Learn More
                        </button> */}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Container>
  );
};

export default WhyChoose;
