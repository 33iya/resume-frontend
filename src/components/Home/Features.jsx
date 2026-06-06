import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "🤖",
    title: "AI Resume Builder",
    description:
      "Generate professional resumes instantly using advanced AI suggestions.",
    badge: "Popular",
  },
  {
    icon: "📄",
    title: "ATS Optimization",
    description:
      "Improve your ATS score and pass recruiter screening systems easily.",
    badge: "94% Success",
  },
  {
    icon: "🎯",
    title: "Job Matching",
    description:
      "Get personalized recommendations based on your skills and experience.",
    badge: "Smart AI",
  },
  {
    icon: "💼",
    title: "Cover Letter Generator",
    description:
      "Create tailored cover letters for every application in seconds.",
    badge: "New",
  },
  {
    icon: "⚡",
    title: "Instant Export",
    description:
      "Download resumes in PDF format with one click.",
    badge: "Fast",
  },
  {
    icon: "📊",
    title: "Resume Analytics",
    description:
      "Track resume strength and receive actionable improvements.",
    badge: "Pro",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="relative py-28 bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <span className="px-5 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
            ✨ Powerful Features
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-bold mt-8"
        >
          Everything You Need To
          <span className="block mt-3 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">
            Get Hired Faster
          </span>
        </motion.h2>

        <p className="text-center text-gray-400 mt-6 max-w-2xl mx-auto">
          Create ATS-friendly resumes, optimize applications,
          and stand out with AI-powered career tools.
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -10,
              }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-green-500/10 to-transparent"></div>

              {/* Badge */}
              <span className="absolute top-5 right-5 px-3 py-1 text-xs rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                {feature.badge}
              </span>

              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center text-3xl rounded-2xl bg-green-500/10 border border-green-500/20">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-semibold">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Learn More */}
              <button className="mt-6 text-green-400 font-medium flex items-center gap-2 group-hover:gap-4 transition-all">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-block bg-white/5 border border-white/10 rounded-3xl p-8">

            <h3 className="text-2xl font-bold">
              Ready To Build Your Resume?
            </h3>

            <p className="text-gray-400 mt-3">
              Join 50,000+ professionals using ResumeAI.
            </p>

            <button className="mt-6 bg-green-600 hover:bg-green-700 px-8 py-3 rounded-full font-semibold">
              Start For Free 🚀
            </button>

            <p className="mt-4 text-sm text-gray-500">
              Made with ❤️ by Priyashi
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Features;