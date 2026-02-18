import React, { useState, useEffect } from "react";
import logo from "../../public/ice-logo.png";
import banner from "../../public/loader-bg.jpg";

const Loader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Loader Content */}
      <div className="relative z-10 w-24 h-24 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-4 border-gray-300 border-t-[#2c9aef] animate-spin" style={{animationDuration: '0.9s'}} />

        <img
          src={logo}
          alt="Loading"
          className="w-12 h-12 object-contain"
        />
      </div>
    </div>
  );
};

export default Loader;
