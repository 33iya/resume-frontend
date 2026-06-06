import React from "react";

const ResumePreview = ({ resumeData, accentColor, template }) => {

  const info = resumeData?.personalInfo || {};
  const education = Array.isArray(resumeData?.education) ? resumeData.education : [];
  const experience = Array.isArray(resumeData?.experience) ? resumeData.experience : [];
  const skills = Array.isArray(resumeData?.skills) ? resumeData.skills : [];
  const projects = Array.isArray(resumeData?.projects) ? resumeData.projects : [];

  // ================= SIMPLE =================
  if (template === "simple") {
    return (
      <div className="bg-white text-black p-6 rounded-xl shadow">

        <h1 className="text-3xl font-bold" style={{ color: accentColor }}>
          {info.name || "Your Name"}
        </h1>

        <p className="text-gray-600">
          {info.email} | {info.phone}
        </p>

        <hr className="my-4" />

        <Section title="Education" accent={accentColor}>
          {education.map((e, i) => (
            <p key={i}>• {e.degree} - {e.college}</p>
          ))}
        </Section>

        <Section title="Experience" accent={accentColor}>
          {experience.map((e, i) => (
            <p key={i}>• {e.role}</p>
          ))}
        </Section>

      </div>
    );
  }

  // ================= MODERN =================
  if (template === "modern") {
    return (
      <div className="bg-[#0f172a] text-white p-6 rounded-xl border">

        <h1 className="text-3xl font-bold" style={{ color: accentColor }}>
          {info.name || "Your Name"}
        </h1>

        <p className="text-gray-400">
          {info.email} | {info.phone}
        </p>

        <div className="grid grid-cols-2 gap-5 mt-5">

          <div>
            <h2 style={{ color: accentColor }}>Skills</h2>
            {skills.map((s, i) => (
              <span key={i} className="inline-block bg-gray-700 px-2 py-1 m-1 rounded">
                {s}
              </span>
            ))}
          </div>

          <div>
            <h2 style={{ color: accentColor }}>Projects</h2>
            {projects.map((p, i) => (
              <p key={i}>• {p.title}</p>
            ))}
          </div>

        </div>

      </div>
    );
  }

  // ================= CREATIVE =================
  if (template === "creative") {
    return (
      <div className="flex rounded-xl overflow-hidden shadow-xl">

        <div className="w-1/3 p-4 text-white" style={{ backgroundColor: accentColor }}>
          <h1 className="text-xl font-bold">{info.name}</h1>
          <p className="text-xs">{info.email}</p>

          <h3 className="mt-4 font-bold">Skills</h3>
          {skills.map((s, i) => (
            <p key={i}>• {s}</p>
          ))}
        </div>

        <div className="w-2/3 p-4 bg-white text-black">
          <h2 className="font-bold">Experience</h2>
          {experience.map((e, i) => (
            <p key={i}>• {e.role}</p>
          ))}
        </div>

      </div>
    );
  }

  return null;
};

const Section = ({ title, children, accent }) => (
  <div className="mb-4">
    <h2 className="font-bold mb-2" style={{ color: accent }}>
      {title}
    </h2>
    {children}
  </div>
);

export default ResumePreview;