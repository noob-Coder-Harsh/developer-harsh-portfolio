import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projects-data";
import { techIcons } from "../data/techIcons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return (
      <div className="text-center mt-20 text-red-500">
        Project not found.
        <button onClick={() => navigate(-1)} className="block mt-4 underline text-cyan-400">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 bg-background text-white max-w-5xl mx-auto">
      <button onClick={() => navigate(-1)} className="mb-6 text-cyan-400 underline">
        ← Back to Projects
      </button>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 text-primary">{project.title}</h1>

      {/* Date & Tech */}
      <div className="mb-6 text-gray-400 text-sm flex flex-wrap gap-4">
        <span>Date: {new Date(project.date).toLocaleDateString()}</span>
        <span className="flex gap-2 items-center">
          Tech:
          {project.technologies.map((tech, i) =>
            techIcons[tech] ? (
              <img key={i} src={techIcons[tech]} alt={tech} className="w-5 h-5" />
            ) : (
              <span key={i} className="bg-gray-700 text-white px-2 py-1 text-xs rounded-full">
                {tech}
              </span>
            )
          )}
        </span>
      </div>

      {/* Image Carousel */}
      <Carousel
        showThumbs={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        interval={5000}
        className="rounded-xl overflow-hidden shadow-lg mb-8"
      >
        {[project.image, ...(project.extraImages || [])].map((img, i) => (
          <div key={i}>
            <img src={img} alt={`Slide ${i + 1}`} className="object-cover max-h-[500px] w-full" />
          </div>
        ))}
      </Carousel>

      {/* Description */}
      <p className="text-lg text-secondary-foreground mb-6">{project.description}</p>

      {/* Links */}
      <div className="flex gap-4 mt-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary"
          >
            View Code
          </a>
        )}
        {project.demo && project.demo.trim() !== "" && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="bg-accent text-black px-4 py-2 rounded-full hover:bg-yellow-300"
          >
            Live Preview
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
