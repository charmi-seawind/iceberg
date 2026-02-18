import React, { useEffect } from "react";
import TermsBanner from "./TermsBanner";
import TermsContent from "./TermsContent";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TermsBanner/>
      <TermsContent/>
    </>
  )
};

export default Terms;
