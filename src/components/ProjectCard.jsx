import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, reverse }) => {
  const {
    id,
    title,
    image,
    description,
    technologies,
    github,
    demo, // this is the "live preview"
    date,
    featured,
  } = project;

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
          ${reverse ? "ml-auto" : "mr-auto"}
        `}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-background/30 rounded-2xl" />
      </div>

      {/* GLASS CARD */}
      <div
        className={`
          absolute
          top-1/2
          ${reverse ? "right-[300px]" : "left-[300px]"}
          -translate-y-1/2
          w-[calc(100%-500px)]
          max-w-[600px]
          p-6
          bg-gradient-to-r
          from-primary/20 via-secondary/30 to-accent/20
          backdrop-blur-lg
          border border-border
          rounded-xl
          shadow-xl
          text-primary-foreground
          transition-all duration-300
          hover:scale-105
          z-10
        `}
      >
        {project.featured && (
          <>
            {/* Featured Tag */}
            <div className="absolute top-2 right-2 bg-transparent text-foreground text-xl px-3 py-1 animate-pulse z-30 ">
              🌟
            </div>

            {/* Animated Border */}
            <div className="featured-border rounded-xl">
              <svg>
                <rect x="0" y="0" width="100%" height="100%" rx="12" ry="12" />
              </svg>
            </div>
          </>
        )}
        <h3 className="text-2xl font-bold mb-2">{title}</h3>

        {/* Tech stack */}
        <p className="text-sm text-secondary-foreground mb-4 italic">
          {technologies?.join(", ")}
        </p>

        {/* Description */}
        <p className="text-accent text-base opacity-90 mb-4">{description}</p>

        {/* Buttons */}
        <div className="flex gap-4">
          <Link
            to={`/projects/${project.id}`}
            className="text-foreground hover:underline text-sm bg-primary rounded-full px-3 py-2"
          >
            View Details
          </Link>

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-primary hover:bg-popover text-primary-foreground px-4 py-2 rounded-full font-semibold transition duration-300"
            >
              View Code
            </a>
          )}

          {demo && demo.trim() !== "" && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-primary hover:bg-popover text-primary-foreground px-4 py-2 rounded-full font-semibold transition duration-300"
            >
              Live Preview
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
