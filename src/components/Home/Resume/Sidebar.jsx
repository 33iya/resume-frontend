import React from "react";

const Sidebar = ({ activeSection, setActiveSection }) => {

  const sections = [
    "Personal Info",
    "Education",
    "Experience",
    "Skills",
    "Projects"
  ];

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">

      <h2 className="font-bold mb-4">Sections</h2>

      {sections.map((item, i) => (
        <button
          key={i}
          onClick={() => setActiveSection(item)}
          className={`w-full text-left p-2 rounded mb-2 transition ${
            activeSection === item ? "bg-green-500 text-black" : "hover:bg-white/10"
          }`}
        >
          {item}
        </button>
      ))}

    </div>
  );
};

export default Sidebar;