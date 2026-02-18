import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import p1 from "../../assets/product/p-1.png";
import p2 from "../../assets/product/p-2.png";
import p3 from "../../assets/product/p-3.png";
import p4 from "../../assets/product/p-4.png";

const ProductPhotos = () => {
  const [activeId, setActiveId] = useState(null);

  const products = [
    { id: 1, img: p1 },
    { id: 2, img: p2 },
    { id: 3, img: p3 },
    { id: 4, img: p4 },
    { id: 5, img: p1 },
    { id: 6, img: p2 },
  ];

  return (
    <div className="flex items-center justify-center bg-white py-8">
      <div className="w-full max-w-6xl">
        <Swiper
          modules={[]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="product-photos-swiper"
        >
          {products.map((product) => {
            const isActive = activeId === product.id;

            return (
              <SwiperSlide key={product.id}>
                <div
                  onClick={() => setActiveId(product.id)}
                  className={`
                    relative w-48 h-48 flex items-center justify-center cursor-pointer mx-auto
                    transition-all duration-300 ease-in-out border-2 bg-[#EBEBEB]
                    
                    ${
                      isActive
                        ? "bg-gradient-to-t from-[#60CFEF] to-white border-[#60CFEF]"
                        : "border-transparent hover:bg-gradient-to-t hover:from-[#60CFEF] hover:to-white hover:border-[#60CFEF]"
                    }
                  `}
                >
                  <img
                    src={product.img}
                    alt={`Tablet view ${product.id}`}
                    className="w-4/5 h-4/5 object-contain"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductPhotos;
