import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SettingsIcon from '@mui/icons-material/Settings';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

const benefits = [
  {
    icon: <FavoriteIcon className="text-[#1ABC9C] text-2xl" />,
    bgColor: 'bg-[#d1fae5]',
    title: 'Holistic Care',
    description: 'For your members, clients, employees, or beneficiaries',
  },
  {
    icon: <HandshakeIcon className="text-[#ff9800] text-2xl" />,
    bgColor: 'bg-[#ffe0b2]',
    title: 'Co-Branding as Official Camp Partner',
    description: "Your center's name and location on all materials",
  },
  {
    icon: <SettingsIcon className="text-[#1e88e5] text-2xl" />,
    bgColor: 'bg-[#bbdefb]',
    title: 'Zero Hassle Setup',
    description: 'We manage everything for you',
  },
  {
    icon: <BeachAccessIcon className="text-[#fbc02d] text-2xl" />,
    bgColor: 'bg-[#fffde7]',
    title: 'Just Provide Space',
    description: 'Only a small area needed for our camp canopy/umbrella',
  },
];

const HC_Benefits = () => {
  return (
    <section id="benefits-for-you" className="bg-[#e8f5fd] py-14 px-4 md:px-16">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1e88e5] mb-8 text-center">
        Benefits for You
      </h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-5">
            <div className={`${benefit.bgColor} rounded-full p-3 flex items-center justify-center h-12 w-12`}>
              {benefit.icon}
            </div>
            <div>
              <div className="font-bold text-lg text-[#141c2b]">{benefit.title}</div>
              <div className="text-[#364152] text-base">{benefit.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HC_Benefits;