import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
    rating: 5,
    message:
      "The home lab test service was so convenient. The phlebotomist was professional and the whole process was quick and painless.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
    rating: 4.5,
    message:
      "Doctor consultation over call saved me so much time. The doctor was knowledgeable and prescribed the right medication for my condition.",
  },
  {
    id: 3,
    name: "Anita Patel",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg",
    rating: 5,
    message:
      "Absolutely satisfied with the doorstep services. Easy to book and the care team followed up after the test too!",
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  return (
    <div className="flex text-yellow-400">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 576 512">
          <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
        </svg>
      ))}
      {halfStar && (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 640 512">
          <path d="M320 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L320.1 86.9l-.1 .3V376.4zM495.1 474.7c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L320.1 439.8 191.8 508.3c-10.8 5.7-23.9 4.9-33.8-2.3s-14.9-19.3-12.9-31.3L169.8 329 65.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L227 150.3 291.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L470.5 329l24.6 145.7z" />
        </svg>
      )}
    </div>
  );
};

const CTASection = () => (
  <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Your Health Matters, Take a Step Today
      </h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Don't postpone your health needs. Book an appointment now and experience healthcare at your doorstep.
      </p>
      <button className="bg-white text-indigo-700 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition text-lg">
        Book Appointment
      </button>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section className="px-6 py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        What Our Patients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-gray-50 p-6 rounded-xl shadow-sm"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                <StarRating rating={testimonial.rating} />
              </div>
            </div>
            <p className="text-gray-600">"{testimonial.message}"</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <>
    <CTASection />
    <TestimonialsSection />
  </>
);

export default Testimonials;
