import React, { useState } from "react";

const ProjectsForm = ({ setResumeData }) => {

  const [project, setProject] = useState({
    title: "",
    description: ""
  });

  const [projects, setProjects] = useState([]);

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!project.title) return;

    const updatedProjects = [...projects, project];

    setProjects(updatedProjects);

    setResumeData(prev => ({
      ...prev,
      projects: updatedProjects
    }));

    setProject({
      title: "",
      description: ""
    });
  };

  return (
    <div className="bg-[#0b1220] border border-white/10 rounded-3xl p-6 shadow-lg">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Projects</h2>

        <button
          onClick={handleAdd}
          className="bg-green-500 hover:bg-green-400 text-black font-semibold px-5 py-2 rounded-xl"
        >
          + Add Project
        </button>
      </div>

      {/* INPUTS */}
      <div className="space-y-4">

        <input
          name="title"
          value={project.title}
          onChange={handleChange}
          type="text"
          placeholder="Project Title"
          className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3"
        />

        <textarea
          name="description"
          value={project.description}
          onChange={handleChange}
          rows="4"
          placeholder="Project Description"
          className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3"
        />

      </div>

      {/* PROJECT LIST */}
      <div className="mt-4 space-y-2">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-purple-500/10 border border-purple-400 p-3 rounded-xl"
          >
            <p className="font-semibold">{p.title}</p>
            <p className="text-sm text-gray-300">{p.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ProjectsForm;