import React from "react";
import projects from "../data/projects-data";
import ProjectCardMobile from "../components/ProjetCardMobile"; // Unified card UI

const Projects = () => {
  return (
    <section className="py-20 bg-background text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-cyan-400 text-center">
          Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="flex">
              <ProjectCardMobile project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
