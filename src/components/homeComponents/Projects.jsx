import React from 'react'
import ProjectCard from '../ProjectCard'
import heroImage from '../../assets/images/hero.jpg'

const Projects = () => {
  const projects = [
  {
    title: "Disney+ Clone",
    image: heroImage,
    description: "A Disney+ homepage clone built with React.",
    link: "https://your-disney-clone-link.com",
  },
  {
    title: "Ecommerce App",
    image:  heroImage,
    description: "Ecommerce app for web+android+iOS.",
    link: "https://e-com-51fe4.web.app/",
  },
  // add more projects...
];
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <h2 className="text-3xl text-center font-bold text-white mb-10">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <ProjectCard
            key={index}
            title={proj.title}
            image={proj.image}
            description={proj.description}
            link={proj.link}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
