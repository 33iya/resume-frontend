import React, { useState } from "react";

const ExperienceForm = ({ resumeData, setResumeData }) => {
  const experienceList = Array.isArray(resumeData?.experience) ? resumeData.experience : [];

  const [newExp, setNewExp] = useState({
    role: "",
    company: "",
    years: "",
  });

  const handleChange = (e) => {
    setNewExp({ ...newExp, [e.target.name]: e.target.value });
  };

  const handleAddExperience = (e) => {
    e.preventDefault();
    if (!newExp.role || !newExp.company || !newExp.years) {
      alert("Please fill all experience fields!");
      return;
    }

    setResumeData((prev) => ({
      ...prev,
      experience: [...experienceList, newExp],
    }));

    setNewExp({ role: "", company: "", years: "" });
  };

  const handleRemoveExperience = (indexToRemove) => {
    setResumeData((prev) => ({
      ...prev,
      experience: experienceList.filter((_, index) => index !== indexToRemove),
    }));
  };

  return (
    <div className="bg-[#0b1220] border border-white/10 rounded-3xl p-8 shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-6">Experience Details</h2>

      {experienceList.length > 0 && (
        <div className="mb-6 space-y-3">
          <p className="text-sm text-gray-400 font-medium">Added Experience:</p>
          {experienceList.map((exp, index) => (
            <div key={index} className="flex justify-between items-center bg-white/5 border border-white/5 p-3 rounded-2xl">
              <div>
                <p className="font-semibold text-sm text-blue-400">{exp.role}</p>
                <p className="text-xs text-gray-400">{exp.company} ({exp.years})</p>
              </div>
              <button
                type="button"
                onClick={() => handleRemoveExperience(index)}
                className="text-xs bg-red-600/20 text-red-400 border border-red-500/20 px-2.5 py-1 rounded-xl hover:bg-red-600 hover:text-white transition"
              >
                🗑️ Delete
              </button>
            </div>
          ))}
        </div>
      )}

      <form onSubmit={handleAddExperience} className="space-y-4">
        <div>
          <label className="block mb-2 text-sm text-gray-400">Job Role / Position</label>
          <input type="text" name="role" value={newExp.role} onChange={handleChange} placeholder="e.g. Node.js Developer" className="w-full p-3 rounded bg-white/10 outline-none focus:border-blue-500 border border-transparent" />
        </div>
        <div>
          <label className="block mb-2 text-sm text-gray-400">Company Name</label>
          <input type="text" name="company" value={newExp.company} onChange={handleChange} placeholder="e.g. Tech Solutions Pvt Ltd" className="w-full p-3 rounded bg-white/10 outline-none focus:border-blue-500 border border-transparent" />
        </div>
        <div>
          <label className="block mb-2 text-sm text-gray-400">Duration (Years)</label>
          <input type="text" name="years" value={newExp.years} onChange={handleChange} placeholder="e.g. 2024 - Present" className="w-full p-3 rounded bg-white/10 outline-none focus:border-blue-500 border border-transparent" />
        </div>

        <button type="submit" className="w-full mt-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-2xl transition shadow-lg">
          ➕ Add Experience
        </button>
      </form>
    </div>
  );
};

export default ExperienceForm;