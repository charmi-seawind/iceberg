import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Container from "../../components/Container";
import who1 from "../../assets/home/about1.jpg";
import { Link } from "react-router-dom";

const WhoWeAre = () => {
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const smoothY = useSpring(y, { stiffness: 80, damping: 25 });

  return (
    <Container>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-20">
        
        {/* LEFT CONTENT */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-black font-serif tracking-tight leading-[0.9] text-4xl sm:text-5xl md:text-6xl mb-6 sm:mb-8"
          >
            Who We Are
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-gray-600 font-serif tracking-tight leading-relaxed text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl"
          >
            <span className="font-semibold">
              Iceberg Business Solutions Pvt. Ltd.
            </span>
            {" "}based in Ahmedabad, Gujarat, is a multi-vertical technology company
            committed to delivering high-performance hardware for education,
            enterprise, corporate, retail, and government.
            <br /><br />
            With 100% Indian compliance certifications and cutting-edge R&D, we
            offer world-class display and device solutions designed for
            productivity, engagement, and performance.
          </motion.p>
        </motion.div>

        {/* RIGHT SIDE SINGLE IMAGE */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            ref={imageRef}
            className="relative w-full h-[300px] sm:h-[400px] overflow-hidden rounded-sm"
          >
            <motion.div
              style={{ y: smoothY }}
              className="absolute inset-0 h-[120%] -top-[10%]"
            >
              <img
                src={who1}
                alt="Who We Are"
                className="w-full h-full object-cover brightness-[0.9]"
              />
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </Container>
  );
};

export default WhoWeAre;
