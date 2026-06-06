import React, { useState } from "react";

const SkillsForm = ({ setResumeData }) => {

  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);

  const handleAdd = () => {
    if (!skill.trim()) return;

    const updatedSkills = [...skills, skill];

    setSkills(updatedSkills);

    setResumeData(prev => ({
      ...prev,
      skills: updatedSkills
    }));

    setSkill("");
  };

  return (
    <div className="bg-[#0b1220] border border-white/10 rounded-3xl p-6 shadow-lg">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Skills</h2>

        <button
          onClick={handleAdd}
          className="bg-green-500 hover:bg-green-400 text-black font-semibold px-5 py-2 rounded-xl"
        >
          + Add Skill
        </button>
      </div>

      {/* INPUT */}
      <div className="flex gap-3">
        <input
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          type="text"
          placeholder="e.g. React.js"
          className="flex-1 bg-white/10 border border-white/10 rounded-xl px-4 py-3"
        />
      </div>

      {/* SKILL LIST */}
      <div className="flex flex-wrap gap-2 mt-4">
        {skills.map((s, i) => (
          <span
            key={i}
            className="bg-purple-500/20 border border-purple-400 px-3 py-1 rounded-full text-sm"
          >
            {s}
          </span>
        ))}
      </div>

    </div>
  );
};

export default SkillsForm;