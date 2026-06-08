import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"; // 👈 useSearchParams ko import kiya
import API from "../api";

import Sidebar from "../components/Home/resume/Sidebar.jsx";
import PersonalInfoForm from "../components/Home/resume/PersonalInfoForm.jsx";
import EducationForm from "../components/Home/resume/EducationForm.jsx";
import ExperienceForm from "../components/Home/resume/ExperienceForm.jsx";
import SkillsForm from "../components/Home/resume/SkillsForm.jsx";
import ProjectsForm from "../components/Home/resume/ProjectsForm.jsx";
import ResumePreview from "../components/Home/resume/ResumePreview.jsx";

const ResumeBuilder = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams(); // 👈 URL se query params nikalne ke liye
  const [loading, setLoading] = useState(false);

  // -------------------------
  // URL SE TEMPLATE DETECT KARNA
  // -------------------------
  // Home page se jo id aayegi usko dropdown ki simple/modern/creative values ke sath map kar rahe hain
  const getInitialTemplate = () => {
    const urlTemplate = searchParams.get("template");
    
    if (!urlTemplate) return "modern"; // Default fallback
    if (urlTemplate.includes("minimal") || urlTemplate === "simple") return "simple";
    if (urlTemplate.includes("creative") || urlTemplate.includes("edge")) return "creative";
    return "modern"; // modern-pro ya baaki sab ke liye 'modern' layout
  };

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
    title: "My Resume", 
    personalInfo: { name: "", email: "", phone: "", location: "", summary: "" },
    education: [],
    experience: [],
    skills: [],
    projects: [],
  });

  const [accentColor, setAccentColor] = useState("#22c55e");
  const [template, setTemplate] = useState(getInitialTemplate()); // 👈 URL template parameter automatically set ho jayega
  const [activeSection, setActiveSection] = useState("Personal Info");

  // Agar URL parameter badalta hai toh state update ho jaye uske liye effect
  useEffect(() => {
    setTemplate(getInitialTemplate());
  }, [searchParams]);

  // -------------------------
  // COPY LINK
  // -------------------------
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied! 🔗");
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
    if (!token) {
      alert("Session expired. Please login again.");
      return;
    }

    try {
      setLoading(true);
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

      alert("Resume saved successfully 🎉🚀");
      console.log(res.data);
      navigate("/app"); 
    } catch (err) {
      console.error(err.response?.data);
      alert(err.response?.data?.message || "Error saving resume");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white">

      {/* TOP BAR */}
      <div className="flex flex-wrap items-center justify-between px-6 py-3 border-b border-gray-800 bg-[#0a0f1f]">
        
        {/* TITLE INPUT */}
        <div className="flex gap-2 items-center">
          <span className="text-sm text-gray-400">Title:</span>
          <input
            type="text"
            value={resumeData.title}
            onChange={(e) => setResumeData({ ...resumeData, title: e.target.value })}
            className="bg-gray-800 border border-white/10 px-3 py-1 rounded text-sm outline-none focus:border-green-500"
          />
        </div>

        {/* TEMPLATE DROPDOWN (Now Syncs with Landing Page) */}
        <div className="flex gap-3 items-center">
          <span className="text-sm text-gray-400">Template:</span>
          <select
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
            className="bg-gray-800 px-3 py-1 rounded outline-none cursor-pointer border border-white/5 focus:border-green-500 text-sm"
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
            className="w-10 h-8 cursor-pointer rounded bg-transparent border-0"
          />
        </div>

        {/* ACTIONS */}
        <div className="flex gap-3">
          <button
            onClick={copyLink}
            className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-600 transition text-sm cursor-pointer"
          >
            🔗 Share
          </button>

          <button
            onClick={saveResume}
            disabled={loading}
            className="px-3 py-1 bg-blue-600 disabled:bg-blue-800 rounded hover:bg-blue-500 transition text-sm font-medium cursor-pointer"
          >
            {loading ? "Saving..." : "💾 Save"}
          </button>

          <button
            onClick={downloadResume}
            className="px-3 py-1 bg-green-600 rounded hover:bg-green-500 transition text-sm font-medium cursor-pointer"
          >
            📄 Download
          </button>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="grid lg:grid-cols-12 gap-6 p-6">
        
        {/* SIDEBAR */}
        <div className="lg:col-span-2">
          <Sidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>

        {/* DYNAMIC FORMS */}
        <div className="lg:col-span-5 space-y-6">
          {activeSection === "Personal Info" && (
            <PersonalInfoForm resumeData={resumeData} setResumeData={setResumeData} />
          )}
          {activeSection === "Education" && (
            <EducationForm resumeData={resumeData} setResumeData={setResumeData} />
          )}
          {activeSection === "Experience" && (
            <ExperienceForm resumeData={resumeData} setResumeData={setResumeData} />
          )}
          {activeSection === "Skills" && (
            <SkillsForm resumeData={resumeData} setResumeData={setResumeData} />
          )}
          {activeSection === "Projects" && (
            <ProjectsForm resumeData={resumeData} setResumeData={setResumeData} />
          )}
        </div>

        {/* PREVIEW CONTAINER */}
        <div className="lg:col-span-5" id="resume-print-area">
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