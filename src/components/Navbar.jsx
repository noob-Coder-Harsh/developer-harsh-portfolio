import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-80 backdrop-blur-md z-50 shadow-md">
      <div className="w-full p-6 flex justify-between items-center text-white">
        <div className="text-xl font-bold">
          <Link to="/">Harsh.dev</Link>
        </div>
        <ul className="hidden md:flex space-x-6 font-medium">
          <li>
            <Link to="/" className="hover:text-cyan-400">Home</Link>
          </li>
          <li>
            {isHome ? (
              <a href="#projects" className="hover:text-cyan-400">Projects</a>
            ) : (
              <Link to="/projects" className="hover:text-cyan-400">Projects</Link>
            )}
          </li>
          <li>
            <Link to="/about" className="hover:text-cyan-400">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-cyan-400">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
