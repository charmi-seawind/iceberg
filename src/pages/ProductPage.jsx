import React from 'react'

import Product from '../module/Product/Product'

const ProductPage = () => {
  const productData = [
    {
      title: "Seamless Performance – Google EDLA Certified Interactive Boards",
      label: "Seamless Performance – Google EDLA Certified Interactive Boards",
      overview: "Experience unmatched performance with next-generation Google EDLA Certified Interactive Boards. Designed for smart classrooms, boardrooms, and collaborative environments, these boards offer full Google Play compatibility and high-speed, secure Android performance.",
      keyFeatures: [
        "Google EDLA Certification – Official Google validation for secure, fast, optimized Android",
        "Full Google Play Access – Download & use educational/corporate apps instantly",
        "Auto Security & OS Updates",
        "Ultra-Smooth Writing Performance",
        "20+ Touch Points with Zero-Lag Response",
        "4K UHD Anti-Glare Display",
        "High Brightness & Wide Viewing Angle",
        "Dual OS: Android + Optional Windows Slot",
        "Wireless Screen Sharing (Multi-User)",
        "Proximity Sensors & Eye Care Mode",

      ],
      availableSizes: ["55\"", "65\"", "75\"", "86\"", "98\""],
      idealFor: ["Smart Classrooms", "Enterprises & Boardrooms", "Training Institutes", "Government & PSU Projects", "Co-working Spaces"],
      compliance: ["BIS Certified", "Google EDLA Compliance", "ISO Manufacturing Standards", "ROHS & Safety Certifications"]
    },
    {
      title: "AI-Powered Interactive Flat Panels (IFP)",
      label: "AI-Powered Interactive Flat Panels (IFP)",
      overview: "Our AI-powered Interactive Flat Panels are engineered to transform how people teach, collaborate, and present. With intuitive touch, stunning 4K visuals, and embedded AI tools, these panels create an immersive experience.",
      keyFeatures: [
        "AI-Enhanced Smart Tools (Voice Commands, Gesture Detection, Auto Notes)",
        "Zero-Bonding Technology for precision touch",
        "4K Ultra HD Display with vivid colors",
        "Easy Annotation & Collaboration Tools",
        "Multi-Touch Recognition (20–40 touch points)",
        "Wireless Casting (AirPlay, Miracast, Chromecast)",
        "High-Fidelity Speakers",
        "Split-Screen Multitasking",
        "Secure Screen Lock & Admin Controls",
        "Optional OPS Slot for Windows PC"
      ],
      idealFor: ["Schools & Smart Education", "Corporates & Offices", "Training Centers", "Hospitals, Hotels, Retail", "Product Demos & Live Presentations"],
      compliance: ["BIS", "ISO", "ROHS", "Safety Standards"]
    },
    {
      title: "Android Tablet Manufacturing",
      label: "Android Tablet Manufacturing",
      overview: "Iceberg manufactures high-performance Android tablets designed for education, enterprises, field operations, hospitality, healthcare, and OEM requirements. Durable, reliable, and optimized for learning and productivity.",
      keyFeatures: [
        "Android 12/13/14 Support",
        "Quad-Core / Octa-Core Processors",
        "8 / 10.1 / 11 / 12.3 Models Available",
        "4G LTE / WiFi Options",
        "Long Battery Life (5000–8000 mAh)",
        "Full Custom Branding (OEM/ODM)",
        "Rugged Options Available (Shockproof / Drop-tested)",
        "Dedicated Kids/Education Mode (Optional)",
        "High-Resolution Cameras",
        "Secure Device Management (MDM Integration)"
      ],
      idealFor: ["Schools & EdTech Companies", "Corporates & Field Staff", "Logistics & Delivery Solutions", "Retail & POS Systems", "Hospitals & Hospitality", "Government Tender Projects"],
      compliance: ["BIS Certified", "ROHS", "All India Safety & Quality Approvals", "Custom OEM branding options available"]
    }
  ];
  
  return (
    <div>
     <Product productData={productData} />
    </div>
  )
}

export default ProductPage