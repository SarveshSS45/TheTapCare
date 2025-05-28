import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion, useInView } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const cardData = [
  {
    title: "Doctor Recommended Full Body Checkup",
    parameters: "68 Parameters",
    price: "Rs 2200/-",
    description:
      "Includes: Sugar, Thyroid, Liver, Kidney, Cholesterol, Vitamin, Iron & more.",
  },
  {
    title: "Essential Women's Health Checkup",
    parameters: "72 Parameters",
    price: "Rs 2500/-",
    description:
      "Includes: Hormone, CBC, Thyroid, Vitamin, Diabetes, Iron, Liver & more.",
  },
  {
    title: "Active Fit Panel",
    parameters: "60 Parameters",
    price: "Rs 1800/-",
    description:
      "Includes: Diabetes, Cholesterol, CBC, Kidney, Thyroid & Electrolytes.",
  },
  {
    title: "Smart Basic Health Check",
    parameters: "45 Parameters",
    price: "Rs 1500/-",
    description:
      "Includes: CBC, Diabetes, Liver Function, Kidney Function, Iron Studies.",
  },
];

const HC_WhatWeOffer = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <section id="what-we-offer">
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-10 px-4 md:px-12 bg-gray-50 relative"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[#1e88e5] mb-8 text-center">
          What We Offer
        </h2>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          modules={[Navigation, Pagination]}
          className="pb-12"
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>{card.parameters}</strong> &nbsp;|&nbsp;
                    <strong>{card.price}</strong>
                  </p>
                  <p className="text-gray-700 mt-2">{card.description}</p>
                </div>
                <div className="mt-6">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="swiper-button-prev absolute top-1/2 -translate-y-1/2 left-0 p-3 bg-white/80 rounded-full shadow-md z-10 hover:bg-white transition duration-200" />
        <div className="swiper-button-next absolute top-1/2 -translate-y-1/2 right-0 p-3 bg-white/80 rounded-full shadow-md z-10 hover:bg-white transition duration-200" />

        {/* Pagination Dots */}
        <div className="swiper-pagination mt-8 !relative z-10 text-center" />
      </motion.div>
    </section>
  );
};

export default HC_WhatWeOffer;
