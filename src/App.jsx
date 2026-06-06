import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import ResumeBuilder from "./pages/ResumeBuilder";
import Preview from "./pages/Preview";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <Routes>

      {/* ------------------ */}
      {/* LANDING PAGE */}
      {/* ------------------ */}
      <Route path="/" element={<Home />} />

      {/* ------------------ */}
      {/* AUTH */}
      {/* ------------------ */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* ------------------ */}
      {/* DASHBOARD LAYOUT (PROTECTED AREA) */}
      {/* ------------------ */}
      <Route path="/app" element={<Layout />}>

        {/* Dashboard Home */}
        <Route index element={<Dashboard />} />

        {/* CREATE NEW RESUME (IMPORTANT FIX) */}
        <Route
          path="builder/new"
          element={<ResumeBuilder />}
        />

        {/* EDIT EXISTING RESUME */}
        <Route
          path="builder/:resumeId"
          element={<ResumeBuilder />}
        />

      </Route>

      {/* ------------------ */}
      {/* PUBLIC RESUME PREVIEW */}
      {/* ------------------ */}
      <Route
        path="/view/:resumeId"
        element={<Preview />}
      />

      {/* ------------------ */}
      {/* 404 PAGE */}
      {/* ------------------ */}
      <Route
        path="*"
        element={
          <div className="min-h-screen bg-[#050816] text-white flex items-center justify-center">
            <div className="text-center">

              <h1 className="text-7xl font-bold text-green-400">
                404
              </h1>

              <p className="text-gray-400 mt-4">
                Page Not Found
              </p>

            </div>
          </div>
        }
      />

    </Routes>
  );
};

export default App;