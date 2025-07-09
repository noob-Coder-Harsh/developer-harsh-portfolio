// src/data/projects.js
import heroImage from '../assets/images/hero.jpg';
import ecomImage3 from '../assets/project_files/ecom/product.png'
import ecomImage1 from '../assets/project_files/ecom/mobile_grid1.png'
import ecomImage2 from '../assets/project_files/ecom/mobile_grid2.png'
import ecomImage from '../assets/project_files/ecom/shopx banner.png'


const projects = [
  {
    id: 1,
    title: "My Portfolio Website",
    description:
      "A sleek portfolio website to showcase my work, built with React and Tailwind CSS.",
    image:heroImage,
    technologies: ["React", "Tailwind CSS"],
    github: "",
    demo: "",
    date: "2025-05-01",
    featured: false,
  },
  {
    id: 2,
    title: "E-commerce App",
    description:
      "A full-stack e-commerce application with product listing, cart, and payment gateway integration.",
    image: ecomImage,
    technologies: ["Node.js", "Express", "MongoDB", "React"],
    github: "",
    demo: "",
    date: "2025-05-01",
    featured: true,
    extraImages: [ecomImage1,ecomImage2,ecomImage3],
  },
  {
    id: 3,
    title: "Health Tracker App",
    description:
      "A mobile app built with Flutter to track health metrics, reminders, and analytics.",
    image: heroImage,
    technologies: ["Flutter", "Firebase"],
    github: "",
    demo: "",
    date: "2025-05-01",
    featured: true,
  },
];

export default projects;
