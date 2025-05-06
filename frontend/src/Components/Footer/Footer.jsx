import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-blue-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-2">Thetapcare</h3>
          <p>Top Notch healthcare to your doorstep with trusted professionals and reliable services.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Book Lab Test</a></li>
            <li><a href="#" className="hover:underline">Book Doctor Consultation</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Support</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Contact us</a></li>
            <li><a href="#" className="hover:underline">Terms and condition</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm text-gray-300 mt-8">© 2025 Swasthya Care. All rights reserved.</div>
    </footer>
  );
};

export default Footer;