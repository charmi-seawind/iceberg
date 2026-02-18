import React from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import loaderimage from "/loaderimage.webp";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 font-sans">
      <Container className="py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-800 pb-8 sm:pb-10">
          <div className="flex items-start gap-4">
            <div className="text-[#2c9aef] shrink-0">
              <MapPin size={28} className="sm:w-8 sm:h-8" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base sm:text-lg">
                Find us
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed">
                B-1103, Mondeal Heights, Near Novotel Hotel, SG Highway,
                Ahmedabad, Gujarat, 380015.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-[#2c9aef] shrink-0">
              <Phone size={28} className="sm:w-8 sm:h-8" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base sm:text-lg">
                Call us
              </h4>
              <p className="text-xs sm:text-sm">+91 9099907779</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-[#2c9aef] shrink-0">
              <Mail size={28} className="sm:w-8 sm:h-8" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base sm:text-lg">
                Mail us
              </h4>
              <p className="text-xs sm:text-sm break-all">
                info@icebergbusiness.com
              </p>
            </div>
          </div>

          <div className="w-full">
            <h4 className="text-white font-bold text-lg sm:text-xl mb-4 relative inline-block">
              Subscribe
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#2c9aef]" />
            </h4>

            <form className="flex w-full">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 min-w-0 bg-[#2e2e2e] text-gray-300 px-3 sm:px-4 py-3 sm:py-4 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#2c9aef] text-white px-4 sm:px-5 py-3 sm:py-4 hover:bg-[#e65412] transition flex items-center justify-center"
              >
                <Send size={18} className="sm:w-5 sm:h-5" />
              </button>
            </form>
          </div>
        </div>
      </Container>

      <div className="bg-[#202020] py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-center md:text-left">
          <p className="flex items-center gap-2 text-[11px] sm:text-xs text-gray-500">
            <span>Copyright © 2026, All Rights Reserved</span>

            <a href="https://www.seawindsolution.com/" target="_blank" className="flex items-center gap-1 text-[#2c9aef] font-medium">
              Seawind Solution Pvt. Ltd
              <img
                src={loaderimage}
                alt="Loading"
                className="w-4 h-4 animate-spin"
              />
            </a>
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 text-[11px] sm:text-xs">
            <Link to="/" className="hover:text-[#2c9aef] transition">
              Home
            </Link>
            <Link to="/terms" className="hover:text-[#2c9aef] transition">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="hover:text-[#2c9aef] transition">
              Privacy Policy
            </Link>
            <Link to="/refund" className="hover:text-[#2c9aef] transition">
              Cancellation & Refunds
            </Link>
            <Link to="/contact" className="hover:text-[#2c9aef] transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
