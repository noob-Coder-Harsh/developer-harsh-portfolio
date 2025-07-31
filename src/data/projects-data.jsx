// src/data/projects.js
import heroImage from "../assets/images/hero.jpg";
import ecomImage3 from "../assets/project_files/ecom/product.png";
import ecomImage1 from "../assets/project_files/ecom/mobile_grid1.png";
import ecomImage2 from "../assets/project_files/ecom/mobile_grid2.png";
import ecomImage from "../assets/project_files/ecom/shopx banner.png";
import shopx from "../assets/shopx/shopx1.png";
import cpmImage from "../assets/cpm/cpm-dashboard.png";
import edutechImage from "../assets/edutech/edutech_home.png"

const projects = [
  {
    id: 1,
    title: "ShopX – Mobile-First Flutter E-Commerce App",
    description:
      "A sleek Ecommerce App to showcase my work, built with Flutter and Firebase.",
    image: shopx,
    technologies: ["Flutter"],
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
    featured: false,
    extraImages: [ecomImage1, ecomImage2, ecomImage3],
  },
  {
    id: 3,
    title: "Project Management App",
    description:
      "A robust MERN stack application for managing projects, tasks, and team collaboration. Features include task assignment, user roles, status tracking, and an intuitive dashboard.",
    image: cpmImage,
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    github: "",
    demo: "",
    date: "2025-06-15",
    featured: true,
    extraImages: [],
  },
  {
    id: 4,
    title: "EduTech Landing Page",
    description:
      "A responsive and accessible landing page for an EduTech platform, built with HTML and CSS. Clean structure, modern design, and optimized for fast performance. Upcoming sections are marked as 'Coming Soon'.",
    image: edutechImage,
    technologies: ["HTML", "CSS"],
    github: "",
    demo: "",
    date: "2025-07-01",
    featured: true,
    extraImages: [],
  },
];

export default projects;
