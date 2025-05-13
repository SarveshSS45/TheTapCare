import React from "react";
import { motion } from "framer-motion";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }} 
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            <motion.h2
              className="text-3xl font-bold mb-6 text-gray-800"
              variants={fadeInUp}
              custom={1}
            >
              Contact Us
            </motion.h2>
            <motion.p className="text-gray-600 mb-6" variants={fadeInUp} custom={1.1}>
              Have questions about our services? Reach out to us through any of these channels:
            </motion.p>

            <div className="space-y-4">
              {[
                {
                  icon: <PhoneIcon className="text-blue-600" />,
                  bg: "bg-blue-100",
                  title: "Phone",
                  text: "+91 8108737114",
                },
                {
                  icon: <WhatsAppIcon className="text-green-600" />,
                  bg: "bg-green-100",
                  title: "WhatsApp",
                  text: "+91 8108737114",
                },
                {
                  icon: <EmailIcon className="text-red-600" />,
                  bg: "bg-red-100",
                  title: "Email",
                  text: "support@thetapcare.com",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center"
                  variants={fadeInUp}
                  custom={i + 2}
                >
                  <div className={`${item.bg} p-3 rounded-full mr-4`}>{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-800">{item.title}</h4>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}  
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            <motion.h3
              className="text-2xl font-bold mb-6 text-gray-800"
              variants={fadeInUp}
              custom={1}
            >
              Send us a message
            </motion.h3>
            <form>
              <motion.div className="mb-4" variants={fadeInUp} custom={1.1}>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </motion.div>

              <motion.div className="mb-4" variants={fadeInUp} custom={1.2}>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </motion.div>

              <motion.div className="mb-6" variants={fadeInUp} custom={1.3}>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                variants={fadeInUp}
                custom={1.4}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-3 px-6 rounded-full hover:from-blue-600 hover:to-indigo-700 transition w-full"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
