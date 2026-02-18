import React, { useEffect } from "react";
import RefundBanner from "./RefundBanner";
import RefundContent from "./RefundContent";

const Refund = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <RefundBanner/>
      <RefundContent/>
    </>
  )
};

export default Refund;
