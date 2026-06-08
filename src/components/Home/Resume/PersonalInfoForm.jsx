import React, { useState, useEffect } from "react";

const PersonalInfoForm = ({ resumeData, setResumeData }) => {
  const [form, setForm] = useState({
    name: resumeData?.personalInfo?.name || "",
    email: resumeData?.personalInfo?.email || "",
    phone: resumeData?.personalInfo?.phone || "",
    location: resumeData?.personalInfo?.location || "",
    role: resumeData?.personalInfo?.role || "", 
    summary: resumeData?.personalInfo?.summary || "",
    profilePic: resumeData?.personalInfo?.profilePic || ""
  });

  const [aiSuggestions, setAiSuggestions] = useState([]);

  useEffect(() => {
    if (resumeData?.personalInfo) {
      setForm({
        name: resumeData.personalInfo.name || "",
        email: resumeData.personalInfo.email || "",
        phone: resumeData.personalInfo.phone || "",
        location: resumeData.personalInfo.location || "",
        role: resumeData.personalInfo.role || "",
        summary: resumeData.personalInfo.summary || "",
        profilePic: resumeData.personalInfo.profilePic || ""
      });
    }
  }, [resumeData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    
    if (e.target.name === "role") {
      const val = e.target.value.toLowerCase();
      if (val.includes("back")) {
        setAiSuggestions([
          "Experienced Backend Developer skilled in Node.js, Express, and MongoDB. Passionate about building secure REST APIs and optimizing database queries for high-performance web applications.",
          "Detail-oriented Server-Side Engineer with a strong foundation in JavaScript and database management. Proven ability to design scalable architectures and maintain clean codebases."
        ]);
      } else if (val.includes("front") || val.includes("react")) {
        setAiSuggestions([
          "Creative Frontend Developer specializing in React.js and modern CSS frameworks. Expert in translating complex UI/UX designs into responsive, pixel-perfect web interfaces.",
          "Passionate Frontend Engineer dedicated to building smooth user experiences and high-performance single-page applications with clean, modular components."
        ]);
      } else {
        setAiSuggestions([
          "Ambitious Software Engineer with strong problem-solving skills and expertise in modern web technologies. Dedicated to writing optimized code and learning new frameworks quickly.",
          "Results-driven tech professional eager to contribute technical expertise and innovative ideas to a dynamic software development team."
        ]);
      }
    }
  };

  const handleSelectSummary = (text) => {
    setForm(prev => ({ ...prev, summary: text }));
  };

  const handleSave = () => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: form
    }));
    alert("Personal Information saved! 💾");
  };

  return (
    <div className="bg-[#0b1220] border border-white/10 rounded-3xl p-8 shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-6">Personal Information</h2>

      <div className="space-y-4">
        <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} className="w-full p-3 rounded bg-white/10 outline-none focus:border-green-500 border border-transparent" />
        <input name="email" placeholder="Email Address" value={form.email} onChange={handleChange} className="w-full p-3 rounded bg-white/10 outline-none focus:border-green-500 border border-transparent" />
        <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} className="w-full p-3 rounded bg-white/10 outline-none focus:border-green-500 border border-transparent" />
        <input name="location" placeholder="Location" value={form.location} onChange={handleChange} className="w-full p-3 rounded bg-white/10 outline-none focus:border-green-500 border border-transparent" />
        
        {/* 🔥 FIXED: Profile Picture URL Input field yahan add ho gaya hai */}
        <div>
          <label className="block text-xs text-gray-400 mb-1">Profile Picture URL</label>
          <input name="profilePic" placeholder="Paste image link (e.g., https://imgur.com/xyz.jpg)" value={form.profilePic} onChange={handleChange} className="w-full p-3 rounded bg-white/10 outline-none focus:border-green-500 border border-transparent" />
        </div>

        <div>
          <label className="block text-xs text-gray-400 mb-1">Target Job Role (Type to see AI ideas below)</label>
          <input name="role" placeholder="Target Job Role (e.g., Backend Developer)" value={form.role} onChange={handleChange} className="w-full p-3 rounded bg-white/10 outline-none focus:border-blue-500 border border-transparent text-green-400" />
        </div>

        {aiSuggestions.length > 0 && (
          <div className="bg-blue-950/40 p-4 rounded-xl border border-blue-500/20 space-y-2">
            <p className="text-xs font-semibold text-blue-400">✨ Click an AI suggestion to insert instantly:</p>
            {aiSuggestions.map((text, idx) => (
              <div 
                key={idx} 
                onClick={() => handleSelectSummary(text)}
                className="text-xs bg-white/5 p-2 rounded-lg cursor-pointer hover:bg-blue-500/20 border border-transparent hover:border-blue-500/40 transition text-gray-300"
              >
                {text}
              </div>
            ))}
          </div>
        )}

        <textarea name="summary" placeholder="Professional Summary" value={form.summary} onChange={(e) => setForm({...form, summary: e.target.value})} className="w-full p-3 rounded bg-white/10 outline-none focus:border-green-500 border border-transparent" rows={4} />
      </div>

      <div className="flex gap-3 mt-6">
        <button onClick={handleSave} className="w-full bg-green-500 hover:bg-green-400 text-black font-bold px-5 py-3 rounded-xl transition shadow-lg shadow-green-500/20">
          Save & Continue 💾
        </button>
      </div>
    </div>
  );
};

export default PersonalInfoForm;