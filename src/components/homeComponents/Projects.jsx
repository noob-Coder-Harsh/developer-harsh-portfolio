import React from 'react';
import ProjectCard from '../ProjectCard';
import heroImage from '../../assets/images/hero.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Disney+ Clone',
      techStack: 'React, Tailwind',
      image: heroImage,
      description: 'A Disney+ homepage clone built with React.',
      link: 'https://your-disney-clone-link.com',
    },
    {
      title: 'Ecommerce App',
      techStack: 'Flutter, Firebase',
      image: heroImage,
      description: 'Ecommerce app for web, Android, and iOS.',
      link: 'https://e-com-51fe4.web.app/',
    },
    // add more projects...
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#334155]"
    >
      <h2 className="text-4xl text-center font-bold text-cyan-300 mb-16 glow-text">
        My Projects
      </h2>
      
      <div className="flex flex-col gap-12 px-4 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <ProjectCard
            key={index}
            title={proj.title}
            techStack={proj.techStack}
            image={proj.image}
            description={proj.description}
            link={proj.link}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
