// frontend/src/Components/HostCamp/Components/HC_CTAButton/HC_CTAButton.jsx

import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const HC_CTAButton = () => {
  return (
    <section
      id="cta-final"
      className="relative z-10 w-full flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-r from-[#e3f1fc] via-white to-[#d6f7e8]"
    >
      <h2 className="text-2xl md:text-4xl font-black text-[#1e88e5] mb-7 text-center drop-shadow">
        Book Now and Host a Camp
      </h2>
      <button
        className="flex items-center bg-gradient-to-r from-[#1e88e5] to-[#1ABC9C] text-white font-extrabold text-xl px-10 py-4 rounded-full shadow-2xl hover:scale-105 transition cursor-pointer"
        style={{ boxShadow: '0 4px 24px 0 #1e88e540' }}
      >
        <CalendarMonthIcon className="mr-2" />
        Host a Camp Now
      </button>
    </section>
  );
};

export default HC_CTAButton;