import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";
import CPM from "@/pages/projects/CPM";
import EduTechShowcase from "@/pages/projects/EduTech";
import ShopXMobileEcommerce from "@/pages/projects/ShopX";
import ShopXWeb from "@/pages/projects/ShopXWeb";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
      <Route path="/projects/cpm" element={<CPM />} />
      <Route path="/projects/edutech" element={<EduTechShowcase />} />
      <Route path="/projects/shopx" element={<ShopXMobileEcommerce />} />
      <Route path="/projects/shopxweb" element={<ShopXWeb />} />
    </Routes>
  );
};

export default AppRoutes;
