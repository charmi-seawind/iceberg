import React, { useEffect } from "react";

import HeroSection from "./HeroSection";
import WhoWeAre from "./WhoWeAre";
import WhyChoose from "./WhyChoose";

import ProductData from "./ProductData";
import Industry from "./Industry";

import CertificationsHome from "./CertificationsHome";


const Home = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
     <HeroSection/>
   <WhoWeAre/>
   <WhyChoose/>
  <ProductData/>
  <Industry/>
<CertificationsHome/>

    </div>
  );
};

export default Home;
