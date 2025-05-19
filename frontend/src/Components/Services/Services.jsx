import React from "react";
import Button from "../Button/Button";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ScienceIcon from "@mui/icons-material/Science";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[0, 1].map((index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={cardVariants}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`${
                    index === 0 ? "bg-blue-100" : "bg-indigo-100"
                  } rounded-full w-14 h-14 flex items-center justify-center mr-4`}
                >
                  {index === 0 ? (
                    <ScienceIcon className="text-blue-600 text-3xl" />
                  ) : (
                    <LocalHospitalIcon className="text-indigo-600 text-3xl" />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {index === 0 ? "Lab Test Booking" : "On-Call Doctor Consultation"}
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                {index === 0
                  ? "Easily book your lab tests on call or WhatsApp. Trusted phlebotomists will come to your home to collect your samples."
                  : "Consult certified doctors from the comfort of your home. Fast, reliable, and affordable consultations at your convenience."}
              </p>
              <Button label={index === 0 ? "Book Lab Test" : "Consult Doctor"} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;