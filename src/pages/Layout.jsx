import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white">

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-[#050816]/80 backdrop-blur-xl border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <img
              src={logo}
              alt="ResumeAI"
              className="h-11 w-auto"
            />

            <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">
              ResumeAI
            </h2>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex gap-8">

            <Link
              to="/app"
              className="hover:text-green-400 transition"
            >
              Dashboard
            </Link>

            <Link
              to="/app"
              className="hover:text-green-400 transition"
            >
              My Resumes
            </Link>

            <Link
              to="/"
              className="hover:text-green-400 transition"
            >
              Home
            </Link>

          </div>

          {/* User Avatar */}
          <div className="flex items-center gap-3">

            <div className="text-right hidden sm:block">
              <p className="font-medium">
                Priyashi
              </p>

              <p className="text-xs text-gray-400">
                Resume Creator
              </p>
            </div>

            <div className="w-11 h-11 rounded-full bg-gradient-to-r from-green-500 to-purple-500 flex items-center justify-center text-black font-bold">
              P
            </div>

          </div>

        </div>

      </header>

      {/* Page Content */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <Outlet />
      </main>

    </div>
  );
};

export default Layout;