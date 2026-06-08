import React, { useState, useEffect } from "react";

const EducationForm = ({ resumeData, setResumeData }) => {
  // Safe array check taaki data na hone par loop crash na ho
  const educationList = Array.isArray(resumeData?.education) ? resumeData.education : [];

  // Local state naye input field ke liye
  const [newEdu, setNewEdu] = useState({
    degree: "",
    college: "",
    year: "",
  });

  const handleChange = (e) => {
    setNewEdu({ ...newEdu, [e.target.name]: e.target.value });
  };

  // Nayi education add karne ka function
  const handleAddEducation = (e) => {
    e.preventDefault();
    if (!newEdu.degree || !newEdu.college || !newEdu.year) {
      alert("Please fill all education fields (Degree, College, Year)!");
      return;
    }

    // Parent state (ResumeBuilder) mein list ko update karna
    setResumeData((prev) => ({
      ...prev,
      education: [...educationList, newEdu],
    }));

    // Form khali karna
    setNewEdu({ degree: "", college: "", year: "" });
  };

  // Kisi purani education ko list se hatane ka function
  const handleRemoveEducation = (indexToRemove) => {
    const filteredList = educationList.filter((_, index) => index !== indexToRemove);
    setResumeData((prev) => ({
      ...prev,
      education: filteredList,
    }));
  };

  return (
    <div className="bg-[#0b1220] border border-white/10 rounded-3xl p-8 shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-6">Education Details</h2>

      {/* ADDED EDUCATION LIST */}
      {educationList.length > 0 && (
        <div className="mb-6 space-y-3">
          <p className="text-sm text-gray-400 font-medium">Added Education:</p>
          {educationList.map((edu, index) => (
            <div 
              key={index} 
              className="flex justify-between items-center bg-white/5 border border-white/5 p-3 rounded-2xl"
            >
              <div>
                <p className="font-semibold text-sm text-green-400">{edu.degree}</p>
                <p className="text-xs text-gray-400">{edu.college} ({edu.year})</p>
              </div>
              <button
                type="button"
                onClick={() => handleRemoveEducation(index)}
                className="text-xs bg-red-600/20 text-red-400 border border-red-500/20 px-2.5 py-1 rounded-xl hover:bg-red-600 hover:text-white transition"
              >
                🗑️ Delete
              </button>
            </div>
          ))}
        </div>
      )}

      {/* NEW EDUCATION FORM */}
      <form onSubmit={handleAddEducation} className="space-y-4">
        <div>
          <label className="block mb-2 text-sm text-gray-400">Degree / Course</label>
          <input
            type="text"
            name="degree"
            value={newEdu.degree}
            onChange={handleChange}
            placeholder="e.g. B.Tech Computer Science"
            className="w-full p-3 rounded bg-white/10 outline-none focus:border-green-500 border border-transparent"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-400">College / School Name</label>
          <input
            type="text"
            name="college"
            value={newEdu.college}
            onChange={handleChange}
            placeholder="e.g. Delhi University"
            className="w-full p-3 rounded bg-white/10 outline-none focus:border-green-500 border border-transparent"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-400">Passing Year</label>
          <input
            type="text"
            name="year"
            value={newEdu.year}
            onChange={handleChange}
            placeholder="e.g. 2022 - 2026"
            className="w-full p-3 rounded bg-white/10 outline-none focus:border-green-500 border border-transparent"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-2xl transition shadow-lg shadow-blue-600/10"
        >
          ➕ Add Education
        </button>
      </form>
    </div>
  );
};

export default EducationForm;