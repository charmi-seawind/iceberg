import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../../components/Container";
import education from "../../assets/home/education.jpg";
import Corporate from "../../assets/home/Corporate.jpg";
import gov from "../../assets/home/gov.jpg";
import retail from "../../assets/home/retail.jpg";
import healthcare from "../../assets/home/healthcare.jpg";
import train from "../../assets/home/train.jpg";
import { Link } from "react-router-dom";

const content = [
  {
    title: "Education",
    description:
      "Empowering educational institutions with digital solutions that enhance student engagement, streamline admissions, and strengthen online presence. We help schools, colleges, and universities attract the right audience and build lasting credibility.",
    image: education,
  },
  {
    title: "Corporate",
    description:
      "Delivering professional digital strategies that elevate your corporate brand, improve communication, and drive business growth. From brand identity to digital transformation, we help companies stand out in competitive markets.",
    image: Corporate,
  },
  {
    title: "Government",
    description:
      "Providing secure, accessible, and user-friendly digital platforms for government organizations. Our solutions enhance public communication, improve service delivery, and ensure transparency and efficiency.",
    image: gov,
  },
  {
    title: "Retail",
    description:
      "Helping retail businesses increase visibility, attract customers, and boost sales through powerful digital experiences. We create engaging online stores and marketing strategies that drive conversions and customer loyalty.",
    image: retail,
  },
  {
    title: "Healthcare",
    description:
      "Supporting healthcare providers with reliable digital solutions that improve patient engagement, build trust, and streamline communication. We help hospitals and clinics strengthen their online presence and accessibility.",
    image: healthcare,
  },
  {
    title: "Training Centers",
    description:
      "Enabling training institutes to reach more learners and grow their brand through modern digital platforms. We create solutions that showcase courses, simplify enrollments, and enhance student interaction.",
    image: train,
  },
];


const Industry = () => {
  const [activeCard, setActiveCard] = useState(0);
  const contentRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCard(Number(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" },
    );

    contentRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <Container className="relative bg-white font-sans ">
      <motion.h1
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-black font-serif tracking-tight leading-[1.05] mb-0 md:mb-8
                   text-3xl sm:text-4xl md:text-6xl"
      >
        Industry Applications
      </motion.h1>

      <div className="flex flex-col lg:flex-row gap-12 ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 pt-10 md:pt-10 lg:py-[15vh]"
        >
          {content.map((item, index) => (
            <motion.div
              key={index}
              ref={(el) => (contentRefs.current[index] = el)}
              data-index={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`mb-10 md:mb-20 lg:mb-[30vh] transition-opacity duration-500 ${
                activeCard === index ? "opacity-100" : "opacity-30"
              }`}
            >
              <h3
                className={`text-2xl sm:text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4 transition-colors duration-500 ${
                  activeCard === index ? "text-gray-700" : "text-gray-400"
                }`}
              >
                {item.title}
              </h3>

              <p
                className={`text-sm sm:text-lg md:text-xl max-w-md transition-colors duration-500 ${
                  activeCard === index ? "text-gray-700" : "text-gray-500"
                }`}
              >
                {item.description}
              </p>

              <Link to="/products">
                <button className="mt-6 sm:mt-10 px-6 sm:px-8 py-2 sm:py-3 bg-[#2c9aef] text-white cursor-pointer rounded-full font-bold uppercase text-xs sm:text-sm tracking-widest hover:bg-indigo-700 transition-colors">
                  Read More
                </button>
              </Link>

              <div className="lg:hidden mt-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-[40vh] rounded-[30px] overflow-hidden shadow-2xl relative"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-white text-xs font-bold uppercase tracking-widest border border-white/30">
                    Phase 0{index + 1}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hidden lg:flex lg:w-1/2 h-[60vh] sticky top-16 items-center justify-center"
        >
          <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeCard}
                src={content[activeCard].image}
                alt={content[activeCard].title}
                initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute bottom-6 left-6 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-white text-sm font-bold uppercase tracking-widest border border-white/30">
              Phase 0{activeCard + 1}
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default Industry;
