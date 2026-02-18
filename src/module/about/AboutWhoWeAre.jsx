import React from "react";
import { motion } from "framer-motion";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import Container from "../../components/Container";
import aboutimage1 from "../../assets/about/about-img1.jpg";
import aboutimage2 from "../../assets/about/about-img2.jpg";

/* Animations */
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* Data */
const strengths = [
  "In-house R&D",
  "OEM/ODM customization",
  "Strong supply chain & manufacturing",
  "PAN India deployment & service",
  "Global export-ready operations",
];

const visionMissionData = [
  {
    title: "Our Vision",
    content:
      "To become India’s most trusted hardware technology brand by delivering reliable, secure, and AI-integrated productivity solutions that power education, enterprise, and government institutions—driving digital transformation at scale.",
  },
  {
    title: "Our Mission",
    content:
      "To empower institutions with intelligent, purpose-built devices that enhance teaching effectiveness, improve communication, and enable data-driven decision-making through innovation, quality manufacturing, and dependable service.",
  },
];

const AboutWhoWeAre = () => {
  return (
    <section className="bg-white font-sans overflow-hidden">
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-black font-serif tracking-tight leading-tight
                       text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            About Iceberg Business Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl"
          >
            Iceberg Business Solutions Pvt. Ltd. is a progressive Indian
            technology company, headquartered in Ahmedabad, specializing in the
            manufacturing of interactive displays, smart devices, and tablet
            hardware.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
        
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
           
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 h-64 sm:h-80 md:h-[400px] lg:h-[450px]
                         rounded-[32px] lg:rounded-[40px] overflow-hidden group"
            >
              <img
                src={aboutimage1}
                alt="Office"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
            </motion.div>

            {/* Strengths */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 bg-[#e7f5ff] rounded-[32px] lg:rounded-[40px]
                         p-6 sm:p-8 relative flex flex-col transition hover:shadow-xl"
            >
              <div className="absolute top-0 left-0 bg-white rounded-br-[24px] px-6 py-3">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Our Strengths
                </h3>
              </div>

              <div className="mt-14 flex-1 flex flex-col justify-between">
                <div className="w-10 h-10 rounded-full bg-[#2c9aef]/10 flex items-center justify-center mb-4">
                  <HiOutlineBuildingOffice2 className="text-[#2c9aef] text-xl" />
                </div>

                <ul className="space-y-3 mb-6">
                  {strengths.map((text, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-[#2c9aef] rounded-full mr-3" />
                      {text}
                    </li>
                  ))}
                </ul>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  With a mission to accelerate India's digital transformation,
                  we develop world-class tech designed for learning,
                  collaboration, and productivity.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Vision / Mission / Image */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            {visionMissionData.map((block, index) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="w-full lg:w-1/3 bg-[#e7f5ff] rounded-[32px] lg:rounded-[40px]
                           p-6 sm:p-8 pt-14 relative transition hover:shadow-xl"
              >
                <div className="absolute top-0 left-0 bg-white rounded-br-[24px] px-6 py-3">
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    {block.title}
                  </h3>
                </div>

                <p className="text-gray-500 text-sm sm:text-base lg:text-lg pt-6 lg:pt-10 xl:pt-14">
                  {block.content}
                </p>
              </motion.div>
            ))}

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full lg:w-1/3 h-64 sm:h-80 lg:h-[350px]
                         rounded-[32px] lg:rounded-[40px] overflow-hidden group"
            >
              <img
                src={aboutimage2}
                alt="Team"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutWhoWeAre;
