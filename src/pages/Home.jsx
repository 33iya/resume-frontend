import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import Templates from "../components/Home/Templates";
import HowItWorks from "../components/Home/HowItWorks";
import Testimonials from "../components/Home/Testimonials";
import Pricing from "../components/Home/Pricing";
import Footer from "../components/Home/Footer";

const Home = () => {
  const navigate = useNavigate();

  // 🔥 20 LPA Master Route Injection
  const handleStartBuilding = (templateId = "default") => {
    // Agar direct login bypass test karna hai toh use karein:
    navigate(`/app/builder/new?template=${templateId}`);

    // Prod logic (uncomment if you want to enforce login token check)
    /*
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      navigate(`/app/builder/new?template=${templateId}`);
    }
    */
  };

  return (
    <div className="bg-black text-white scroll-smooth">
      {/* Passing actions seamlessly to child components */}
      <Hero onBuildClick={() => handleStartBuilding("modern-pro")} />
      <Features />
      <Templates onSelectTemplate={(id) => handleStartBuilding(id)} />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;