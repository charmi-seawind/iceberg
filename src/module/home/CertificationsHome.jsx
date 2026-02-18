import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Container from "../../components/Container";
import certi1 from "../../assets/certificate/certi1.png";
import certi2 from "../../assets/certificate/certi2.png";


const journeyData = [
  {
    year: "2025",
    title: "CGA Cluster of Achievers",
    description:
      "Awarded to Virtual Filaments Private Limited for pioneering innovation in AI-powered education technology.Recognizes excellence in transforming learning experiences through intelligent, scalable, and future-ready digital solutions.",
    image: certi1,
  },
  {
    year: "2025",
    title: "India Education Summit & Awards",
    description:
      "Honoring Virtual Filaments Private Limited for redefining digital education through breakthrough innovation.Recognizes exceptional impact in delivering transformative, technology-driven learning solutions.",
    image: certi2,
  },
  
];

const CertificationsHome = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section ref={containerRef} className="bg-white  font-sans">
      <Container>
        <div className="mb-8 sm:mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-black font-serif tracking-tight leading-[1.05] mb-6
                       text-3xl sm:text-4xl md:text-6xl"
          >
            Certifications & Compliance Snapshot
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-500 font-medium
                       text-sm sm:text-base md:text-xl max-w-full sm:max-w-lg"
          >
            Build trust & tender eligibility
          </motion.p>
        </div>

        <div className="relative">
        
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-100 -translate-x-1/2 hidden md:block">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute top-0 left-0 w-full h-full bg-[#2c9aef]"
            />
          </div>

          
          <div className="space-y-16 sm:space-y-20">
            {journeyData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-1/2 flex justify-center ">
                  <motion.h3
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="font-semibold uppercase tracking-tighter text-[#e7f2fa]
                               text-6xl sm:text-7xl md:text-[10vw]"
                  >
                    {item.year}
                  </motion.h3>
                </div>

                <div className="hidden md:block relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="w-10 h-10 rounded-full bg-[#2c9aef]
                               border-4 border-white shadow-xl ring-4 ring-gray-50"
                  />
                </div>

                <div className="w-full md:w-1/2 ">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <h4 className="text-xl sm:text-2xl md:text-4xl font-semibold uppercase tracking-tighter mb-4 sm:mb-6">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 ">
                      {item.description}
                    </p>

                    <div className="relative aspect-video rounded-[20px] sm:rounded-[30px] overflow-hidden group">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CertificationsHome;
