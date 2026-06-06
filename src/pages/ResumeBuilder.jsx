import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

import Sidebar from "../components/home/resume/Sidebar.jsx";
import PersonalInfoForm from "../components/home/resume/PersonalInfoForm.jsx";
import EducationForm from "../components/home/resume/EducationForm.jsx";
import ExperienceForm from "../components/home/resume/ExperienceForm.jsx";
import SkillsForm from "../components/home/resume/SkillsForm.jsx";
import ProjectsForm from "../components/home/resume/ProjectsForm.jsx";
import ResumePreview from "../components/home/resume/ResumePreview.jsx";

const ResumeBuilder = () => {
  const navigate = useNavigate();

  // -------------------------
  // AUTH CHECK
  // -------------------------
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  // -------------------------
  // STATE
  // -------------------------
  const [resumeData, setResumeData] = useState({
    personalInfo: {},
    education: [],
    experience: [],
    skills: [],
    projects: [],
  });

  const [accentColor, setAccentColor] = useState("#22c55e");
  const [template, setTemplate] = useState("modern");
  const [activeSection, setActiveSection] = useState("Personal Info");

  // -------------------------
  // COPY LINK
  // -------------------------
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied!");
  };

  // -------------------------
  // DOWNLOAD
  // -------------------------
  const downloadResume = () => {
    window.print();
  };

  // -------------------------
  // SAVE TO BACKEND
  // -------------------------
  const saveResume = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await API.post(
        "/api/resume",
        {
          ...resumeData,
          template,
          accentColor,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Resume saved successfully 🚀");
      console.log(res.data);
    } catch (err) {
      console.log(err.response?.data);
      alert("Error saving resume");
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white">

      {/* TOP BAR */}
      <div className="flex flex-wrap items-center justify-between px-6 py-3 border-b border-gray-800 bg-[#0a0f1f]">

        {/* TEMPLATE */}
        <div className="flex gap-3 items-center">
          <span className="text-sm text-gray-400">Template:</span>

          <select
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
            className="bg-gray-800 px-3 py-1 rounded"
          >
            <option value="simple">Simple</option>
            <option value="modern">Modern</option>
            <option value="creative">Creative</option>
          </select>
        </div>

        {/* ACCENT */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">Accent:</span>
          <input
            type="color"
            value={accentColor}
            onChange={(e) => setAccentColor(e.target.value)}
            className="w-10 h-8 cursor-pointer"
          />
        </div>

        {/* ACTIONS */}
        <div className="flex gap-3">

          <button
            onClick={copyLink}
            className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-600"
          >
            🔗 Share
          </button>

          {/* NEW SAVE BUTTON */}
          <button
            onClick={saveResume}
            className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-500"
          >
            💾 Save
          </button>

          <button
            onClick={downloadResume}
            className="px-3 py-1 bg-green-600 rounded hover:bg-green-500"
          >
            📄 Download
          </button>

        </div>
      </div>

      {/* MAIN */}
      <div className="grid lg:grid-cols-12 gap-6 p-6">

        {/* SIDEBAR */}
        <div className="lg:col-span-2">
          <Sidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>

        {/* FORMS */}
        <div className="lg:col-span-5 space-y-6">

          <PersonalInfoForm
            setResumeData={setResumeData}
          />

          <EducationForm
            setResumeData={setResumeData}
          />

          <ExperienceForm
            setResumeData={setResumeData}
          />

          <SkillsForm
            setResumeData={setResumeData}
          />

          <ProjectsForm
            setResumeData={setResumeData}
          />

        </div>

        {/* PREVIEW */}
        <div
          className="lg:col-span-5"
          id="resume-print-area"
        >
          <ResumePreview
            resumeData={resumeData}
            accentColor={accentColor}
            template={template}
          />
        </div>

      </div>
    </div>
  );
};

export default ResumeBuilder;