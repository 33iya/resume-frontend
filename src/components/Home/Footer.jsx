import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="relative bg-[#050816] text-white overflow-hidden">

      {/* Top Gradient Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-green-500 via-emerald-400 to-purple-500"></div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-500/10 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[180px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

        {/* Newsletter */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center">

          <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
            🚀 Stay Updated
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Get Resume Tips &
            <span className="block mt-2 bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">
              Career Insights
            </span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Join thousands of professionals receiving resume
            optimization tips, ATS strategies and hiring updates.
          </p>

          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">

            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border border-white/10 px-5 py-4 rounded-2xl outline-none md:w-[350px]"
            />

            <button className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-semibold transition">
              Subscribe
            </button>

          </div>

        </div>

        {/* Main Footer */}
        <div className="grid lg:grid-cols-4 gap-12 mt-20">

          {/* Logo Section */}
          <div>

            <div className="flex items-center gap-3">

              <img
                src={logo}
                alt="ResumeAI"
                className="h-11 w-auto"
              />

              <h3 className="text-2xl font-bold">
                ResumeAI
              </h3>

            </div>

            <p className="text-gray-400 mt-5 leading-relaxed">
              Build ATS-friendly resumes using AI and land
              interviews faster with modern career tools.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-500 hover:text-black transition"
              >
                📘
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-500 hover:text-black transition"
              >
                🐦
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-500 hover:text-black transition"
              >
                💼
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-500 hover:text-black transition"
              >
                📸
              </a>

            </div>

          </div>

          {/* Product */}
          <div>

            <h4 className="font-semibold text-xl">
              Product
            </h4>

            <ul className="space-y-4 mt-6 text-gray-400">

              <li>
                <a href="#templates" className="hover:text-green-400">
                  Templates
                </a>
              </li>

              <li>
                <a href="#features" className="hover:text-green-400">
                  Features
                </a>
              </li>

              <li>
                <a href="#pricing" className="hover:text-green-400">
                  Pricing
                </a>
              </li>

              <li>
                <Link
                  to="/register"
                  className="hover:text-green-400"
                >
                  Get Started
                </Link>
              </li>

            </ul>

          </div>

          {/* Resources */}
          <div>

            <h4 className="font-semibold text-xl">
              Resources
            </h4>

            <ul className="space-y-4 mt-6 text-gray-400">

              <li>
                <a href="#">Career Guide</a>
              </li>

              <li>
                <a href="#">ATS Tips</a>
              </li>

              <li>
                <a href="#">Resume Examples</a>
              </li>

              <li>
                <a href="#">Interview Prep</a>
              </li>

            </ul>

          </div>

          {/* Company */}
          <div>

            <h4 className="font-semibold text-xl">
              Company
            </h4>

            <ul className="space-y-4 mt-6 text-gray-400">

              <li>
                <a href="#">About Us</a>
              </li>

              <li>
                <a href="#">Contact</a>
              </li>

              <li>
                <a href="#">Privacy Policy</a>
              </li>

              <li>
                <a href="#">Terms of Service</a>
              </li>

            </ul>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-sm">
            © 2026 ResumeAI. All rights reserved.
          </p>

          <p className="text-pink-400 text-sm mt-4 md:mt-0">
            ❤️ Crafted with passion by Priyashi
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;