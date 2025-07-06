import React, { useState } from 'react';
import reactLogo from '../../assets/tech-svgs/react.svg';
import flutterLogo from '../../assets/tech-svgs/flutter2.svg';
import nodeLogo from '../../assets/tech-svgs/nodejs2.svg';
import firebaseLogo from '../../assets/tech-svgs/firebase.svg';

const techItems = [
  { name: 'React', logo: reactLogo, color: '#61DAFB' },
  { name: 'Flutter', logo: flutterLogo, color: '#02569B' },
  { name: 'Node.js', logo: nodeLogo, color: '#8CC84B' },
  { name: 'Firebase', logo: firebaseLogo, color: '#FFCA28' },
];

const TechStack = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="w-full p-8  bg-gray-900 shadow-2xl">
      <h2 className="text-3xl text-center font-bold text-cyan-400 mb-8">
        My Tech Stack
      </h2>
      <div className="flex flex-wrap justify-center gap-7">
        {techItems.map((tech, index) => (
          <div
            key={index}
            className={`w-32 h-32 border-white rounded-xl flex items-center
              justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_white]`}
            style={{
              backgroundColor:
                hovered === index ? tech.color : '', // default dark gray
            }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {hovered === index ? (
              <span className="text-black text-lg font-bold">
                {tech.name}
              </span>
            ) : (
              <img
                src={tech.logo}
                alt={`${tech.name} Logo`}
                className="w-16 h-16"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
