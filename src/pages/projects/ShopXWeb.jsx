import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, FileText, LayoutDashboard, BarChart2, UserCheck, CheckCircle } from "lucide-react";
import projects from "@/data/projects-data";
import ProjectImageCarousel from "@/components/ProjectImageCarousel";

const ShopXWeb = () => {
  const project = projects.find((p) => p.id === "shopxweb");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto md:p-10"
    >
      <div className="pt-[50px] p-5 md:pt-[100px]">
        <ProjectImageCarousel images={project.extraImages} />

        <h1 className="text-4xl font-bold mb-4">
          🛒 ShopX – Flutter Web E-Commerce App
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          A minimalist and scalable Flutter Web E-Commerce solution with a
          modern UI, seamless admin panel, and PDF invoice system. Designed for
          performance and built with Firebase & GoRouter.
        </p>

        {/* Tech & Features Overview */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <GlassCard title="🛠️ Tech Stack">
            <li>Flutter Web (Material 3 + Null Safety)</li>
            <li>Firebase Auth & Firestore</li>
            <li>GoRouter for routing</li>
            <li>State Management: Provider / Riverpod</li>
            <li>PDF & invoice: `pdf` + `printing` packages</li>
            <li>Charts: Syncfusion</li>
          </GlassCard>

          <GlassCard title="🎯 Core Features">
            <li>Minimal modern UI (Customer Side)</li>
            <li>Advanced filtering, search, and cart</li>
            <li>Admin dashboard with analytics</li>
            <li>Product + inventory management</li>
            <li>Role-based auth for admins</li>
            <li>Order tracking + PDF invoices</li>
          </GlassCard>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          <FeatureCard
            icon={<ShoppingCart />}
            title="Shopping Experience"
            desc="Clean and minimal interface with responsive design."
          />
          <FeatureCard
            icon={<UserCheck />}
            title="Firebase Auth"
            desc="Secure signup/login with Google & Email."
          />
          <FeatureCard
            icon={<LayoutDashboard />}
            title="Admin Dashboard"
            desc="Charts, insights & order control at a glance."
          />
          <FeatureCard
            icon={<BarChart2 />}
            title="Analytics"
            desc="Track revenue, returns, and sales patterns."
          />
          <FeatureCard
            icon={<CheckCircle />}
            title="Order Tracking"
            desc="Track orders from placed to shipped & delivered."
          />
          <FeatureCard
            icon={<FileText />}
            title="PDF Invoice"
            desc="Downloadable PDF invoice for every order."
          />
        </div>

        {/* Screenshots */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">📸 Screenshots</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.extraImages.slice(0, 6).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Screenshot ${index + 1}`}
                className="rounded-xl shadow-md"
              />
            ))}
          </div>
        </div>

        {/* Included */}
        <GlassCard title="📦 Included">
          <li>Full Flutter Web Source (Customer + Admin)</li>
          <li>Firestore Rules & Structure Guide</li>
          <li>Offline HTML Documentation</li>
          <li>Assets, Fonts & Integration Notes</li>
        </GlassCard>

        {/* Notes */}
        <GlassCard title="📣 Notes">
          <li>No Apple Sign-In (web limitation)</li>
          <li>Payment gateway placeholder (ready for Stripe)</li>
          <li>Dark/light theme toggle supported</li>
        </GlassCard>

        {/* Final Summary */}
        <div className="bg-gradient-to-tr from-indigo-100 to-blue-50 dark:from-white/5 dark:to-white/10 p-6 rounded-2xl border dark:border-white/10 shadow-inner mt-10">
          <h3 className="text-xl font-semibold mb-2">Why ShopX?</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Whether you're building an MVP, launching your store, or want a
            CodeCanyon-ready Flutter product, ShopX is your base. Clean code,
            flexible design, and real-world features—no fluff.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const GlassCard = ({ title, children }) => (
  <div className="bg-white dark:bg-black/30 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-white/10">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <ul className="text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
      {children}
    </ul>
  </div>
);

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white dark:bg-black/30 backdrop-blur-md rounded-xl p-4 shadow-md border dark:border-white/10">
    <div className="text-indigo-600 dark:text-indigo-400 mb-2">{icon}</div>
    <h4 className="font-semibold text-lg">{title}</h4>
    <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
  </div>
);

export default ShopXWeb;
