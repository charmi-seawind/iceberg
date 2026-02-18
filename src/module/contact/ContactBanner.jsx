import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import contactbanner from "../../assets/contact/contactbanner.jpg"

const ContactBanner = () => {
  const { scrollYProgress } = useScroll(); 


  const imageScale = useTransform(scrollYProgress, [0, 0.4], [1.1, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.3], ["0%", "-20%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.4]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
     
      <div className="relative h-full w-full">

      
        <motion.div
          style={{ scale: imageScale }}
          className="absolute inset-0"
        >
          <img
            src={contactbanner}
            alt="Contact Iceberg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        </motion.div>

        
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        >
          <span className="text-sm tracking-widest uppercase text-white/70 mb-4">
            Contact Us
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl">
            Let's Connect & Build the Future Together
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Ready to transform your business with cutting-edge technology? 
            Get in touch with our experts today.
          </p>
        </motion.div>

       
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60">
          <span className="text-xs uppercase tracking-widest mb-2">
            Scroll
          </span>
          <div className="w-[2px] h-10 bg-white/40 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
