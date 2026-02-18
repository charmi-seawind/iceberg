import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import pro1 from "../../assets/home/pro-1.avif";
import pro2 from "../../assets/home/pro-2.avif";
import pro3 from "../../assets/home/pro-3.avif";

const projects = [
  {
    id: 1,
    title: "EDLA Interactive Boards",
    category: "Marketing",
    image: pro1,
    link: "/products",
  },
  {
    id: 2,
    title: "AI Interactive Flat Panels",
    category: "Branding",
    image: pro2,
    link: "/products",
  },
  {
    id: 3,
    title: "Android Tablets",
    category: "Development",
    image: pro3,
    link: "/products",
  },
];

const ProductData = () => {
  return (
    <section className="bg-white ">
      <Container>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-black font-serif leading-[1.05] tracking-tight mb-4
                       text-3xl sm:text-4xl md:text-6xl"
          >
            Products Overview
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-500 font-medium text-sm sm:text-base md:text-xl max-w-full sm:max-w-lg"
          >
            Showcase main product categories through an impactful visual
            journey.
          </motion.p>
        </motion.div>

        <div className="relative flex flex-col gap-6 sm:gap-8 md:gap-10">
          {projects.map((project, index) => {
            const cardRef = useRef(null);
            const { scrollYProgress } = useScroll({
              target: cardRef,
              offset: ["start end", "start start"],
            });
            const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

            return (
              <motion.div
                key={project.id}
                ref={cardRef}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="sticky w-full flex items-center justify-center"
                style={{ top: `${40 + index * 20}px` }}
              >
                <motion.div
                  style={{ scale }}
                  className="relative w-full sm:w-[90%] md:w-[80%] lg:w-[90%] aspect-video sm:aspect-[16/9] md:aspect-video rounded-[30px] sm:rounded-[35px] md:rounded-[40px] overflow-hidden group bg-gray-100 shadow-2xl"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />

                  <div className="absolute top-4 sm:top-8 md:top-16 left-4 sm:left-8 md:left-16 z-10">
                    <h3
                      className="text-white font-semibold uppercase tracking-tighter leading-tight
                                   text-2xl sm:text-3xl md:text-5xl lg:text-6xl max-w-xs sm:max-w-xl md:max-w-2xl"
                    >
                      {project.title}
                    </h3>
                  </div>

                  <Link
                    to={project.link}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="px-6 py-3 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white font-bold uppercase tracking-widest text-xs sm:text-sm md:text-base">
                      Explore Product
                    </div>
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mt-6 sm:mt-8 md:mt-10"
        >
          <Link
            to="/products"
            className="group flex items-center font-bold gap-4 sm:gap-6 text-xl sm:text-2xl md:text-3xl capitalize tracking-tighter"
          >
            View All Products
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-gray-300 flex items-center justify-center
                         group-hover:bg-black group-hover:text-white transition-all duration-300"
            >
              <FiArrowRight
                size={20}
                className="sm:20 md:28 transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default ProductData;
