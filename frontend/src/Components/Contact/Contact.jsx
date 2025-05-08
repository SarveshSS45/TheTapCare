import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              Have questions about our services? Reach out to us through any of these channels:
            </p>

            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <PhoneIcon className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Phone</h4>
                  <p className="text-gray-600">+91 8108737114</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <WhatsAppIcon className="text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">WhatsApp</h4>
                  <p className="text-gray-600">+91 8108737114</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <EmailIcon className="text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Email</h4>
                  <p className="text-gray-600">support@thetapcare.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Send us a message</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-3 px-6 rounded-full hover:from-blue-600 hover:to-indigo-700 transition w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;