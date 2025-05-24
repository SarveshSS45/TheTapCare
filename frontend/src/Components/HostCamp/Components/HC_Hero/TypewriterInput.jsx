import React, { useEffect, useState } from "react";

const TypewriterInput = () => {
  const phrases = [
    "Gyms & Fitness Centers",
    "Clinics & Hospitals",
    "Corporate Offices",
    "NGOs",
    "Schools / Colleges",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    const typeSpeed = isDeleting ? 50 : 100;

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
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentPhraseIndex]);

  return (
    <input
      id="location-input"
      type="text"
      placeholder={displayedText}
      className="px-3 py-1.5 md:text-lg rounded-md border border-[#B2DFDB] focus:outline-none focus:border-[#1e88e5] w-40 md:w-56 bg-[#f8fafc] font-semibold"
    />
  );
};

export default TypewriterInput;
