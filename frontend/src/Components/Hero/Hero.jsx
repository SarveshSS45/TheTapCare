import React, { useState,useEffect, useRef  } from "react";
import BookNowForm from "../Header/Components/BookNowForm";
import { motion, AnimatePresence } from "framer-motion";
import HeroImg1 from "../../assets/HeroImg1.png";
import HeroImg2 from "../../assets/HeroImg2.png";

const Hero = ({ setHeroInView }) => {
  const [formOpen, setFormOpen] = useState(false);
  const [currentImage, setCurrentImage] = React.useState(0);
  const heroRef = useRef(null);

  const images = [HeroImg1, HeroImg2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, [setHeroInView]);

  return (
    <section id="hero"
      ref={heroRef}
      className="relative z-10 bg-gradient-to-br from-blue-600 to-indigo-800 text-white min-h-screen flex items-center"
    >
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The TapCare Now at Home in Just a Tap
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Take care of your health easily and conveniently without leaving your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              className="bg-white text-indigo-700 font-bold py-4 px-8 rounded-full hover:bg-blue-50 transition text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              onClick={() => setFormOpen(true)}
            >
              Book Lab Test
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white/10 transition text-lg">
              Consult Doctor
            </button>
          </div>
        </motion.div>

        {/* Image Slideshow */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={images[currentImage]}
              alt="Hero Slide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xs md:max-w-sm max-h-[360px] h-auto rounded-2xl border-4 border-white shadow-2xl relative z-10"
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Booking Form Modal */}
      <BookNowForm open={formOpen} onClose={() => setFormOpen(false)} />
    </section>
  );
};

export default Hero;