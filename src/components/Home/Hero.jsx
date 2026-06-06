import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/logo.svg";

const Hero = () => {
  return (
    <header className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/20 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 blur-[180px] rounded-full" />

      {/* Floating Badges */}
      <div className="hidden lg:block absolute top-36 left-16 animate-bounce">
        <div className="bg-green-500/10 backdrop-blur-xl border border-green-500/20 px-5 py-3 rounded-full">
          💼 Resume Ready
        </div>
      </div>

      <div className="hidden lg:block absolute top-52 right-16 animate-pulse">
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-full">
          ⭐ ATS Score 94%
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-40 left-24 animate-bounce">
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-full">
          🚀 Hired Faster
        </div>
      </div>

      {/* Priyashi Signature */}
      <div className="hidden lg:block absolute bottom-8 right-8">
        <div className="bg-pink-500/10 border border-pink-500/20 backdrop-blur-xl px-4 py-2 rounded-full text-sm text-pink-300">
          ❤️ Crafted by Priyashi
        </div>
      </div>

      {/* Navbar */}
      <nav className="relative z-20 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="ResumeAI"
            className="h-11 w-auto"
          />

          <span className="font-bold text-xl">
            ResumeAI
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10 text-sm">

          <a href="#templates" className="hover:text-green-400 transition">
            Templates
          </a>

          <a href="#features" className="hover:text-green-400 transition">
            Features
          </a>

          <a href="#pricing" className="hover:text-green-400 transition">
            Pricing
          </a>

          <a href="#success" className="hover:text-green-400 transition">
            Success Stories
          </a>

        </div>

        <div className="flex items-center gap-4">

          <Link
            to="/login"
            className="text-gray-300 hover:text-green-400 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-green-600 hover:bg-green-700 px-5 py-2.5 rounded-full font-medium transition"
          >
            Get Started
          </Link>

        </div>

      </nav>

      {/* Hero Content */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-24">

        <div className="text-center max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400"
          >
            🚀 Trusted by 50,000+ Job Seekers
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight"
          >
            Land Your Dream Job

            <span className="block mt-4 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">
              with AI-Powered Resumes
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Create ATS-friendly resumes, optimize keywords,
            generate professional summaries, improve job
            matching and get hired faster using advanced AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/register"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full font-semibold shadow-lg shadow-green-500/20 transition"
            >
              Build Resume Free
            </Link>

            <Link
              to="/templates"
              className="border border-white/10 hover:border-green-500 px-8 py-4 rounded-full transition"
            >
              Explore Templates
            </Link>
          </motion.div>
                    {/* Stats */}
          <div className="mt-16 flex flex-wrap justify-center gap-12">

            <div className="bg-white/5 backdrop-blur-xl px-6 py-4 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-green-500">
                50K+
              </h3>
              <p className="text-gray-400">
                Resume Generated
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl px-6 py-4 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-green-500">
                94%
              </h3>
              <p className="text-gray-400">
                ATS Success Rate
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl px-6 py-4 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-green-500">
                10K+
              </h3>
              <p className="text-gray-400">
                Interviews Landed
              </p>
            </div>

          </div>

          {/* Resume Preview Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-16 flex justify-center"
          >

            <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:scale-105 transition-all duration-500 shadow-[0_0_60px_rgba(34,197,94,0.2)]">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center font-bold">
                  PK
                </div>

                <div className="text-left">
                  <h3 className="font-semibold text-lg">
                    Priya Kumari
                  </h3>

                  <p className="text-sm text-gray-400">
                    Frontend Developer
                  </p>
                </div>

              </div>

              <div className="mt-6 space-y-3">

                <div className="h-3 bg-white/20 rounded"></div>
                <div className="h-3 bg-white/20 rounded"></div>
                <div className="h-3 bg-white/20 rounded"></div>
                <div className="h-3 bg-white/20 rounded w-2/3"></div>

              </div>

              <div className="mt-8 flex justify-between">

                <span className="text-gray-400">
                  ATS Compatibility
                </span>

                <span className="text-green-400 font-bold text-xl">
                  94%
                </span>

              </div>

              <div className="mt-3 h-3 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-[94%]" />
              </div>

            </div>

          </motion.div>

          {/* AI Suggestions */}
          <div className="mt-10 flex justify-center">

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 max-w-sm text-left">

              <p className="text-green-400 font-semibold mb-3">
                🤖 AI Suggestions
              </p>

              <ul className="space-y-2 text-sm text-gray-300">

                <li>✔ Improve Resume Summary</li>
                <li>✔ Add React & Tailwind Keywords</li>
                <li>✔ Better Project Descriptions</li>
                <li>✔ ATS Keyword Optimization</li>

              </ul>

            </div>

          </div>

          {/* Feature Pills */}
          <div className="mt-20 flex flex-wrap justify-center gap-4">

            <div className="bg-white/5 px-5 py-3 rounded-full border border-white/10">
              ⚡ AI Resume Builder
            </div>

            <div className="bg-white/5 px-5 py-3 rounded-full border border-white/10">
              📄 ATS Optimized
            </div>

            <div className="bg-white/5 px-5 py-3 rounded-full border border-white/10">
              🎯 Job Matching
            </div>

            <div className="bg-white/5 px-5 py-3 rounded-full border border-white/10">
              💼 Cover Letter AI
            </div>

            <div className="bg-white/5 px-5 py-3 rounded-full border border-white/10">
              🚀 Instant Export
            </div>

          </div>

          {/* Trusted Companies */}
          <div className="mt-20">

            <p className="text-gray-500 mb-6">
              Trusted by candidates applying to
            </p>

            <div className="flex flex-wrap justify-center gap-8 text-xl font-semibold text-gray-400">

              <span>Google</span>
              <span>Microsoft</span>
              <span>Amazon</span>
              <span>Infosys</span>
              <span>TCS</span>

            </div>

          </div>

        </div>
      </section>

    </header>
  );
};

export default Hero;