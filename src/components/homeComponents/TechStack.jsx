import React, { useState } from "react";
import reactLogo from "../../assets/tech-svgs/react.svg";
import flutterLogo from "../../assets/tech-svgs/flutter2.svg";
import nodeLogo from "../../assets/tech-svgs/nodejs2.svg";
import firebaseLogo from "../../assets/tech-svgs/firebase.svg";

const techItems = [
  { name: "React", logo: reactLogo, color: "#61DAFB" },
  { name: "Flutter", logo: flutterLogo, color: "#02569B" },
  { name: "Node.js", logo: nodeLogo, color: "#8CC84B" },
  { name: "Firebase", logo: firebaseLogo, color: "#FFCA28" },
];

const TechStack = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="w-full py-16 px-6 md:px-20 flex justify-center bg-gradient-to-b from-background/50 via-background/90 to-primary/20">
  <div className="w-full max-w-5xl rounded-2xl shadow-xl p-6 md:p-10 border border-border bg-gradient-to-r from-primary/20 via-secondary/30 to-accent/20 backdrop-blur-lg">
    {/* Responsive Heading */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold mb-8 drop-shadow-sm text-primary glow-text">
      My Tech Stack
    </h2>

    {/* Horizontal Scroll Row */}
    <div className="flex overflow-x-auto md:overflow-visible max-w[1280px] flex-nowrap md:flex-wrap justify-center md:justify-center gap-x-4 md:gap-6 pb-2">
      {techItems.map((tech, index) => {
        const isHovered = hovered === index;
        return (
          <div
            key={index}
            className={`min-w-[54px] h-14 sm:min-w-[80px] sm:h-18 md:w-24 md:h-24 rounded-xl flex items-center justify-center cursor-pointer 
              transition-all duration-300 hover:scale-110 shadow-sm backdrop-blur-sm border border-border
              ${isHovered ? 'shadow-[0_0_12px_var(--ring)]' : ''}`}
            style={{
              backgroundColor: isHovered ? tech.color : 'rgba(255, 255, 255, 0.05)',
            }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {isHovered ? (
              <span className="text-black text-xs sm:text-sm font-bold drop-shadow-md">
                {tech.name}
              </span>
            ) : (
              <img
                src={tech.logo}
                alt={`${tech.name} Logo`}
                className="w-4 h-4 sm:w-8 sm:h-8 md:w-12 md:h-12"
              />
            )}
          </div>
        );
      })}
    </div>
  </div>
</div>

  );
};

export default TechStack;
