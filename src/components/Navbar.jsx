import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 🌙 Theme setup
  useEffect(() => {
    const userTheme = localStorage.theme || "light";
    if (userTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  };

  // ⬆️ Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  // ⬇️ Smooth scroll to section
  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    setMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const commonLinkClass = "hover:text-primary transition";

  const renderLinks = () => (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "underline text-primary" : commonLinkClass
        }
        onClick={() => setMenuOpen(false)}
      >
        Home
      </NavLink>

      {isHome ? (
        <a
          href="#projects"
          onClick={(e) => handleSmoothScroll(e, "projects")}
          className={commonLinkClass}
        >
          Projects
        </a>
      ) : (
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "underline text-primary" : commonLinkClass
          }
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </NavLink>
      )}

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "underline text-primary" : commonLinkClass
        }
        onClick={() => setMenuOpen(false)}
      >
        About
      </NavLink>

      {isHome ? (
        <a
          href="#contact"
          onClick={(e) => handleSmoothScroll(e, "contact")}
          className={commonLinkClass}
        >
          Contact
        </a>
      ) : (
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "underline text-primary" : commonLinkClass
          }
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </NavLink>
      )}
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-opacity-80 bg-white/5 backdrop-blur-md shadow-md text-foreground">
      <div className="flex items-center justify-between px-6 py-4">
        <button
          onClick={scrollToTop}
          className="text-xl font-bold hover:text-primary transition"
        >
          Harsh.dev
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 font-medium">{renderLinks()}</ul>

        {/* Right-side actions */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          {/* <button onClick={toggleTheme} className="hover:text-primary transition">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button> */}

          {/* Hamburger Menu */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 animate-fade-in-down">
          {renderLinks()}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
