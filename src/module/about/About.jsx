import React, { useEffect } from "react";

import AboutWhoWeAre from "./AboutWhoWeAre";
import AboutBanner from "./AboutBanner";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <AboutBanner/>
    <AboutWhoWeAre/>
    </>
  )

};

export default About;
