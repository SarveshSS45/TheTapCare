import React from 'react';

const Partner = () => {
  return (
    <section id="partners" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Our Trusted Lab Partner
        </h2>

        <div
          id="thyrocare-partner"
          className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-sm border border-gray-100"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <img
                className="w-48 h-48 object-contain"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/b6df782a20-5dd4f3bcca08ec3ad05f.png"
                alt="Thyrocare logo, healthcare laboratory company in India, professional medical logo"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Thyrocare</h3>
              <p className="text-gray-600 mb-4">
                Tests you can trust | India's best laboratories, NABL and government certification | Since 1931
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  NABL Certified
                </span>
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                  Government Approved
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  Trusted Since 1931
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;