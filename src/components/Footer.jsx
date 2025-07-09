import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      onMouseMove={(e) => {
        const glow = document.getElementById("footer-glow");
        const rect = e.currentTarget.getBoundingClientRect();
        glow.style.background = `radial-gradient(circle at ${
          e.clientX - rect.left
        }px ${
          e.clientY - rect.top
        }px, rgba(0, 255, 255, 0.2), transparent 80%)`;
      }}
      className="relative bg-background text-gray-400"
    >
      <div
        id="footer-glow"
        className="pointer-events-none absolute inset-0 transition-all duration-300"
      ></div>
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl text-white font-bold mb-4">About Me</h3>
          <p className="text-gray-400 text-sm">
            I’m Harsh, a passionate Flutter & MERN Developer crafting apps and
            web experiences with real-world impact.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl text-white font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-cyan-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-cyan-400 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-cyan-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl text-white font-bold mb-4">Follow Me</h3>
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Harsh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
