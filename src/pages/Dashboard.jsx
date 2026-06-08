import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api";

const Dashboard = () => {
  const navigate = useNavigate();

  const savedUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
  const [user, setUser] = useState(savedUser);
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);

  // --------------------------
  // AUTH + USER FETCH
  // --------------------------
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await API.get("/api/auth/me", { // Fixed to look into /api/auth/me instead of /api/user/me
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.data && res.data.user) {
          setUser(res.data.user);
          localStorage.setItem("user", JSON.stringify(res.data.user));
        }
      } catch (err) {
        console.log("⚠️ /api/auth/me backend ready check failed:", err.message);
      }
    };

    fetchUser();
  }, [navigate]);

  // --------------------------
  // FETCH RESUMES
  // --------------------------
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const fetchResumes = async () => {
      try {
        setLoading(false);
        // Fixed path: Match with backend getUserResumes endpoint setup
        const res = await API.get("/api/resume/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setResumes(res.data || []);
      } catch (err) {
        console.log("⚠️ Resumes fetch error:", err.message);
      }
    };

    fetchResumes();
  }, []);

  // --------------------------
  // LOGOUT
  // --------------------------
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="relative min-h-screen text-white bg-[#050816] p-6">
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-500/10 blur-[180px] rounded-full"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[180px] rounded-full"></div>

      <div className="relative z-10">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">
            Welcome {user ? user.name : "User"} 👋
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 px-4 py-2 rounded-xl hover:bg-red-700 transition font-medium"
          >
            Logout
          </button>
        </div>

        {/* WELCOME BANNER */}
        <div className="bg-gradient-to-r from-green-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-8">
          <h1 className="text-5xl font-bold">Build Your Resume 🚀</h1>
          <p className="text-gray-400 mt-4">
            AI powered resumes that get you hired faster.
          </p>
          <Link
            to="/app/builder/new"
            className="inline-block mt-6 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-2xl font-semibold transition"
          >
            🚀 Create Resume
          </Link>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <p className="text-gray-400">Total Resumes</p>
            <h2 className="text-4xl font-bold text-green-400 mt-3">
              {resumes.length}
            </h2>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <p className="text-gray-400">Avg ATS Score</p>
            <h2 className="text-4xl font-bold text-green-400 mt-3">
              {resumes.length > 0 ? "92%" : "0%"}
            </h2>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <p className="text-gray-400">Downloads</p>
            <h2 className="text-4xl font-bold text-green-400 mt-3">0</h2>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <p className="text-gray-400">Profile Strength</p>
            <h2 className="text-4xl font-bold text-green-400 mt-3">Ready</h2>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-3 gap-8 mt-10">
          
          {/* RESUME LIST */}
          <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-2xl font-bold">Recent Resumes</h2>

            <div className="space-y-5 mt-8">
              {resumes.length === 0 ? (
                <p className="text-gray-400">
                  No resumes found. Create one 🚀
                </p>
              ) : (
                resumes.map((resume, index) => (
                  <div
                    key={resume._id || index}
                    className="bg-white/5 border border-white/10 rounded-2xl p-5 flex justify-between items-center hover:border-green-500/30 transition"
                  >
                    <div>
                      <h3 className="font-semibold text-lg">
                        {resume.title || `Untitled Resume ${index + 1}`}
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">
                        Template: <span className="capitalize text-green-400">{resume.template || "modern"}</span>
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-green-400 font-bold">ATS 90%</p>
                      <button 
                        onClick={() => navigate(`/app/builder/${resume._id}`)} 
                        className="text-sm mt-2 text-blue-400 hover:underline"
                      >
                        Edit →
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* AI SUGGESTIONS MOCK */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-2xl font-bold">AI Suggestions 🤖</h2>
            <div className="space-y-4 mt-6">
              <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4 text-sm text-gray-200">
                🎯 Add measurable achievements.
              </div>
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-4 text-sm text-gray-200">
                🚀 Improve project descriptions.
              </div>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-4 text-sm text-gray-200">
                💼 Add more industry keywords.
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;