import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Container from "../../components/Container";
import who1 from "../../assets/home/who-1.avif";
import who2 from "../../assets/home/who-2.avif";
import who3 from "../../assets/home/who-3.avif";
import who4 from "../../assets/home/who-4.avif";
import { Link } from "react-router-dom";

const cardData = [
  {
    title: "Android Tablet Manufacturing",
    img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80",
    href: "/products",
  },
  {
    title: "Enterprise Tablet Solutions",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    href: "/products",
  },
  {
    title: "Education Tablet Devices",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    href: "/products",
  },
  {
    title: "Custom Tablet Hardware Integration",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    href: "/contact",
  },
];


const WhoWeAre = () => {
  return (
    <Container className="">
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
            className="
              text-black font-serif tracking-tight leading-[0.9]
              text-4xl sm:text-5xl md:text-6xl
              mb-6 sm:mb-8
            "
          >
            Who We Are
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="
              text-gray-600 font-serif tracking-tight leading-relaxed
              text-base sm:text-lg md:text-xl lg:text-2xl
              max-w-4xl
            "
          >
            <span className="font-semibold">
              Iceberg Business Solutions Pvt. Ltd.
            </span>
            based in Ahmedabad, Gujarat, is a multi-vertical technology company
            committed to delivering high-performance hardware for education,
            enterprise, corporate, retail, and government.
            <br />
            <br />
            With 100% Indian compliance certifications and cutting-edge R&D, we
            offer world-class display and device solutions designed for
            productivity, engagement, and performance.
          </motion.p>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {cardData.map((item, index) => {
            const cardRef = useRef(null);

            const { scrollYProgress } = useScroll({
              target: cardRef,
              offset: ["start end", "end start"],
            });

            const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
            const smoothY = useSpring(y, { stiffness: 80, damping: 25 });

            return (
              <Link to={item.href} className="block w-full h-full">
                <motion.div
                  key={index}
                  ref={cardRef}
                  layout
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.03 },
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                  }}
                  className="
                    relative w-full h-[220px] sm:h-[250px]
                    overflow-hidden rounded-sm cursor-pointer
                  "
                >
                  <motion.div
                    style={{ y: smoothY }}
                    className="absolute inset-0 h-[130%] -top-[15%]"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover brightness-[0.85]"
                    />

                    <motion.div
                      variants={{
                        rest: { opacity: 0.35 },
                        hover: { opacity: 0.55 },
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute inset-0 bg-black"
                    />

                 
                  </motion.div>

                  <motion.div
                    variants={{
                      rest: { y: 0 },
                      hover: { y: -20 },
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 18 }}
                    className="
                      relative z-10 h-full
                      p-6 sm:p-8 md:p-10
                      text-white flex flex-col justify-end
                    "
                  >
                    <h3 className="text-lg sm:text-xl font-serif leading-tight max-w-[220px]">
                      {item.title}
                    </h3>
                  </motion.div>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </Container>
  );
};

export default WhoWeAre;
