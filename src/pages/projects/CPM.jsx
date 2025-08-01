import React from 'react';
import { motion } from 'framer-motion';
import { FolderKanban, Users2, ClipboardList, LayoutDashboard } from 'lucide-react';
import projects from '@/data/projects-data';
import ProjectImageCarousel from '@/components/ProjectImageCarousel';

const CPM = () => {
    const project = projects.find(p => p.id === 'cpm');


  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto  md:p-10"
    >
        <div className='pt-[50px] p-5 md:pt-[100px]'>
            <ProjectImageCarousel images={project.extraImages} />
      <h1 className="text-4xl font-bold mb-4">CPM – Project & Client Management</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        A modern and modular web app built with the MERN stack. Designed to help developers, freelancers, and agencies manage their projects, tasks, clients, and team with style and efficiency.
      </p>

      {/* Tech & Stack Overview */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white dark:bg-black/30 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-white/10">
          <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
          <ul className="text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
            <li><b>Frontend:</b> React + Redux Toolkit + TailwindCSS</li>
            <li><b>Backend:</b> Node.js + Express.js</li>
            <li><b>Database:</b> MongoDB (Mongoose)</li>
            <li><b>Icons:</b> Lucide + Heroicons</li>
            <li><b>Deployment:</b> Vercel (Frontend) & Render (Backend)</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-black/30 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-white/10">
          <h2 className="text-xl font-semibold mb-2">Core Features</h2>
          <ul className="text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
            <li>Client and Team Management</li>
            <li>Project and Task Boards</li>
            <li>Glassmorphism UI with dark mode</li>
            <li>Detail Side Panels for Entities</li>
            <li>Reusable Modals for Create/Edit</li>
          </ul>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <FeatureCard icon={<LayoutDashboard />} title="Dashboard" desc="Project overview, task stats, and user activity." />
        <FeatureCard icon={<FolderKanban />} title="Projects" desc="Manage project lifecycle and assign clients." />
        <FeatureCard icon={<ClipboardList />} title="Tasks" desc="Track tasks by status, priority, and due dates." />
        <FeatureCard icon={<Users2 />} title="Team & Clients" desc="Client CRM + internal team view with modals." />
      </div>

      {/* Screenshots Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">📸 Screenshots</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <img src={project.extraImages[0]} alt="Dashboard" className="rounded-xl shadow-md" />
          <img src={project.extraImages[1]} alt="Projects Grid" className="rounded-xl shadow-md" />
          <img src={project.extraImages[2]} alt="User Detail" className="rounded-xl shadow-md" />
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-tr from-indigo-100 to-blue-50 dark:from-white/5 dark:to-white/10 p-6 rounded-2xl border dark:border-white/10 shadow-inner">
        <h3 className="text-xl font-semibold mb-2">Why CPM?</h3>
        <p className="text-gray-700 dark:text-gray-300">
          CPM isn’t just a template — it’s a full-fledged, production-ready project management system with real UX consideration. If you’re looking to build your own SaaS or want a head-start managing internal projects, this is your foundation.
        </p>
      </div>
      </div>
    </motion.div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white dark:bg-black/30 backdrop-blur-md rounded-xl p-4 shadow-md border dark:border-white/10">
    <div className="text-indigo-600 dark:text-indigo-400 mb-2">{icon}</div>
    <h4 className="font-semibold text-lg">{title}</h4>
    <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
  </div>
);

export default CPM;
