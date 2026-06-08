import React from "react";

const ResumePreview = ({ resumeData, accentColor, template }) => {
  const info = resumeData?.personalInfo || {};
  const education = Array.isArray(resumeData?.education) ? resumeData.education : [];
  const experience = Array.isArray(resumeData?.experience) ? resumeData.experience : [];
  const skills = Array.isArray(resumeData?.skills) ? resumeData.skills : [];
  const projects = Array.isArray(resumeData?.projects) ? resumeData.projects : [];

  // Profile Picture Render Element
  const ProfileImage = () => (
    info.profilePic ? (
      <img 
        src={info.profilePic} 
        alt="Profile" 
        className="w-24 h-24 rounded-full object-cover border-2 print:border shadow"
        style={{ borderColor: accentColor || "#10b981" }}
      />
    ) : null
  );

  // ================= SIMPLE TEMPLATE =================
  if (template === "simple") {
    return (
      <div className="printable-resume-card bg-white text-black p-8 rounded-xl shadow border border-gray-100">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h1 className="text-3xl font-bold" style={{ color: accentColor }}>
              {info.name || "Your Name"}
            </h1>
            <p className="text-gray-600 mt-1">
              {info.email} {info.phone ? `| ${info.phone}` : ""} {info.location ? `| ${info.location}` : ""}
            </p>
          </div>
          <ProfileImage />
        </div>

        <hr className="my-4 border-gray-200" />

        {info.summary && (
          <div className="mb-4">
            <h2 className="font-bold mb-1 text-lg" style={{ color: accentColor }}>Summary</h2>
            <p className="text-gray-700 leading-relaxed">{info.summary}</p>
          </div>
        )}

        <div className="mb-4">
          <h2 className="font-bold mb-2 text-xl border-b pb-0.5" style={{ color: accentColor }}>Education</h2>
          {education.length === 0 ? <p className="text-gray-400 italic text-sm">No education added</p> : 
            education.map((e, i) => (
              <div key={i} className="mb-2">
                <p className="font-semibold">• {e.degree} - <span className="text-gray-600 font-normal">{e.college} ({e.year})</span></p>
              </div>
            ))
          }
        </div>

        <div className="mb-4">
          <h2 className="font-bold mb-2 text-xl border-b pb-0.5" style={{ color: accentColor }}>Experience</h2>
          {experience.length === 0 ? <p className="text-gray-400 italic text-sm">No experience added</p> : 
            experience.map((e, i) => (
              <div key={i} className="mb-2">
                <p className="font-semibold">• {e.role} <span className="text-gray-600 font-normal">at {e.company} ({e.years})</span></p>
              </div>
            ))
          }
        </div>
      </div>
    );
  }

  // ================= MODERN TEMPLATE =================
  if (template === "modern") {
    return (
      <div className="printable-resume-card resume-template-modern bg-[#0f172a] text-white p-8 rounded-xl border border-slate-800">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h1 className="text-3xl font-bold" style={{ color: accentColor }}>
              {info.name || "Your Name"}
            </h1>
            <p className="text-gray-400 mt-1 info-text">
              {info.email} {info.phone ? `| ${info.phone}` : ""} {info.location ? `| ${info.location}` : ""}
            </p>
          </div>
          <ProfileImage />
        </div>

        {info.summary && (
          <div className="mt-4">
            <p className="text-gray-300 summary-text leading-relaxed">{info.summary}</p>
          </div>
        )}

        <div className="grid grid-cols-2 gap-6 mt-6 printable-grid">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold border-b border-slate-700 pb-1 mb-3 heading-modern" style={{ color: accentColor }}>Skills</h2>
              <div className="flex flex-wrap gap-1.5">
                {skills.length === 0 ? <p className="text-gray-500 italic text-sm">No skills added</p> : 
                  skills.map((s, i) => (
                    <span key={i} className="inline-block bg-slate-800 text-slate-200 text-xs px-2.5 py-1 rounded skill-badge">
                      {s}
                    </span>
                  ))
                }
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold border-b border-slate-700 pb-1 mb-3 heading-modern" style={{ color: accentColor }}>Projects</h2>
              {projects.length === 0 ? <p className="text-gray-500 italic text-sm">No projects added</p> : 
                projects.map((p, i) => (
                  <div key={i} className="mb-2">
                    <p className="font-semibold text-sm">• {p.title}</p>
                    <p className="text-xs text-gray-400 project-desc mt-0.5">{p.description}</p>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold border-b border-slate-700 pb-1 mb-3 heading-modern" style={{ color: accentColor }}>Education</h2>
              {education.length === 0 ? <p className="text-gray-500 italic text-sm">No education added</p> : 
                education.map((e, i) => (
                  <div key={i} className="mb-2">
                    <p className="font-semibold text-sm text-slate-200">{e.degree}</p>
                    <p className="text-xs text-gray-400">{e.college} ({e.year})</p>
                  </div>
                ))
              }
            </div>

            <div>
              <h2 className="text-xl font-bold border-b border-slate-700 pb-1 mb-3 heading-modern" style={{ color: accentColor }}>Experience</h2>
              {experience.length === 0 ? <p className="text-gray-500 italic text-sm">No experience added</p> : 
                experience.map((e, i) => (
                  <div key={i} className="mb-2">
                    <p className="font-semibold text-sm text-slate-200">{e.role}</p>
                    <p className="text-xs text-gray-400">{e.company} ({e.years})</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ================= CREATIVE TEMPLATE =================
  if (template === "creative") {
    return (
      <div className="printable-resume-card flex rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-white">
        <div className="w-1/3 p-6 text-white creative-sidebar flex flex-col items-center text-center" style={{ backgroundColor: accentColor }}>
          <div className="mb-4"><ProfileImage /></div>
          <h1 className="text-2xl font-bold break-words">{info.name || "Your Name"}</h1>
          <p className="text-xs opacity-90 mt-1 break-words">{info.email}</p>
          <p className="text-xs opacity-90 mt-0.5">{info.phone}</p>
          <p className="text-xs opacity-90 mt-0.5">{info.location}</p>

          <h3 className="mt-6 font-bold uppercase tracking-wider text-xs border-b border-white/20 pb-1 w-full text-left">Skills</h3>
          <div className="mt-2 space-y-1 text-sm w-full text-left">
            {skills.length === 0 ? <p className="text-xs opacity-60 italic">No skills added</p> : 
              skills.map((s, i) => (
                <p key={i} className="truncate">• {s}</p>
              ))
            }
          </div>
        </div>

        <div className="w-2/3 p-6 bg-white text-black">
          <h2 className="font-bold text-xl uppercase tracking-wide border-b pb-1 mb-3" style={{ color: accentColor }}>Experience</h2>
          {experience.length === 0 ? <p className="text-gray-400 italic text-sm">No experience added</p> : 
            experience.map((e, i) => (
              <div key={i} className="mb-3">
                <p className="font-semibold text-gray-900">{e.role}</p>
                <p className="text-sm text-gray-600">{e.company} ({e.years})</p>
              </div>
            ))
          }

          <h2 className="font-bold text-xl uppercase tracking-wide border-b pb-1 mt-6 mb-3" style={{ color: accentColor }}>Education</h2>
          {education.length === 0 ? <p className="text-gray-400 italic text-sm">No education added</p> : 
            education.map((e, i) => (
              <div key={i} className="mb-3">
                <p className="font-semibold text-gray-900">{e.degree}</p>
                <p className="text-sm text-gray-600">{e.college} ({e.year})</p>
              </div>
            ))
          }
        </div>
      </div>
    );
  }

  return null;
};

export default ResumePreview;