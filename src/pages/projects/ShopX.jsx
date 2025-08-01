import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Search,
  FileText,
  Star,
  ShoppingCart,
  Heart,
  Moon,
} from "lucide-react";
import ProjectImageCarousel from "@/components/ProjectImageCarousel";
import projects from "@/data/projects-data";

const ShopXMobileEcommerce = () => {
  const project = projects.find((p) => p.id === "shopx");

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
          📱 ShopX – Mobile-First Flutter E-Commerce App
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          A sleek, responsive, one-handed e-commerce experience built with
          Flutter. Perfect for startups, devs, or agencies aiming for a modern
          shopping UX on mobile.
        </p>

        {/* Tech + Features Summary */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <GlassCard title="🛠️ Tech Stack">
            <li>Flutter (Flex, MediaQuery layout system)</li>
            <li>Firebase – Auth, Firestore, Storage</li>
            <li>GoRouter for navigation</li>
            <li>Provider / Riverpod for state</li>
            <li>PDF generation with `pdf`, `printing`</li>
            <li>SharedPreferences / Hive for local caching</li>
          </GlassCard>

          <GlassCard title="📱 Customer-Centric Features">
            <li>One-hand UX (bottom nav, reachable UI)</li>
            <li>Smart search with highlights & history</li>
            <li>Rich product pages with attributes</li>
            <li>Persistent cart, wishlist & recent views</li>
            <li>Invoice download on checkout</li>
            <li>Dark/light mode toggle</li>
          </GlassCard>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          <FeatureCard
            icon={<Smartphone />}
            title="Mobile-First UI"
            desc="Thumb-friendly design built for modern devices."
          />
          <FeatureCard
            icon={<Search />}
            title="Smart Search"
            desc="Dedicated screen with suggestions & keyword highlights."
          />
          <FeatureCard
            icon={<ShoppingCart />}
            title="Advanced Cart"
            desc="Dynamic quantity control with upsell suggestions."
          />
          <FeatureCard
            icon={<FileText />}
            title="PDF Invoicing"
            desc="Auto-generated invoices ready for download."
          />
          <FeatureCard
            icon={<Star />}
            title="Detailed Product Pages"
            desc="Ratings, variations, return info, and more."
          />
          <FeatureCard
            icon={<Heart />}
            title="Wishlist + Recently Viewed"
            desc="Persisted with local cache across sessions."
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

        {/* What's Included */}
        <GlassCard title="📦 What’s Included">
          <li>Complete Flutter Source Code</li>
          <li>Firebase rules + Firestore structure doc</li>
          <li>Offline documentation (HTML + Markdown)</li>
          <li>ThemeConfig with light/dark mode</li>
          <li>All assets, fonts, and mock data</li>
        </GlassCard>

        {/* Bonus Highlights */}
        <GlassCard title="✨ Bonus Highlights">
          <li>Minimal dependencies – blazing fast build</li>
          <li>Customizable theme architecture</li>
          <li>Expandable to tablet & desktop views</li>
          <li>Built-in animation transitions for smoother UX</li>
        </GlassCard>

        {/* Final Words */}
        <div className="bg-gradient-to-tr from-indigo-100 to-blue-50 dark:from-white/5 dark:to-white/10 p-6 rounded-2xl border dark:border-white/10 shadow-inner mt-10">
          <h3 className="text-xl font-semibold mb-2">Why Choose ShopX?</h3>
          <p className="text-gray-700 dark:text-gray-300">
            ShopX isn’t just a template — it's a battle-ready mobile commerce
            base for developers and product founders. Whether you're launching a
            store, pitching on CodeCanyon, or prototyping a SaaS storefront,
            this app gives you a clean, scalable foundation to build upon.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const GlassCard = ({ title, children }) => (
  <div className="bg-white dark:bg-black/30 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-white/10 mb-6">
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

export default ShopXMobileEcommerce;
