import React, { useEffect } from "react";
import PrivacyBanner from "./PrivacyBanner";
import PrivacyContent from "./PrivacyContent";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PrivacyBanner/>
      <PrivacyContent/>
    </>
  )
};

export default Privacy;
