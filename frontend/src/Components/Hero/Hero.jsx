import React, { useState } from 'react';
import BookNowForm from '../Header/Components/BookNowForm';
import { motion } from 'framer-motion';

const Hero = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="relative z-10 bg-gradient-to-br from-blue-600 to-indigo-800 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Animated Text Section */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Tap Care, Now at Home in Just a Tap
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Take care of your health easily and conveniently without leaving your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => setOpenModal(true)}
              className="bg-white text-indigo-700 font-bold py-4 px-8 rounded-full hover:bg-blue-50 transition text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Book Appointment
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white/10 transition text-lg">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Animated Image Section */}
        <motion.div
          className="w-full md:w-1/2 relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm"></div>
          <img
            className="w-full max-w-md md:max-w-lg h-auto rounded-2xl shadow-2xl relative z-10"
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/5eeaad724f-fa66e3f5ad1880145c1b.png"
            alt="Doctor attending to elderly patient at home"
          />
        </motion.div>
      </div>

      {/* BookNowForm Modal */}
      <BookNowForm open={openModal} onClose={() => setOpenModal(false)} />
    </section>
  );
};

export default Hero;
