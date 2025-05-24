import React from "react";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import BusinessIcon from "@mui/icons-material/Business";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import SchoolIcon from "@mui/icons-material/School";

const hostOptions = [
  {
    id: "gym",
    title: "Gyms & Fitness Centers",
    description: "Promote holistic fitness beyond just workouts",
    icon: <FitnessCenterIcon className="text-[#1e88e5]" fontSize="large" />,
    bgColor: "bg-[#f3fdff]",
    iconBg: "bg-[#e3f2fd]",
  },
  {
    id: "clinic",
    title: "Clinics & Hospitals",
    description: "Extend preventive Lab test services to your patients",
    icon: <LocalHospitalIcon className="text-[#43a047]" fontSize="large" />,
    bgColor: "bg-[#f9fbe7]",
    iconBg: "bg-[#f3e5f5]",
  },
  {
    id: "corporate",
    title: "Corporate Offices",
    description: "Support employee wellness & productivity",
    icon: <BusinessIcon className="text-[#ff9800]" fontSize="large" />,
    bgColor: "bg-[#e3fdfd]",
    iconBg: "bg-[#fffde7]",
  },
  {
    id: "ngo",
    title: "NGOs",
    description: "Add health screening to your community services",
    icon: <VolunteerActivismIcon className="text-[#e53935]" fontSize="large" />,
    bgColor: "bg-[#fce4ec]",
    iconBg: "bg-[#ffe0b2]",
  },
  {
    id: "school",
    title: "Schools / Colleges",
    description: "Encourage health awareness in students and staff",
    icon: <SchoolIcon className="text-[#1e88e5]" fontSize="large" />,
    bgColor: "bg-[#f1f8e9]",
    iconBg: "bg-[#e1f5fe]",
  },
];

const HC_WhoCanHost = () => {
  return (
    <section id="who-can-host-camp" className="py-14 px-4 md:px-16 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1e88e5] mb-8 text-center">
        Who Can Host a Camp?
      </h2>
      <div
        id="who-can-host-grid"
        className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto"
      >
        {hostOptions.map((option) => (
          <div
            key={option.id}
            className={`flex flex-col items-center gap-3 p-5 rounded-2xl border border-[#e3f2fd] ${option.bgColor} hover:shadow-lg transition`}
            id={`host-card-${option.id}`}
          >
            <div className={`${option.iconBg} rounded-full p-3 mb-1`}>
              {option.icon}
            </div>
            <div className="font-semibold text-[#141c2b] text-base text-center">
              {option.title}
            </div>
            <div className="text-xs text-[#364152] text-center">
              {option.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HC_WhoCanHost;
