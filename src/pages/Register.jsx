import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api";
import logo from "../assets/logo.svg";

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await API.post(
        "/api/user/register",
        form
      );

      alert("Account created successfully 🚀");

      console.log(res.data);

      // redirect to login
      navigate("/");
    } catch (err) {
      console.log(err.response?.data);

      alert(
        err.response?.data?.message ||
          "Registration failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white flex overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/10 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[180px] rounded-full"></div>

      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 relative items-center justify-center px-16">

        <div className="relative z-10">

          <div className="flex items-center gap-3 mb-10">
            <img src={logo} alt="logo" className="h-12 w-auto" />
            <h1 className="text-3xl font-bold">ResumeAI</h1>
          </div>

          <span className="px-4 py-2 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-sm">
            🚀 AI Powered Resume Builder
          </span>

          <h2 className="text-6xl font-bold leading-tight mt-8">
            Create
            <span className="block text-green-400">
              Job Winning
            </span>
            Resumes
          </h2>

          <p className="text-gray-400 text-lg mt-6 max-w-lg">
            Build ATS-friendly resumes, optimize keywords, and impress recruiters using powerful AI tools.
          </p>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 relative z-10">

        <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

          <div className="text-center">
            <img src={logo} alt="logo" className="h-14 w-auto mx-auto mb-4" />

            <h2 className="text-4xl font-bold">Create Account</h2>

            <p className="text-gray-400 mt-3">
              Start building your professional resume today.
            </p>
          </div>

          <form onSubmit={handleRegister} className="mt-8 space-y-5">

            {/* Name */}
            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-green-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@gmail.com"
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-green-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Password
              </label>

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Create password"
                  className="w-full bg-white/10 border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-green-500"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-3 text-gray-400"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>

              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-2xl font-semibold transition"
            >
              Create Account 🚀
            </button>

          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="h-px flex-1 bg-white/10"></div>
            <span className="text-gray-500 text-sm">OR</span>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>

          {/* Google */}
          <button className="w-full bg-white text-black py-3 rounded-2xl font-semibold hover:bg-gray-200 transition">
            Continue with Google
          </button>

          <p className="text-center text-gray-400 mt-6">
            Already have an account?
            <Link to="/" className="text-green-400 ml-2">
              Sign In
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
};

export default Register;