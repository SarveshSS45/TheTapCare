import React from "react";
import Header from "./Components/HC_Header/HC_Header";
import Hero from "./Components/HC_Hero/HC_Hero";
import WhatWeCanOffer from "./Components/HC_WhatWeOffer/HC_WhatWeOffer";
import Benefits from "./Components/HC_Benefits/HC_Benefits";
import WhoCanHost from "./Components/HC_WhoCanHost/HC_WhoCanHost";
import CTAButton from "./Components/HC_CTAButton/HC_CTAButton";
import Footer from "../Footer/Footer";



const HostCamp = () => {
  return (
    <>
      <Header />
      <Hero />
      <WhatWeCanOffer />
      <Benefits />
      <WhoCanHost />
      <CTAButton />
      <Footer />
    </>
  );
};

export default HostCamp;
