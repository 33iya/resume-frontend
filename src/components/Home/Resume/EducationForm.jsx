import React from "react";

const ResumePreview = ({ resumeData }) => {

  const info = resumeData?.personalInfo;
  const education = resumeData?.education || [];
  const skills = resumeData?.skills || [];
  const experience = resumeData?.experience || [];
  const projects = resumeData?.projects || [];

  return (
    <div className="bg-[#ffffff] text-[#111] border border-gray-200 rounded-3xl p-8 shadow-2xl">

      {/* NAME */}
      <h1 className="text-4xl font-bold">
        {info?.name || "Your Name"}
      </h1>

      <p className="text-gray-600 mt-1">
        {info?.email} | {info?.phone} | {info?.location}
      </p>

      <hr className="my-6" />

      {/* SUMMARY */}
      <h2 className="font-bold text-xl">Professional Summary</h2>
      <p className="mt-3 text-gray-700">
        {info?.summary || "Your resume summary will appear here..."}
      </p>

      {/* EDUCATION */}
      <div className="mt-8">
        <h2 className="font-bold text-xl">Education</h2>

        {education.length === 0 ? (
          <p className="text-gray-500 mt-2">No education added</p>
        ) : (
          education.map((edu, index) => (
            <div key={index} className="mt-3">
              <p className="font-semibold">{edu.degree}</p>
              <p className="text-gray-600">
                {edu.college} ({edu.year})
              </p>
            </div>
          ))
        )}
      </div>

      {/* EXPERIENCE */}
      <div className="mt-8">
        <h2 className="font-bold text-xl">Experience</h2>

        {experience.length === 0 ? (
          <p className="text-gray-500 mt-2">No experience added</p>
        ) : (
          experience.map((exp, index) => (
            <div key={index} className="mt-3">
              <p className="font-semibold">{exp.role}</p>
              <p className="text-gray-600">
                {exp.company} ({exp.years})
              </p>
            </div>
          ))
        )}
      </div>

      {/* SKILLS */}
      <div className="mt-8">
        <h2 className="font-bold text-xl">Skills</h2>

        <div className="flex flex-wrap gap-2 mt-3">
          {skills.length === 0 ? (
            <p className="text-gray-500">No skills added</p>
          ) : (
            skills.map((skill, i) => (
              <span key={i} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))
          )}
        </div>
      </div>

      {/* PROJECTS */}
      <div className="mt-8">
        <h2 className="font-bold text-xl">Projects</h2>

        {projects.length === 0 ? (
          <p className="text-gray-500 mt-2">No projects added</p>
        ) : (
          projects.map((proj, i) => (
            <div key={i} className="mt-3">
              <p className="font-semibold">{proj.title}</p>
              <p className="text-gray-600">{proj.description}</p>
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default ResumePreview;