import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  function ThemeToggleButton() {
  useEffect(() => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);
}

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.theme = isDark ? 'dark' : 'light';
  };

  return (
    <nav className="fixed top-0 w-full bg-opacity-80 backdrop-blur-md z-50 shadow-md hover:glow-text">
      <div className="w-full p-6 flex justify-between items-center text-foreground">
        <div className="text-xl font-bold">
          <Link to="/">Harsh.dev</Link>
        </div>
        <ul className="hidden md:flex space-x-6 font-medium">
          <li>
            <Link to="/" className="hover:text-primary">Home</Link>
          </li>
          <li>
            {isHome ? (
              <a href="#projects" className="hover:text-primary">Projects</a>
            ) : (
              <Link to="/projects" className="hover:text-primary">Projects</Link>
            )}
          </li>
          <li>
            <Link to="/about" className="hover:text-primary">About</Link>
          </li>
          <li>
            {isHome ? (
              <a href='#contact' className='hover:text-primary'>Contact</a>
            ) :(
              <Link to="/contact" className="hover:text-primary">Contact</Link>
            )}
            
          </li>
        </ul>
        <div>
          <button onClick={toggleTheme} className="px-3 py-1 rounded bg-primary text-primary-foreground">
      Toggle Theme
    </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
