import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import useSmoothScroll from "../hooks/useSmoothScroll";
import ScrollToTop from "../components/ScrollToTop";

const Layout = () => {
  useSmoothScroll();
  
  return (
    <div className="relative">
      <ScrollToTop />
      <Header/>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;