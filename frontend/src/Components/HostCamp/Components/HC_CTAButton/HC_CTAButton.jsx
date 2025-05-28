import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useNavigate } from "react-router-dom";

const HC_CTAButton = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <motion.section
      ref={sectionRef}
      id="cta-final"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-10 w-full flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-r from-[#e3f1fc] via-white to-[#d6f7e8]"
    >
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl md:text-4xl font-black text-[#1e88e5] mb-7 text-center drop-shadow"
      >
        Book Now and Host a Camp
      </motion.h2>

      {/* Animated Button with Pulse */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        animate={isInView ? { y: [0, -4, 0] } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="flex items-center bg-gradient-to-r from-[#1e88e5] to-[#1ABC9C] text-white font-extrabold text-xl px-10 py-4 rounded-full shadow-2xl transition cursor-pointer"
        style={{ boxShadow: "0 4px 24px 0 #1e88e540" }}
        onClick={() => navigate("/host-camp-form")}
      >
        <CalendarMonthIcon className="mr-2" />
        Host a Camp Now
      </motion.button>
    </motion.section>
  );
};

export default HC_CTAButton;