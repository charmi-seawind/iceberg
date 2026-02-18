import React from "react";
import { motion } from "framer-motion";
import Container from "../../components/Container";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const contactInfo = [
  { label: "Email:", value: "info@icebergbusiness.com" },
  { label: "Phone:", value: "+91 9099907779" },
  {
    label: "Address:",
    value:
      "B-1103, Mondeal Heights, Near Novotel Hotel, SG Highway, Ahmedabad - 380015",
  },
];

const socialLinks = [
  { icon: <FaInstagram size={18} />, link: "#" },
  { icon: <FaFacebookF size={16} />, link: "#" },
  { icon: <FaLinkedinIn size={18} />, link: "#" },
  { icon: <FaXTwitter size={16} />, link: "#" },
];

const formFields = [
  { label: "Name", type: "text", placeholder: "John Smith" },
  { label: "Organization", type: "text", placeholder: "Your Company Name" },
  { label: "Email", type: "email", placeholder: "johnsmith@gmail.com" },
  { label: "Phone", type: "tel", placeholder: "+1 (555) 000-0000" },
];

const ContactDetails = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.grecaptcha) {
      const recaptchaResponse = window.grecaptcha.getResponse();
      if (!recaptchaResponse) {
        alert("Please complete the reCAPTCHA verification.");
        return;
      }
      alert("Form submitted successfully!");
      window.grecaptcha.reset();
    }
  };

  return (
    <section className="bg-white text-black py-4 lg:py-15 font-sans relative overflow-hidden">
      <Container>
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif tracking-tight leading-[1.05] mb-6 text-3xl sm:text-4xl md:text-6xl cursor-pointer"
        >
          Contact Us
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 py-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            {[
              "We value your feedback, inquiries, and suggestions, as they help us grow and serve you better. Whether you're exploring our solutions, need technical assistance, or wish to collaborate, our team is here to support you every step of the way.",
              "Reach out to us through any of the contact methods below, and we'll ensure a prompt and helpful response. Your voice matters to us, and we look forward to building meaningful connections. Let's start the conversation today.",
            ].map((text, i) => (
              <p key={i} className="text-gray-400 text-lg leading-relaxed mb-7">
                {text}
              </p>
            ))}

            <h2 className="text-[42px] font-medium text-black mb-6 tracking-tight">
              Get in touch
            </h2>

            {contactInfo.map((item, index) => (
              <div key={index} className="mb-5">
                <p className="text-[#888888] text-base mb-1 font-medium">
                  {item.label}
                </p>
                <p className="text-[#1a1a1a] text-lg font-normal">
                  {item.value}
                </p>
              </div>
            ))}

            <div>
              <p className="text-[#888888] text-base mb-4 font-medium">
                Follow us
              </p>
              <div className="flex gap-3">
                {socialLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-all"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formFields.map((field, index) => (
                  <div key={index} className="space-y-2">
                    <label className="text-base text-gray-600 font-medium">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full bg-white border border-gray-500 mt-2 rounded-xl p-4 text-gray-600 focus:ring-1 focus:ring-[#2c9aef] outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <label className="text-base text-gray-600 font-medium">
                  Product Interested In
                </label>
                <select className="w-full bg-white border mt-2 border-gray-500 rounded-xl p-4 text-gray-600 focus:ring-1 focus:ring-[#2c9aef] outline-none transition-all">
                  {[
                    "Seamless Performance - Google EDLA Certified Interactive Boards",
                    "AI-Powered Interactive Flat Panels (IFP)",
                    "Android Tablet Manufacturing",
                  ].map((item, i) => (
                    <option key={i}>{item}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-base text-gray-600 font-medium">
                  What Can I Help You...
                </label>
                <textarea
                  rows="6"
                  placeholder="Hello, I'd like to enquire about..."
                  className="w-full bg-white border border-gray-500 mt-2 rounded-xl p-4 text-gray-600 focus:ring-1 focus:ring-[#2c9aef] outline-none resize-none placeholder:text-gray-400"
                />
              </div>

              <div className="g-recaptcha" data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"></div>

              <button
                type="submit"
                className="w-full bg-[#2c9aef] hover:bg-[#259cf7] text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg active:scale-[0.98]"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ContactDetails;
