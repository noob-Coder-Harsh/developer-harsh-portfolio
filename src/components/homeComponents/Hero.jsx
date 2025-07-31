import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import Profile from "../../assets/profile.png";
import Grain from "../../assets/grain.jpg";
import DarkVeil from "@/backgrounds/DarkVeil/DarkVeil";
import { useNavigate } from "react-router-dom";
import { scrollToSection } from "@/utils/utilityFunctions";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-4 md:px-20 pt-20 pb-10 gap-y-12 md:gap-x-10">
  {/* Dark Veil Background */}
  <div className="absolute inset-0 z-0">
    <DarkVeil warpAmount={2.5} speed={1} />
  </div>

  {/* Left Text */}
  <div className="relative z-10 flex-1 text-center md:text-left">
    <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-4">
      Hi, I’m <span className="text-gradient bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">Harsh</span>
    </h1>
    <p className="text-gray-300 text-lg md:text-xl mb-6 max-w-2xl mx-auto md:mx-0">
      A passionate <span className="font-semibold text-white">Flutter Developer</span> and 
      <span className="font-semibold text-white"> Full-Stack Engineer</span> crafting sleek web and mobile experiences. 
      From building scalable dashboards to pixel-perfect UIs, I bridge design and logic with code. Whether it's startups or SaaS, 
      I turn ideas into powerful digital products.
    </p>
    <button
      onClick={() => scrollToSection("contact")}
      className="px-6 py-3 rounded-full bg-gradient-to-l from-blue-500 to-pink-500 text-white font-semibold transition-all duration-300 ease-in-out hover:from-yellow-500 hover:to-pink-500 hover:scale-105 cursor-pointer shadow-md hover:shadow-xl"
    >
      Explore My Work
    </button>
  </div>

  {/* Right Card */}
  <div className="relative z-10 flex-1 flex justify-center md:pr-7 md:justify-end">
    <div className="w-full max-w-xs scale-95 md:scale-100">
      <ProfileCard
        name=" "
        title="Hover Here"
        handle="harshkushwaha"
        status="Founder"
        contactText="See my work"
        grainUrl={Grain}
        avatarUrl={Profile}
        showUserInfo={true}
        showIconPattern={true}
        enableTilt={true}
        onContactClick={() => scrollToSection("projects")}
      />
    </div>
  </div>
</div>

  );
};

export default Hero;
