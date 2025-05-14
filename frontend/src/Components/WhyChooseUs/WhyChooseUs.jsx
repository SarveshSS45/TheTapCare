import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { AccessTime, Verified, Favorite } from "@mui/icons-material";
import { useEffect } from "react";

const features = [
  {
    title: "Quality and Trust Assured",
    description: "Up to 95% samples processed in NABL-accredited labs",
    icon: <Verified className="text-white" fontSize="large" />,
    bg: "bg-blue-500",
  },
  {
    title: "On-time Mantra",
    description: "Reports in 6 hrs after samples reach the lab",
    icon: <AccessTime className="text-white" fontSize="large" />,
    bg: "bg-green-500",
  },
  {
    title: "Trusted by Doctors",
    description: "9 out of 10 doctors trust that Thyrocare reports are accurate and reliable",
    icon: <Favorite className="text-white" fontSize="large" />,
    bg: "bg-red-500",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8 bg-gray-50" ref={ref}>
      <div className="max-w-4xl mx-auto text-center mb-10">
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-2"
          initial="hidden"
          animate={controls}
          variants={cardVariants}
        >
          Why Choose Us
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600"
          initial="hidden"
          animate={controls}
          variants={cardVariants}
        >
          Quality and Trust assured
        </motion.p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            custom={index}
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full ${feature.bg} mb-4`}
            >
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
