import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Layout from "./layouts/Layout";
import CertificationPage from "./pages/CertificationPage";
import ProductPage from "./pages/ProductPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import RefundPage from "./pages/RefundPage";
import Loader from "./components/Loader";

// import LoginPage from "./module/auth/Login";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  if (loading) return <Loader />;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="aboutus" element={<AboutPage />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="certication" element={<CertificationPage/>} />
        <Route path="contact" element={<ContactPage/>} />
        <Route path="terms" element={<TermsPage/>} />
        <Route path="privacy" element={<PrivacyPage/>} />
        <Route path="refund" element={<RefundPage/>} />
      </Route>
    </Routes>
  );
}
export default App;
