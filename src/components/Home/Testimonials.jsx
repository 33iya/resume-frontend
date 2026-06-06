import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aman Sharma",
    role: "Frontend Developer",
    company: "TCS",
    image: "A",
    review:
      "ResumeAI improved my resume score from 62% to 95%. I got interview calls within a week.",
  },
  {
    name: "Riya Singh",
    role: "Software Engineer",
    company: "Infosys",
    image: "R",
    review:
      "The AI suggestions were incredibly accurate. My resume became much more professional.",
  },
  {
    name: "Rahul Kumar",
    role: "Full Stack Developer",
    company: "Accenture",
    image: "RK",
    review:
      "Best resume builder I've used. ATS optimization helped me clear recruiter screening.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="success"
      className="relative py-28 bg-[#050816] overflow-hidden text-white"
    >
      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/10 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[180px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center">
          <span className="px-5 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
            ⭐ Success Stories
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-5xl md:text-6xl font-bold mt-8">
          Loved By
          <span className="block mt-3 bg-gradient-to-r from-green-400 via-emerald-500 to-purple-500 bg-clip-text text-transparent">
            Thousands Of Professionals
          </span>
        </h2>

        <p className="text-center text-gray-400 mt-6 max-w-2xl mx-auto">
          See how ResumeAI helped candidates land interviews
          and improve their ATS scores.
        </p>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {testimonials.map((user, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 relative overflow-hidden"
            >
              {/* Glow Hover */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-br from-green-500/10 to-purple-500/10"></div>

              {/* Stars */}
              <div className="text-yellow-400 text-lg">
                ⭐⭐⭐⭐⭐
              </div>

              {/* Review */}
              <p className="mt-5 text-gray-300 leading-relaxed relative z-10">
                "{user.review}"
              </p>

              {/* User */}
              <div className="flex items-center gap-4 mt-8">

                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-purple-500 flex items-center justify-center font-bold text-black">
                  {user.image}
                </div>

                <div>
                  <h4 className="font-semibold">
                    {user.name}
                  </h4>

                  <p className="text-sm text-gray-400">
                    {user.role}
                  </p>

                  <p className="text-green-400 text-sm">
                    @{user.company}
                  </p>
                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mt-24">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
            <h3 className="text-4xl font-bold text-green-400">
              50K+
            </h3>
            <p className="text-gray-400 mt-2">
              Resumes Created
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
            <h3 className="text-4xl font-bold text-green-400">
              94%
            </h3>
            <p className="text-gray-400 mt-2">
              ATS Success Rate
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
            <h3 className="text-4xl font-bold text-green-400">
              10K+
            </h3>
            <p className="text-gray-400 mt-2">
              Interviews Landed
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
            <h3 className="text-4xl font-bold text-green-400">
              4.9★
            </h3>
            <p className="text-gray-400 mt-2">
              User Rating
            </p>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">

          <div className="inline-block bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">

            <h3 className="text-3xl font-bold">
              Your Success Story Starts Here
            </h3>

            <p className="text-gray-400 mt-4">
              Create a professional ATS-ready resume today.
            </p>

            <button className="mt-6 bg-green-600 hover:bg-green-700 px-8 py-3 rounded-full font-semibold transition">
              🚀 Start Building
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

export default Testimonials;