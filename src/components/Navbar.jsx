import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Optional: icons

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  // 🌙 Theme handling
  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.theme = isDark ? "dark" : "light";
  };

  // 🧭 Smooth scroll
  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    setMenuOpen(false); // close on mobile
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-opacity-80 backdrop-blur-md shadow-md text-foreground">
      <div className="flex items-center justify-between px-6 py-4">
        <NavLink to="/" className="text-xl font-bold">
          Harsh.dev
        </NavLink>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 font-medium">{renderLinks()}</ul>

        <div className="flex items-center gap-4">

          {/* Hamburger on small screens */}
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
