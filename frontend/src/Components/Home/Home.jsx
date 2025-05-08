import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import HowItWorks from "../HowItWorks/HowItWorks";
import Footer from "../Footer/Footer";
import Partner from "../Partner/Partner";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact";
import FloatingButtons from "../Button/Button";

const Home = () => {
  return (
    <>
      <Header />
      <FloatingButtons />
      <Hero />
      <Services />
      <Partner />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
