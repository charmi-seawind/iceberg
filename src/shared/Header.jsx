import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import logo from "../../public/ice-logo.png";
import Container from "../components/Container";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/aboutus" },
  { label: "Products", href: "/products" },
  { label: "Compliance & Certifications", href: "/certication" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* BACKDROP */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 z-80"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* LEFT SIDEBAR (DESKTOP) */}
      <aside className="hidden 2xl:flex fixed left-0 top-0 h-screen w-20 bg-black z-100 flex-col items-center py-8 justify-between">
        {/* MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 bg-white rounded-full flex flex-col items-center justify-center gap-1.5 shadow-xl hover:scale-105 transition"
        >
          <motion.span
            className="w-6 h-0.5 bg-black"
            animate={isOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-black"
            animate={isOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
          />
        </button>

        {/* LOGO */}
        <Link to="/">
          <img src={logo} alt="Logo" className="w-12 cursor-pointer" />
        </Link>

        {/* SOCIAL */}
        <div className="flex flex-col gap-4 text-white/60">
          <a href="https://www.facebook.com/icebergbusinesssolutionpvtltd/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="hover:text-blue-500 cursor-pointer transition" />
          </a>
          <a href="https://x.com/icebergb820" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="hover:text-gray-300 cursor-pointer transition" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="hover:text-blue-600 cursor-pointer transition" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="hover:text-red-500 cursor-pointer transition" />
          </a>
        </div>
      </aside>

      {/* MOBILE HEADER */}
      <Container className="2xl:hidden fixed top-0 left-0 right-0 h-20 bg-gray-800 z-[100] flex items-center justify-between px-4">
        {/* LOGO - LEFT */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-14 cursor-pointer" />
        </Link>

        {/* MENU BUTTON - RIGHT */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 bg-white rounded-full flex flex-col items-center justify-center gap-1.5 shadow-xl"
        >
          <motion.span
            className="w-6 h-[2px] bg-black"
            animate={isOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="w-6 h-[2px] bg-black"
            animate={isOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
          />
        </button>
      </Container>

      {/* SLIDE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -450 }}
            animate={{ x: window.innerWidth < 1536 ? 0 : 80 }}
            exit={{ x: -450 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 h-screen w-[450px] bg-white z-[90] shadow-2xl"
          >
            {/* MENU LIST */}
            <nav className="mt-24">
              <ul>
                {menuItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="relative overflow-hidden border-b border-gray-100 group"
                  >
                    <motion.span
                      className={`absolute inset-0 origin-left ${
                        location.pathname === item.href ? 'bg-[#2c9aef] scale-x-100' : 'bg-[#2c9aef] scale-x-0'
                      }`}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    />

                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`relative z-10 block py-6 px-6 text-2xl font-light transition-all duration-300 ${
                        location.pathname === item.href
                          ? 'bg-[#259cf7] text-white translate-x-2'
                          : 'text-black group-hover:bg-[#259cf7] group-hover:text-white group-hover:translate-x-2'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* BOTTOM SOCIAL */}
            <div className="absolute bottom-8 left-8 xl:hidden text-gray-500 flex gap-4">
              <a href="https://www.facebook.com/icebergbusinesssolutionpvtltd/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="hover:text-blue-500 cursor-pointer transition" />
              </a>
              <a href="https://x.com/icebergb820" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="hover:text-gray-700 cursor-pointer transition" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="hover:text-blue-600 cursor-pointer transition" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="hover:text-red-500 cursor-pointer transition" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
