import React from "react";
import { motion } from "framer-motion";
import ThyrocareLogo from "../../assets/Thyrocare.png"; 

const Partner = () => {
  return (
    <section id="partners" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Animated heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Our Trusted Lab Partner
        </motion.h2>

        {/* Animated partner card */}
        <motion.div
          id="thyrocare-partner"
          className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-sm border border-gray-100"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <img
                className="w-48 h-48 object-contain"
                src={ThyrocareLogo}
                alt="Thyrocare Logo"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Thyrocare</h3>
              <p className="text-gray-600 mb-4">
                Thyrocare is a leading diagnostic lab in India known for affordable and accurate testing. NABL-certified and tech-driven. 
                it offers a wide range of health tests and packages with home sample collection and quick reports. Trusted nationwide 
                automated lab and extensive partner network.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  NABL Certified
                </span>
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                  Government Approved
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  Trusted Since 1996
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partner;
