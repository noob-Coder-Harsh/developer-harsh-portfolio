import React from 'react';
import ProjectCard from '../ProjectCard';
import projectData from '../../data/projects-data';
import { Link } from 'react-router-dom';
import ProjectCardMobile from '../ProjetCardMobile';

const Projects = () => {
  const featuredProjects = projectData.filter((project) => project.featured);

  return (
    <section
      id="projects"
      className="w-full py-20 bg-gradient-to-b md:px-7 from-primary/20 via-background/90 to-background/50 flex flex-col items-center"
    >
      <h2 className="text-4xl text-center font-bold text-primary mb-16">
        My Projects
      </h2>
      
      <div className="flex flex-col gap-12 md:px-7 px-4 w-full mx-auto">
        {featuredProjects.map((project, index) => (
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

      <Link to="/projects" className="inline-block bg-primary mt-5 hover:bg-popover text-primary-foreground px-4 py-2 rounded-full font-semibold transition duration-300">View All Projects</Link>
    </section>
  );
};

export default Projects;
