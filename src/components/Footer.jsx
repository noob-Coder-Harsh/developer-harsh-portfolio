import React, { useEffect, useRef } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const glowRef = useRef(null);

  // Smooth cursor glow
  useEffect(() => {
    const glow = glowRef.current;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      glow.style.left = `${mouseX}px`;
      glow.style.top = `${mouseY}px`;
    };

    const footer = document.getElementById("footer-root");
    footer.addEventListener("mousemove", handleMouseMove);

    return () => {
      footer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <footer
      id="footer-root"
      className="relative overflow-hidden bg-[#0a0a0a] text-gray-400 backdrop-blur-md border-t border-white/10"
    >
      {/* Smooth glow dot that follows cursor */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute w-10 h-40 bg-amber-300 rounded-full blur-3xl transition-all duration-300 ease-out"
        style={{ transform: "translate(-50%, -50%)" }}
      ></div>

      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 z-10 relative">
        {/* About */}
        <div>
          <h3 className="text-xl text-white font-bold mb-4">About Me</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            I’m <span className="text-cyan-400 font-medium">Harsh</span>, a
            passionate Flutter & MERN Developer building impactful web &
            mobile-first solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl text-white font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/home"
                className="hover:text-cyan-400 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="hover:text-cyan-400 transition duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-cyan-400 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl text-white font-bold mb-4">Follow Me</h3>
          <div className="flex space-x-6">
            <SocialIcon
              href="https://linkedin.com"
              icon={<FaLinkedin size={22} />}
            />
            <SocialIcon
              href="https://github.com"
              icon={<FaGithub size={22} />}
            />
            <SocialIcon
              href="https://twitter.com"
              icon={<FaTwitter size={22} />}
            />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-4 text-gray-500 text-sm backdrop-blur-sm bg-black/30 z-10 relative">
        &copy; {new Date().getFullYear()} Harsh. All rights reserved.
      </div>
    </footer>
  );
};

// Social icon hover effect
const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="text-gray-400 hover:text-cyan-400 transition-transform duration-300 hover:-translate-y-1"
  >
    {icon}
  </a>
);

export default Footer;
