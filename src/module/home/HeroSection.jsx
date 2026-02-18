import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Link } from "react-router-dom";
import useSmoothScroll from "../../hooks/useSmoothScroll";
import video from "../../assets/home/bg-video.mp4";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useSmoothScroll();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".text-right", { autoAlpha: 0, y: 120 });
      gsap.set(".text-left", { autoAlpha: 1, y: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
        },
      });

      tl.to(imageRef.current, {
        scale: 1.15,
        ease: "none",
        duration: 4,
      });

      tl.to(
        ".text-left",
        {
          autoAlpha: 0,
          y: -120,
          ease: "power2.out",
          duration: 1.2,
        },
        1.2,
      );

      tl.to(
        ".text-right",
        {
          autoAlpha: 1,
          y: 0,
          ease: "power2.out",
          duration: 1.2,
        },
        2.6,
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <video
        ref={imageRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src={video}
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/50" />

      <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 h-[70%] w-px bg-white/40 z-20" />

      <div
        className="text-left absolute z-30 text-white
        left-4 right-4 bottom-10
        sm:left-8 sm:right-auto sm:bottom-14
        lg:left-32 lg:bottom-16
        max-w-[900px]"
      >
        <div className="overflow-hidden">
          <h1
            className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-light leading-tight animate-slide-up"
          >
            Empowering the Future with Smart Displays
            <br />
            <span className="font-semibold">& Intelligent Devices</span>
          </h1>
        </div>

        <div className="overflow-hidden mt-4">
          <p className="animate-slide-up-delay-1 text-sm sm:text-base md:text-lg max-w-2xl">
            India's Leading Manufacturer of Google EDLA Certified Interactive
            Boards, AI-Powered Interactive Flat Panels & High-Performance
            Android Tablets
          </p>
        </div>

        <div className="overflow-hidden">
          <a href="/contact">
            <button
              className="
      mt-6 bg-[#2c9aef] text-white
      px-6 py-3 text-xs sm:text-sm
      uppercase tracking-widest cursor-pointer animate-slide-up-delay-2"
            >
              Get a Quote
            </button>
          </a>
        </div>
      </div>

      <div
        className="text-right absolute z-30 text-white
        right-4 left-4 top-[65%]
        sm:left-auto sm:right-8 sm:top-1/2
        lg:right-16
        -translate-y-1/2
        max-w-md text-right"
      >
        <h2
          className="
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl
          font-light leading-tight mb-6"
        >
          We turn invasive species into
          <span className="block font-semibold">
            high-performance materials
          </span>
        </h2>

        <div className="space-y-3 mb-8">
          {[
            { text: "Explore Interactive Boards", link: "/products" },
            { text: "Discover AI Flat Panels", link: "/products" },
            { text: "View Tablets", link: "/products" },
          ].map((item) => (
            <Link
              key={item.text}
              to={item.link}
              className="
        block w-full bg-transparent
        border border-white/30
        text-white px-4 py-2
        text-xs sm:text-sm
        hover:bg-white/10 transition-colors
        text-center"
            >
              {item.text}
            </Link>
          ))}
        </div>

        <div className="space-y-2 text-xs sm:text-sm text-white/80">
          <div>Google EDLA Certified</div>
          <div>Made in India Manufacturing</div>
          <div>AI Powered Solutions</div>
          <div>BIS & Indian Compliance Approved</div>
          <div>Institutional-Grade Reliability</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
