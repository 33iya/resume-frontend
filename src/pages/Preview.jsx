import React from "react";

const ResumePreview = ({ resumeData, accentColor, template }) => {
  const { personalInfo, education, experience, skills, projects } = resumeData;

  // =========================
  // 🎯 TEMPLATE 1: SIMPLE ATS
  // =========================
  if (template === "simple") {
    return (
      <div className="bg-white text-black p-6 rounded shadow-md">
        
        <h1 className="text-2xl font-bold" style={{ color: accentColor }}>
          {personalInfo?.name || "Your Name"}
        </h1>

        <p className="text-sm text-gray-600">
          {personalInfo?.email} | {personalInfo?.phone}
        </p>

        <hr className="my-3" />

        <Section title="Education">
          {education?.map((edu, i) => (
            <p key={i}>• {edu.degree} - {edu.institute}</p>
          ))}
        </Section>

        <Section title="Experience">
          {experience?.map((exp, i) => (
            <p key={i}>• {exp.role} at {exp.company}</p>
          ))}
        </Section>

        <Section title="Skills">
          <p>{skills?.join(", ")}</p>
        </Section>

        <Section title="Projects">
          {projects?.map((p, i) => (
            <p key={i}>• {p.name}</p>
          ))}
        </Section>

      </div>
    );
  }

  // =========================
  // 🎯 TEMPLATE 2: MODERN (BEST)
  // =========================
  if (template === "modern") {
    return (
      <div className="bg-[#0f172a] text-white p-6 rounded-xl shadow-xl border border-gray-700">
        
        {/* Header */}
        <div className="border-b pb-4 mb-4" style={{ borderColor: accentColor }}>
          <h1 className="text-3xl font-bold" style={{ color: accentColor }}>
            {personalInfo?.name || "Your Name"}
          </h1>
          <p className="text-gray-300 text-sm">
            {personalInfo?.email} | {personalInfo?.phone}
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 gap-6">

          <div>
            <h2 className="text-lg font-semibold mb-2" style={{ color: accentColor }}>
              Education
            </h2>
            {education?.map((edu, i) => (
              <p key={i} className="text-sm text-gray-300">
                • {edu.degree} - {edu.institute}
              </p>
            ))}
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2" style={{ color: accentColor }}>
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills?.map((s, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs rounded-full"
                  style={{ backgroundColor: accentColor }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2" style={{ color: accentColor }}>
              Experience
            </h2>
            {experience?.map((exp, i) => (
              <p key={i} className="text-sm text-gray-300">
                • {exp.role} @ {exp.company}
              </p>
            ))}
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2" style={{ color: accentColor }}>
              Projects
            </h2>
            {projects?.map((p, i) => (
              <p key={i} className="text-sm text-gray-300">
                • {p.name}
              </p>
            ))}
          </div>

        </div>
      </div>
    );
  }

  // =========================
  // 🎯 TEMPLATE 3: CREATIVE
  // =========================
  if (template === "creative") {
    return (
      <div className="flex bg-white text-black rounded-xl overflow-hidden shadow-xl">

        {/* LEFT SIDE BAR */}
        <div
          className="w-1/3 p-4 text-white"
          style={{ backgroundColor: accentColor }}
        >
          <h1 className="text-xl font-bold">
            {personalInfo?.name || "Your Name"}
          </h1>

          <p className="text-xs mt-2">
            {personalInfo?.email}
          </p>

          <p className="text-xs">
            {personalInfo?.phone}
          </p>

          <hr className="my-3 border-white/40" />

          <h3 className="font-semibold">Skills</h3>
          <ul className="text-xs mt-2 space-y-1">
            {skills?.map((s, i) => (
              <li key={i}>• {s}</li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="w-2/3 p-4">

          <Section title="Education">
            {education?.map((edu, i) => (
              <p key={i}>• {edu.degree} - {edu.institute}</p>
            ))}
          </Section>

          <Section title="Experience">
            {experience?.map((exp, i) => (
              <p key={i}>• {exp.role} at {exp.company}</p>
            ))}
          </Section>

          <Section title="Projects">
            {projects?.map((p, i) => (
              <p key={i}>• {p.name}</p>
            ))}
          </Section>

        </div>
      </div>
    );
  }

  return null;
};

// =========================
// 🔥 Reusable Section Component
// =========================
const Section = ({ title, children }) => {
  return (
    <div className="mb-4">
      <h2 className="font-semibold mb-1">{title}</h2>
      <div className="text-sm text-gray-700">{children}</div>
    </div>
  );
};

export default ResumePreview;