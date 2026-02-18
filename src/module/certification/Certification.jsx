import React, { useEffect } from "react";


import CertificationData from "./CertificationData";
import CertificationBanner from "./CertificationBanner";

const Certification = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
    <CertificationBanner/>
     <CertificationData/>
    </div>
  );
};

export default Certification;
