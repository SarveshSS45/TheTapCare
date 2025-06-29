import React from "react";
import { Facebook, Twitter, Instagram, WhatsApp } from "@mui/icons-material";
import TapCareLogo from "../../assets/TapCareLogo.png";

const Footer = () => {
  return (
    <footer className="px-10 bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-12 w-full z-9">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About with Logo */}
          <div>
            <a href="#hero" className="block mb-4">
              <img
                src={TapCareLogo}
                alt="Tap Care Logo"
                className="w-32 h-auto hover:opacity-90 transition-opacity"
              />
            </a>
            <p className="text-gray-300">
              Book lab tests and on-demand doctor consultations at your
              doorstep. Get NABL-certified, government-approved services with
              home sample collection and verified doctors—trusted, affordable,
              and just a tap away.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="flex flex-col md:flex-row gap-12">
              {/* Home Section */}
              <div>
                <a
                  href="/"
                  className="font-semibold text-white mb-2 inline-block hover:underline"
                >
                  Home
                </a>
                <ul className="space-y-2 mt-2">
                  <li>
                    <a
                      href="#services"
                      className="text-gray-200 hover:text-white transition"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#partners"
                      className="text-gray-200 hover:text-white transition"
                    >
                      Lab Partners
                    </a>
                  </li>
                  <li>
                    <a
                      href="#how-it-works"
                      className="text-gray-200 hover:text-white transition"
                    >
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-gray-200 hover:text-white transition"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Host Camp Section */}
              <div>
                <a
                  href="/host-camp"
                  className="font-semibold text-white mb-2 inline-block hover:underline"
                >
                  Host Camp
                </a>
                <ul className="space-y-2 mt-2">
                  <li>
                    <a
                      href="/host-camp#what-we-offer"
                      className="text-gray-200 hover:text-white transition"
                    >
                      What We Offer
                    </a>
                  </li>
                  <li>
                    <a
                      href="/host-camp#benefits-for-you"
                      className="text-gray-200 hover:text-white transition"
                    >
                      Benefits for You
                    </a>
                  </li>
                  <li>
                    <a
                      href="/host-camp#who-can-host-camp"
                      className="text-gray-200 hover:text-white transition"
                    >
                      Who Can Host Camp
                    </a>
                  </li>
                  <li>
                    <a
                      href="/host-camp"
                      className="text-gray-200 hover:text-white transition"
                    >
                      Host Camp
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
              >
                <Facebook fontSize="small" />
              </a>
              <a
                href="#contact"
                className="bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-400 transition"
              >
                <Twitter fontSize="small" />
              </a>
              <a
                href="#contact"
                className="bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center hover:bg-pink-600 transition"
              >
                <Instagram fontSize="small" />
              </a>
              <a
                href="#contact"
                className="bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-500 transition"
              >
                <WhatsApp fontSize="small" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-indigo-700 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 The TapCare Powered by Medifinder Healthcare Solutions Pvt
            Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
