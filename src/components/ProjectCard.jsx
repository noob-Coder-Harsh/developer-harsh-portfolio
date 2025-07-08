import React from 'react';

const ProjectCard = ({
  title,
  techStack,
  image,
  description,
  link,
  reverse,
}) => {
  return (
    <div className="relative w-full h-[250px] flex justify-center mb-12">
      {/* IMAGE CARD */}
      <div
        className={`
          relative
          w-[400px] h-[250px]
          rounded-2xl
          overflow-hidden
          shadow-2xl
          transition-transform duration-500
          hover:scale-105
          ${reverse ? 'ml-auto' : 'mr-auto'}
        `}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-black/30 rounded-2xl" />
      </div>

      {/* GLASS CARD */}
      <div
        className={`
          absolute
          top-1/2
          ${reverse ? 'right-[300px]' : 'left-[300px]'}
          -translate-y-1/2
          w-[calc(100%-500px)]
          max-w-[600px]
          p-6
          bg-gradient-to-r
          from-sky-500/20 via-sky-700/30 to-sky-500/20
          backdrop-blur-lg
          border border-white/10
          rounded-xl
          shadow-xl
          text-white
          transition-all duration-300
          hover:scale-105
          z-10
        `}
      >
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-purple-200 mb-4 italic">{techStack}</p>
        <p className="text-white text-base opacity-90 mb-4">
          {description}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full font-semibold transition duration-300"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
