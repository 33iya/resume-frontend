import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api";
import logo from "../assets/logo.svg";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const res = await API.post("/api/auth/login", {
        email,
        password,
      });

      // ✅ 1. Token aur User Info dono localStorage mein save karein
      if (res.data && res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }

      alert("Login successful 🚀");

      // ✅ 2. User ko properly layout/dashboard route par navigate karein
      navigate("/app", { replace: true });

    } catch (err) {
      console.log(err.response?.data);

      alert(
        err.response?.data?.message ||
        "Login failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-6 relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-500/10 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[180px] rounded-full"></div>

      <div className="w-full max-w-md relative z-10">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src={logo} alt="ResumeAI" className="h-16 w-auto" />
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

          <h1 className="text-4xl font-bold text-center">
            Welcome Back 👋
          </h1>

          <p className="text-gray-400 text-center mt-3">
            Login to continue building your resume.
          </p>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-green-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 text-sm">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-green-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-2xl font-semibold transition"
            >
              Login
            </button>

          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="h-px bg-white/10 flex-1"></div>
            <span className="text-gray-500 text-sm">OR</span>
            <div className="h-px bg-white/10 flex-1"></div>
          </div>

          {/* Google Login */}
          <button className="w-full bg-white text-black py-3 rounded-2xl font-semibold hover:bg-gray-200 transition">
            Continue with Google
          </button>

          {/* Signup */}
          <p className="text-center text-gray-400 mt-6">
            Don't have an account?
            <Link to="/register" className="text-green-400 ml-2">
              Sign Up
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;