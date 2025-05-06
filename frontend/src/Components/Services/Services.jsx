import React from "react";
import Button from "../Button/Button";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ScienceIcon from "@mui/icons-material/Science";

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Lab Test Card */}
          <div
            id="lab-test"
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mr-4">
                <ScienceIcon className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Lab Test Booking
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Easily book your lab tests on call or WhatsApp. Trusted
              phlebotomists will come to your home to collect your samples.
            </p>
            <Button label="Book Lab Test" />
          </div>

          {/* Doctor Consultation Card */}
          <div
            id="doctor-consultation"
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 rounded-full w-14 h-14 flex items-center justify-center mr-4">
                <LocalHospitalIcon className="text-indigo-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                On-Call Doctor Consultation
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Consult certified doctors from the comfort of your home. Fast,
              reliable, and affordable consultations at your convenience.
            </p>
            <Button label="Consult Doctor" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
