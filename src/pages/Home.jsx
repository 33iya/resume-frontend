import React from "react";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import Templates from "../components/Home/Templates";
import HowItWorks from "../components/Home/HowItWorks";
import Testimonials from "../components/Home/Testimonials";
import Pricing from "../components/Home/Pricing";
import Footer from "../components/Home/Footer";

const Home = () => {
  return (
    <div className="bg-black text-white">
      <Hero />
      <Features />
      <Templates />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;