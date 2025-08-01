import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import projects from "@/data/projects-data";
import ProjectImageCarousel from "@/components/ProjectImageCarousel";

const EduTechShowcase = () => {
  const project = projects.find(p => p.id === "edutech");
  const screenshots = [project.extraImages[0], project.extraImages[1]];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto md:p-10"
    >
      <div className="pt-[50px] p-5 md:pt-[100px]">
        {/* Carousel */}
        <ProjectImageCarousel images={project.extraImages} />

        {/* Title & Description */}
        <h1 className="text-4xl font-bold mb-4">
          🎓 EduVerse – Your Gateway to Smart Learning
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          EduVerse is a modern EduTech platform built to deliver intuitive, flexible, and engaging digital learning experiences. The landing page is live and offers a polished preview of what's coming — including courses, live classes, dashboards, and certifications.
        </p>

        {/* Tech & Highlights */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <InfoCard title="🛠 Tech Stack">
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li>Next.js (Frontend)</li>
              <li>Tailwind CSS</li>
              <li>Firebase Auth & Firestore (Planned)</li>
              <li>Google Analytics</li>
              <li>Figma (Design)</li>
              <li>Vercel (Hosting & CDN)</li>
            </ul>
          </InfoCard>

          <InfoCard title="🌟 Key Highlights">
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li>🔥 Bold, responsive landing page with CTAs</li>
              <li>⚡ Blazing-fast performance with Next.js</li>
              <li>🔍 SEO-ready structure and OpenGraph metadata</li>
              <li>🎯 Animated sections marked as “Coming Soon”</li>
              <li>📱 Fully mobile-optimized with Tailwind</li>
            </ul>
          </InfoCard>
        </div>

        {/* Vision */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">💡 Vision</h2>
          <blockquote className="italic border-l-4 border-blue-500 pl-4 text-gray-700 dark:text-gray-300 mb-2">
            “Empowering learning through technology that adapts to how people grow.”
          </blockquote>
          <p className="text-gray-700 dark:text-gray-300">
            EduVerse aims to be more than just another course site — it's a complete learning ecosystem with instructor tools, real-time classes, gamified learning, and peer collaboration.
          </p>
        </div>

        {/* Upcoming Modules */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">🔧 Upcoming Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-800 dark:text-gray-300">
            <div>✔️ Authentication – Google & Email with Firebase</div>
            <div>✔️ Personalized Dashboard – Track course progress</div>
            <div>✔️ Course Player – Video modules, transcripts</div>
            <div>✔️ Admin Panel – Manage instructors & content</div>
            <div>✔️ Interactive Quizzes – MCQs, feedback</div>
            <div>✔️ Gamification – Badges, streaks, points</div>
            <div>✔️ Live Classes – Zoom/WebRTC integration</div>
            <div>✔️ Certificate Generator – Blockchain-verified</div>
          </div>
        </div>

        {/* Screenshots */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">📸 Screenshots</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {screenshots.map((img, i) => (
              <img key={i} src={img} alt={`Screenshot ${i + 1}`} className="rounded-xl shadow-md" />
            ))}
          </div>
        </div>

        {/* Role Card */}
        <div className="bg-gradient-to-tr from-indigo-100 to-blue-50 dark:from-white/5 dark:to-white/10 p-6 rounded-2xl border dark:border-white/10 shadow-inner mb-10">
          <h3 className="text-xl font-semibold mb-2">🤝 Role & Responsibilities</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>👨‍💻 Solo Developer & UI/UX Designer</li>
            <li>🎨 Designed wireframes and UI in Figma</li>
            <li>💻 Developed landing page using Next.js + Tailwind</li>
            <li>⚙️ Setup metadata and responsive design</li>
            <li>📈 Built with SEO and performance as top priorities</li>
          </ul>
        </div>

        {/* Live Link CTA */}
        <div className="text-center">
          <a
            href="https://eduverse-demo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 mt-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            <ExternalLink className="w-4 h-4" />
            Visit Live Landing Page
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// Reusable InfoCard
const InfoCard = ({ title, children }) => (
  <div className="bg-white dark:bg-black/30 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-white/10">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    {children}
  </div>
);

export default EduTechShowcase;
