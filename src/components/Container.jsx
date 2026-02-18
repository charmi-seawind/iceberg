import React from "react";

const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`
        max-w-[1400px] mx-auto
        px-4 sm:px-6 md:px-8 lg:px-8    py-10 sm:py-12 md:py-10 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container;
