import React from "react";
import { motion } from "framer-motion";

const templates = [
  {
    name: "Modern Pro",
    ats: "98%",
    tag: "Most Popular",
  },
  {
    name: "Minimal ATS",
    ats: "96%",
    tag: "Recruiter Choice",
  },
  {
    name: "Creative Edge",
    ats: "94%",
    tag: "Trending",
  },
  {
    name: "Corporate Elite",
    ats: "99%",
    tag: "Premium",
  },
];

const Templates = () => {
  return (
    <section
      id="templates"
      className="relative py-28 overflow-hidden bg-[#050816] text-white"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/10 blur-[180px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center">
          <span className="px-5 py-2 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-sm">
            ✨ Resume Templates
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-5xl md:text-6xl font-bold mt-8">
          Choose A Template
          <span className="block bg-gradient-to-r from-green-400 via-emerald-500 to-purple-500 bg-clip-text text-transparent mt-3">
            Recruiters Will Love
          </span>
        </h2>

        <p className="text-center text-gray-400 mt-6 max-w-2xl mx-auto">
          Professionally designed ATS-friendly templates
          optimized for modern hiring systems.
        </p>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {templates.map((template, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              transition={{ duration: 0.3 }}
              className="group relative"
            >
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-4 overflow-hidden">

                {/* Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-green-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                    {template.tag}
                  </span>
                </div>

                {/* ATS Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-black/70 border border-green-500/30 px-3 py-1 rounded-full text-xs text-green-400">
                    ATS {template.ats}
                  </span>
                </div>

                {/* Resume Preview */}
                <div className="h-[380px] bg-white rounded-2xl p-4 relative overflow-hidden">

                  <div className="w-20 h-20 rounded-full bg-gray-300 mx-auto"></div>

                  <div className="mt-4 space-y-3">

                    <div className="h-3 bg-gray-300 rounded"></div>

                    <div className="h-3 bg-gray-300 rounded"></div>

                    <div className="h-3 bg-gray-300 rounded"></div>

                    <div className="h-3 bg-gray-300 rounded w-2/3"></div>

                  </div>

                  <div className="mt-8 space-y-3">

                    <div className="h-2 bg-gray-200 rounded"></div>

                    <div className="h-2 bg-gray-200 rounded"></div>

                    <div className="h-2 bg-gray-200 rounded"></div>

                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>

                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center">

                    <button className="bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded-full">
                      Use Template
                    </button>

                    <button className="mt-3 border border-white/20 px-6 py-3 rounded-full">
                      Preview
                    </button>

                  </div>

                </div>

                {/* Bottom Info */}
                <div className="mt-5">

                  <h3 className="font-semibold text-lg">
                    {template.name}
                  </h3>

                  <p className="text-sm text-gray-400 mt-2">
                    Optimized for ATS systems and recruiters.
                  </p>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">

          <div className="inline-block bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">

            <h3 className="text-3xl font-bold">
              Can't Decide?
            </h3>

            <p className="text-gray-400 mt-3">
              Let AI recommend the best template for your career.
            </p>

            <button className="mt-6 bg-green-600 hover:bg-green-700 px-8 py-3 rounded-full font-semibold">
              🤖 AI Recommend Me
            </button>

            <p className="mt-5 text-sm text-pink-400">
              ❤️ Crafted by Priyashi
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Templates;