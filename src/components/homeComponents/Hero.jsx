import React from 'react';
import heroImage from '../../assets/images/hero.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background image blurred */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Hero Background"
          className="w-full h-full object-cover blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* Text Content */}
        <div className="text-white text-center md:text-left max-w-xl animate-slide-up">
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#022038ad] via-[#05d7f3] to-[#d111a7] bg-clip-text text-transparent">
            Hi, I’m Harsh 
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Flutter & MERN Developer crafting mobile + web experiences with real-world impact.
          </p>
          <a
            href="#projects"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-medium transition transform hover:scale-105 duration-300"
          >
            View My Work
          </a>
        </div>

        {/* Profile Photo */}
        <div className="mt-10 md:mt-0 md:ml-10 animate-float">
          <img
            src={heroImage}
            alt="Harsh Profile"
            className="w-100 h-100 object-cover rounded-2xl shadow-2xl border-cyan-500"
          />
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slide-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
