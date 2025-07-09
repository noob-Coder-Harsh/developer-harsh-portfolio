import React from "react";
import projects from "../data/projects-data";
import ProjectCard from "../components/ProjectCard"; // for web
import ProjectCardMobile from "../components/ProjetCardMobile"; // for mobile

const Projects = () => {
  return (
    <section className="py-20 bg-background text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-cyan-400 text-center">
          Projects
        </h1>

        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <div key={project.id}>
              {/* Mobile View */}
              <div className="block md:hidden">
                <ProjectCardMobile project={project} />
              </div>

              {/* Desktop View */}
              <div className="hidden md:block">
                <ProjectCard project={project} reverse={index % 2 !== 0} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
