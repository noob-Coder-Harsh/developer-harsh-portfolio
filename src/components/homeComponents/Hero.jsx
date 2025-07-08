import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Animation */}
      <BackgroundGradientAnimation />

      {/* Foreground Text */}
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          Hi, I’m Harsh
          <div>
        
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#022038] via-[#05d7f3] to-[#d111a7] font-extrabold text-3xl md:text-5xl drop-shadow-2xl">
          Flutter & MERN Developer
        </h2>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Hero;
