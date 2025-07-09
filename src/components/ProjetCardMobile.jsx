import React from "react";
import { techIcons } from "../data/techIcons";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(date);
};

const ProjectCardMobile = ({ project }) => {
  return (
    <div className="relative">
      {/* Shiny Border */}
      {project.featured && (
        <div className="absolute inset-0 rounded-xl pointer-events-none z-10 overflow-hidden">
          <div className="absolute inset-0 animate-border-shimmer bg-[linear-gradient(120deg,_transparent,_rgba(255,255,255,0.4),_transparent)]" />
        </div>
      )}

      {/* Main Glass Card */}
      <div className="relative z-20 bg-gray-900/20 rounded-xl shadow-2xl overflow-hidden backdrop-blur-lg border border-white/10">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />

        <div className="p-5 text-white">
          <h2 className="text-xl font-semibold text-cyan-400 mb-2">
            {project.title}
          </h2>

          <p className="text-sm text-gray-300 mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-3 mb-4">
            {project.technologies.map((tech, i) => {
              const icon = techIcons[tech];
              return icon ? (
                <img key={i} src={icon} alt={tech} title={tech} className="w-6 h-6" />
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
            {project.demo && project.demo.trim() !== "" && (
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

          <p className="text-xs text-gray-400 mt-3">
            Date: {formatDate(project.date)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardMobile;
