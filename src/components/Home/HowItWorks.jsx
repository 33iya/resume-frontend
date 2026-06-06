import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: "📄",
    title: "Choose a Template",
    description:
      "Select from professionally designed ATS-friendly resume templates.",
  },
  {
    number: "02",
    icon: "🤖",
    title: "Let AI Improve It",
    description:
      "Our AI enhances summaries, keywords, skills, and project descriptions.",
  },
  {
    number: "03",
    icon: "🚀",
    title: "Download & Apply",
    description:
      "Export your resume instantly and start applying confidently.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-[#050816] text-white">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-500/10 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[180px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center">

          <span className="px-5 py-2 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-sm">
            ⚡ How It Works
          </span>

        </div>

        {/* Heading */}
        <h2 className="text-center text-5xl md:text-6xl font-bold mt-8">

          Build Your Resume

          <span className="block mt-3 bg-gradient-to-r from-green-400 via-emerald-500 to-purple-500 bg-clip-text text-transparent">
            In 3 Easy Steps
          </span>

        </h2>

        <p className="text-center text-gray-400 mt-6 max-w-2xl mx-auto">
          Create a professional ATS-friendly resume in minutes,
          powered by advanced AI technology.
        </p>

        {/* Timeline */}
        <div className="relative mt-24">

          {/* Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 via-emerald-500 to-purple-500 -translate-x-1/2"></div>

          {steps.map((step, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative flex items-center mb-20 ${
                index % 2 === 0
                  ? "lg:flex-row"
                  : "lg:flex-row-reverse"
              }`}
            >

              {/* Card */}
              <div className="w-full lg:w-1/2">

                <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-green-500/30 transition duration-300">

                  <div className="flex items-center gap-4">

                    <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-3xl">
                      {step.icon}
                    </div>

                    <div>

                      <span className="text-green-400 text-sm font-semibold">
                        STEP {step.number}
                      </span>

                      <h3 className="text-2xl font-bold mt-1">
                        {step.title}
                      </h3>

                    </div>

                  </div>

                  <p className="mt-6 text-gray-400 leading-relaxed">
                    {step.description}
                  </p>

                </div>

              </div>

              {/* Circle */}
              <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-purple-500 items-center justify-center font-bold text-black shadow-[0_0_30px_rgba(34,197,94,0.5)]">
                {step.number}
              </div>

            </motion.div>

          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">

          <div className="inline-block bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">

            <h3 className="text-3xl font-bold">
              Ready To Create Your Resume?
            </h3>

            <p className="text-gray-400 mt-4">
              Join thousands of professionals getting hired faster.
            </p>

            <button className="mt-6 bg-green-600 hover:bg-green-700 px-8 py-3 rounded-full font-semibold transition">
              🚀 Build Resume Now
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

export default HowItWorks;