import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const steps = [
  {
    title: "Select Your Service",
    description: "Choose from lab tests or doctor consultation based on your needs.",
  },
  {
    title: "Book Your Appointment",
    description: "Schedule a time that suits your convenience.",
  },
  {
    title: "Get Expert Care at Home",
    description: "Our trusted professionals will come to your home for service.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const HowItWorks = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  return (
    <section id="how-it-works" className="py-16 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          How It Works
        </h2>

        {/* Desktop layout */}
        <div className="hidden md:flex items-center justify-center gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                className="bg-white p-6 rounded-xl shadow-md text-center w-80"
                custom={index}
                initial="hidden"
                animate={controls}
                variants={cardVariants}
              >
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>

              {/* Arrow except after last card */}
              {index < steps.length - 1 && (
                <ArrowForwardIcon
                  fontSize="large"
                  className="text-indigo-400"
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile layout */}
        <div className="md:hidden grid grid-cols-1 gap-6 max-w-md mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center"
              custom={index}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
            >
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;