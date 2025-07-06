import React from 'react'

const ProjectCard = ({ title, image, description, link }) => {
  return (
    <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden max-w-sm mx-auto">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-400 text-sm mb-2">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-500 hover:underline"
        >
          Live Demo
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
