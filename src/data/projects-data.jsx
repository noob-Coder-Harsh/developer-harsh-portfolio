// src/data/projects.js

const projects = [
  {
    id: 1,
    title: "My Portfolio Website",
    description:
      "A sleek portfolio website to showcase my work, built with React and Tailwind CSS.",
    image: "/images/portfolio.png",
    technologies: ["React", "Tailwind CSS"],
    github: "https://github.com/harsh/portfolio",
    demo: "https://harsh.dev",
    date: "2025-05-01",
    featured: true,
  },
  {
    id: 2,
    title: "E-commerce App",
    description:
      "A full-stack e-commerce application with product listing, cart, and payment gateway integration.",
    image: "/images/ecommerce.png",
    technologies: ["Node.js", "Express", "MongoDB", "React"],
    github: "https://github.com/harsh/ecommerce-app",
    demo: "",
    date: "2025-05-01",
    featured: false,
  },
  {
    id: 3,
    title: "Health Tracker App",
    description:
      "A mobile app built with Flutter to track health metrics, reminders, and analytics.",
    image: "/images/health-app.png",
    technologies: ["Flutter", "Firebase"],
    github: "https://github.com/harsh/health-tracker",
    demo: "",
    date: "2025-05-01",
    featured: true,
  },
];

export default projects;
