import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import aboutbanner from "../../assets/about/about-banner.jpg";

const AboutBanner = () => {
  const { scrollYProgress } = useScroll();

  const imageScale = useTransform(scrollYProgress, [0, 0.4], [1.1, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.3], ["0%", "-20%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.4]);

  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden">
      <div className="relative w-full h-full min-h-[100svh]">
        <motion.div style={{ scale: imageScale }} className="absolute inset-0">
          <img
            src={aboutbanner}
            alt="About Iceberg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        </motion.div>

        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="relative z-10 min-h-[100svh] flex flex-col items-center justify-center text-center
                     px-4 sm:px-6 md:px-10"
        >
          <span className="text-xs sm:text-sm tracking-widest uppercase text-white/70 mb-4">
            About Us
          </span>

          <h1
            className="font-semibold text-white leading-tight max-w-7xl
                       text-3xl sm:text-4xl md:text-6xl lg:text-7xl"
          >
            Building Intelligent Technology for a Smarter Tomorrow
          </h1>

          <p
            className="mt-5 sm:mt-6 max-w-2xl text-white/80
                       text-sm sm:text-base md:text-lg"
          >
            Iceberg Business Solutions delivers AI-powered hardware solutions
            empowering education, enterprises, and government institutions.
          </p>
        </motion.div>

        <div
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2
                        flex flex-col items-center text-white/60"
        >
          <span className="text-[10px] sm:text-xs uppercase tracking-widest mb-2">
            Scroll
          </span>
          <div className="w-[2px] h-8 sm:h-10 bg-white/40 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
