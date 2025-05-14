import React, { useState, useRef, useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What are the timings for sample collection at home?",
    answer:
      "For tests/profiles requiring prior fasting, 6:30 AM to 11:00 AM is an ideal time-slot for sample collection, whereas for non-fasting tests/profiles, you can choose any time-slot till 7:00 PM.",
  },
  {
    question: "Is same-day home blood collection possible?",
    answer:
      "Yes, you can get blood collection on the same day as per the availability of phlebotomists. Our walk-in centers also offer same-day blood collection. To ensure no inconvenience, we request 1-day prior intimation.",
  },
  {
    question: "When can I expect a callback from the team?",
    answer:
      "Once you fill in your details, you will receive a call from one of our representatives in less than 24 hrs.",
  },
  {
    question: "Is a doctor’s prescription needed to avail the testing service?",
    answer:
      "A doctor’s prescription is not required for availing any preventive healthcare package. However, in case of any illness, the patient is advised to consult their physician before booking tests/profiles.",
  },
  {
    question: "Do I have to fill in any forms when I visit a walk-in center near me for blood collection?",
    answer:
      "Only a few tests require filling of forms as per govt guidelines. Same forms are available at the center, and our technicians will guide you about the same during your visit.",
  },
  {
    question: "How can I register a complaint?",
    answer:
      "You can register a complaint by writing to us at support@thetapcare.com, WhatsApp: 8108737114.",
  },
  {
    question: "How soon will I get reports?",
    answer:
      "Reports will be released within 6 hrs of samples reaching the lab. Some tests might require higher TAT, which will be confirmed during sample collection.",
  },
];

// Custom hook to measure element height
const useMeasureHeight = () => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, [ref.current]);

  return [ref, height];
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto px-4 sm:max-w-7xl mb-12 md:w-2/3">
      <div className="text-center max-w-2xl mx-auto pt-11 sm:pt-22">
        <h2 className="text-[20px] font-bold leading-[30px] md:text-[28px] md:leading-[42px]">
          FAQ
        </h2>
        <div className="mt-6 mb-6 h-1 w-9 rounded bg-gray-400 sm:mb-9 mx-auto" />
      </div>

      <div className="space-y-4 max-w-5xl mx-auto">
        {faqs.map((faq, index) => {
          const [contentRef, height] = useMeasureHeight();
          const isOpen = openIndex === index;

          return (
            <div key={index} className="rounded-md bg-gray-100">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-4.5 text-left cursor-pointer"
              >
                <h3 className="text-sm font-medium text-gray-800 sm:text-xl">
                  {faq.question}
                </h3>
                <ExpandMoreIcon
                  className={`transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: isOpen ? height : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div ref={contentRef} className="px-6 pb-4.5 pt-1 text-sm text-gray-600 sm:text-base">
                  {faq.answer}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;