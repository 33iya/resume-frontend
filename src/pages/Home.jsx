import React from "react";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Templates from "../components/home/Templates";
import HowItWorks from "../components/home/HowItWorks";
import Testimonials from "../components/home/Testimonials";
import Pricing from "../components/home/Pricing";
import Footer from "../components/home/Footer";

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