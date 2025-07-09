import React from "react";
import reactIcon from "../assets/tech-svgs/react.svg";
import flutterIcon from "../assets/tech-svgs/flutter.svg";
import jsIcon from "../assets/tech-svgs/js.svg";
import nodeIcon from "../assets/tech-svgs/nodejs.svg";

const skills = [
  { name: "React", icon: reactIcon },
  { name: "Flutter", icon: flutterIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "Node.js", icon: nodeIcon },
  // add more as you wish
];

const experiences = [
  {
    year: "2025-2027",
    title: "MCA Student",
    description: "Pursuing MCA from Lingayas Vidyapeeth University, expanding my software engineering skills.",
  },
  {
    year: "2024- Till Now",
    title: "Flutter Developer",
    description: "Worked on multiple cross-platform apps, building UIs, Firebase integrations, and handling production deployments.",
  },
  {
    year: "2021-2024",
    title: "BCA Student",
    description: "Completed BCA, started building projects in Flutter, MERN stack, and exploring web technologies.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen pt-28 pb-12 bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-4">
        {/* HEADER */}
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
          About Me
        </h1>

        {/* BIO SECTION */}
        <div className="mb-12">
          <p className="text-foreground text-lg mb-4">
            Hey there! I’m <span className="text-accent font-semibold">Harsh</span>, a software developer from Delhi, India. Currently pursuing my MCA while working professionally as a Flutter Developer. I’m passionate about building beautiful, performant apps and learning new tech stacks to level up my skills.
          </p>
          <p className="text-foreground text-lg mb-4">
            My ultimate goal? To create impactful software solutions.
          </p>
          <p className="text-foreground text-lg">
            When I’m not coding, you’ll find me exploring digital business ideas, thinking up new app concepts.
          </p>
        </div>

        {/* SKILLS SECTION */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">
            Skills & Tech Stack
          </h2>
          <div className="flex flex-wrap gap-6">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="flex flex-col items-center w-24 hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 h-10 mb-2"
                />
                <span className="text-sm text-foreground">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* EXPERIENCE SECTION */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">
            My Journey
          </h2>
          <div className="border-l border-secondary pl-6">
            {experiences.map((exp, i) => (
              <div key={i} className="mb-6 relative">
                <div className="absolute -left-3 top-1 w-3 h-3 rounded-full bg-secondary"></div>
                <h3 className="text-lg font-semibold text-foreground">
                  {exp.year} - {exp.title}
                </h3>
                <p className="text-foreground">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PERSONAL FACTS */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">
            Fun Facts
          </h2>
          <ul className="list-disc list-inside text-foreground space-y-2">
            <li>I believe in karma and keep my ego as my superpower (in a good way!).</li>
            <li>Love experimenting with new business ideas, from apps to digital services.</li>
          </ul>
        </div>

        {/* RESUME BUTTON */}
        <div>
          <a
            href="/resume.pdf" // Replace with your actual resume URL
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-secondary text-foreground px-6 py-3 rounded-full font-semibold hover:bg-accent transition-colors duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
