import React, { useState } from "react";

const ExperienceForm = ({ setResumeData }) => {

  const [exp, setExp] = useState({
    company: "",
    role: "",
    description: ""
  });

  const handleChange = (e) => {
    setExp({ ...exp, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!exp.company || !exp.role) return;

    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, exp]
    }));

    setExp({
      company: "",
      role: "",
      description: ""
    });
  };

  return (
    <div className="bg-[#0b1220] border border-white/10 rounded-3xl p-6 shadow-lg">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Experience</h2>

        <button
          onClick={handleAdd}
          className="bg-green-500 hover:bg-green-400 text-black font-semibold px-5 py-2 rounded-xl"
        >
          + Add
        </button>
      </div>

      {/* INPUTS */}
      <div className="space-y-4">

        <input
          name="company"
          value={exp.company}
          onChange={handleChange}
          type="text"
          placeholder="Company Name"
          className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3"
        />

        <input
          name="role"
          value={exp.role}
          onChange={handleChange}
          type="text"
          placeholder="Job Title"
          className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3"
        />

        <textarea
          name="description"
          value={exp.description}
          onChange={handleChange}
          rows="4"
          placeholder="Describe your work..."
          className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3"
        />

      </div>

    </div>
  );
};

export default ExperienceForm;