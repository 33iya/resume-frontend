import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "₹0",
    description: "Perfect for students and beginners",
    features: [
      "1 Resume Template",
      "Basic ATS Check",
      "PDF Export",
      "Resume Preview",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "₹299",
    description: "Best choice for job seekers",
    features: [
      "Unlimited Resumes",
      "AI Resume Writer",
      "Advanced ATS Optimization",
      "Premium Templates",
      "Cover Letter Generator",
      "Priority Support",
    ],
    popular: true,
  },
  {
    name: "Team",
    price: "₹999",
    description: "For colleges and organizations",
    features: [
      "Everything in Pro",
      "Team Management",
      "Analytics Dashboard",
      "Bulk Resume Generation",
      "Dedicated Support",
      "Custom Branding",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative py-28 overflow-hidden bg-[#050816] text-white"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center">
          <span className="px-5 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
            💎 Flexible Pricing
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-5xl md:text-6xl font-bold mt-8">
          Simple &
          <span className="block mt-3 bg-gradient-to-r from-green-400 via-emerald-500 to-purple-500 bg-clip-text text-transparent">
            Transparent Pricing
          </span>
        </h2>

        <p className="text-center text-gray-400 mt-6 max-w-2xl mx-auto">
          Choose a plan that fits your career goals and unlock
          powerful AI tools to build winning resumes.
        </p>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              transition={{ duration: 0.3 }}
              className={`relative rounded-3xl p-8 backdrop-blur-xl border ${
                plan.popular
                  ? "bg-gradient-to-b from-green-500/10 to-purple-500/10 border-green-500/30"
                  : "bg-white/5 border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-green-500 text-black font-bold px-5 py-2 rounded-full text-sm">
                    🔥 MOST POPULAR
                  </span>
                </div>
              )}

              <h3 className="text-3xl font-bold">
                {plan.name}
              </h3>

              <p className="text-gray-400 mt-3">
                {plan.description}
              </p>

              <div className="mt-8">
                <span className="text-5xl font-bold">
                  {plan.price}
                </span>

                {plan.name !== "Free" && (
                  <span className="text-gray-400">
                    /month
                  </span>
                )}
              </div>

              <ul className="mt-10 space-y-4">

                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3"
                  >
                    <span className="text-green-400">
                      ✔
                    </span>

                    <span className="text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}

              </ul>

              <button
                className={`w-full mt-10 py-4 rounded-2xl font-semibold transition ${
                  plan.popular
                    ? "bg-green-500 hover:bg-green-400 text-black"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                {plan.popular
                  ? "Start Pro Plan 🚀"
                  : "Get Started"}
              </button>
            </motion.div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">

          <div className="inline-block bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">

            <h3 className="text-3xl font-bold">
              Still Not Sure?
            </h3>

            <p className="text-gray-400 mt-4">
              Start with our free plan and upgrade anytime.
            </p>

            <button className="mt-6 bg-green-600 hover:bg-green-700 px-8 py-3 rounded-full font-semibold transition">
              🎯 Try Free Today
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

export default Pricing;