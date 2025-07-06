import React from "react";
import projects from "../data/projects-data";
import { techIcons } from "../data/techIcons";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(date);
};

const Projects = () => {
  return (
    <div className="min-h-screen pt-28 pb-12 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-cyan-400">
          Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-cyan-400 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  {project.technologies.map((tech, i) => {
                    const icon = techIcons[tech];
                    return icon ? (
                      <img
                        key={i}
                        src={icon}
                        alt={tech}
                        title={tech}
                        className="w-6 h-6"
                      />
                    ) : (
                      <span
                        key={i}
                        className="bg-cyan-700 text-white text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-400 hover:underline text-sm"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-400 hover:underline text-sm"
                    >
                      Live Demo
                    </a>
                  )}
                </div>

                <p className="text-xs text-gray-500 mt-3">
                  Date: {formatDate(project.date)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
