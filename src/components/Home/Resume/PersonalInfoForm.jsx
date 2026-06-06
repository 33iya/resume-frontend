import React, { useState } from "react";

const PersonalInfoForm = ({ setResumeData }) => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    summary: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: form
    }));
  };

  // 🤖 AI SUMMARY (TEMP FRONTEND MOCK)
  const generateAISummary = () => {
    const aiText = `Full Stack Developer with experience in React, Node.js, MongoDB, building scalable SaaS applications and modern web apps.`;

    setForm(prev => ({
      ...prev,
      summary: aiText
    }));
  };

  return (
    <div className="bg-[#0b1220] border border-white/10 rounded-3xl p-8 shadow-lg text-white">

      <h2 className="text-2xl font-bold mb-6">
        Personal Information
      </h2>

      {/* INPUTS */}
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="w-full mb-3 p-3 rounded bg-white/10 outline-none"
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full mb-3 p-3 rounded bg-white/10 outline-none"
      />

      <input
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
        className="w-full mb-3 p-3 rounded bg-white/10 outline-none"
      />

      <input
        name="location"
        placeholder="Location"
        value={form.location}
        onChange={handleChange}
        className="w-full mb-3 p-3 rounded bg-white/10 outline-none"
      />

      <textarea
        name="summary"
        placeholder="Summary"
        value={form.summary}
        onChange={handleChange}
        className="w-full mb-3 p-3 rounded bg-white/10 outline-none"
        rows={4}
      />

      {/* BUTTONS */}
      <div className="flex gap-3 mt-4">

        {/* SAVE */}
        <button
          onClick={handleSave}
          className="bg-green-500 hover:bg-green-400 text-black font-semibold px-5 py-2 rounded-xl"
        >
          Save Info
        </button>

        {/* AI BUTTON */}
        <button
          onClick={generateAISummary}
          className="bg-blue-500 hover:bg-blue-400 text-black font-semibold px-5 py-2 rounded-xl"
        >
          ✨ AI Generate
        </button>

      </div>

    </div>
  );
};

export default PersonalInfoForm;