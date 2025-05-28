import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const phrases = [
  "Gyms & Fitness Centers",
  "Clinics & Hospitals",
  "Corporate Offices",
  "NGOs",
  "Schools / Colleges",
];

const HC_Hero = () => {
  const navigate = useNavigate();

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setDisplayedText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentPhraseIndex]);

  return (
    <motion.main
      id="hc-hero"
      className="w-full flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-[#e3f1fc] via-[#ffffff] to-[#d6f7e8] px-6 md:px-16 py-14 md:py-24 gap-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Left Content */}
      <motion.div
        className="flex-1 max-w-xl space-y-7"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#1e88e5] leading-tight">
          Host a Health Camp at Your
          <br />
          <span className="text-[#1ABC9C]">Preferred Location</span>
        </h1>

        <div className="flex items-center gap-2">
          <span className="text-lg md:text-2xl font-semibold text-[#141c2b]">
            For
          </span>
          <input
            id="location-input"
            type="text"
            placeholder={displayedText}
            readOnly
            className="px-3 py-1.5 md:text-lg rounded-md border border-[#B2DFDB] focus:outline-none focus:border-[#1e88e5] w-48 md:w-64 bg-[#f8fafc] font-semibold"
          />
        </div>

        <p className="text-base md:text-lg text-[#364152]">
          Affordable preventive healthcare for your community, fully managed by
          our team in collaboration with{" "}
          <span className="font-semibold text-[#1565c0]">Thyrocare</span>,
          India's leading diagnostics provider.
        </p>

        <button
          className="inline-block bg-gradient-to-r from-[#1e88e5] to-[#1ABC9C] text-white px-7 py-3 rounded-full font-bold text-lg shadow hover:scale-105 transition"
          id="hc-hero-cta-btn"
          onClick={() => navigate("/host-camp-form")}
        >
          Host a Camp
        </button>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="flex-1 flex items-center justify-center"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <img
          className="rounded-xl w-80 h-80 md:w-[22rem] md:h-[22rem] object-cover shadow-lg"
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/42538a863f-271eabce86698eaf2a5d.png"
          alt="health camp illustration"
        />
      </motion.div>
    </motion.main>
  );
};

export default HC_Hero;