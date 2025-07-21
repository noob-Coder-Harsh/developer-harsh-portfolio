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
    <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-4 md:px-20 py-10 gap-10">
      {/* Dark Veil Background */}
      <div className="absolute inset-0 z-0">
        <DarkVeil warpAmount={2.5} speed={2.5} />
      </div>

      {/* Left Text */}
      <div className="relative z-10 flex-1 text-left">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          I'm Harsh
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-6">
          Flutter Dev • Full-Stack Developer • Code Whisperer ⚡
        </p>
        <button
          onClick={() => scrollToSection("contact")}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 text-white font-semibold transition-all duration-300 ease-in-out hover:from-yellow-500 hover:to-pink-500 hover:scale-105 cursor-pointer shadow-md hover:shadow-xl"
        >
          Explore My Work
        </button>
      </div>

      {/* Right Card */}
      <div className="relative z-10 flex-1 flex justify-center">
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
  );
};

export default Hero;
