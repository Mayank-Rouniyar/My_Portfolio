import React from "react";
import { ImageFlipper } from "./ImageFlipper";
export const About = () => {
  return (
    <div className="w-screen h-[calc(100vh-64px)] flex flex-col md:flex-row items-center justify-between px-20 pt-0 pb-6 bg-gradient-to-r from-black to-blue-950 text-white">
      <div className="hidden md:flex flex-col items-center gap-6 w-full md:w-1/2">
        <ImageFlipper />
      </div>

      <div className="mt-4 md:mt-0 w-full md:w-1/2 text-left px-4">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">About Me</h1>
        <p className="text-lg leading-relaxed">
          Hello, I'm{" "}
          <span className="text-blue-400 font-semibold">Mayank Rouniyar</span>,
          a passionate 3rd year Student  in Computer Science field with a strong
          interest in
          <span className="text-blue-400"> Web Development </span> and
          <span className="text-blue-400"> Software Engineering</span>.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          I’m a Computer Science undergraduate passionate about crafting modern,
          responsive web applications and solving complex problems. My toolkit
          includes
          <span className="text-blue-400">React.js</span>,{" "}
          <span className="text-blue-400">Tailwind CSS</span>,
          <span className="text-blue-400">Node.js</span>, and{" "}
          <span className="text-blue-400">MongoDB</span>. I have a strong
          foundation in{" "}
          <span className="text-blue-400">Data Structures & Algorithms</span>
          and enjoy{" "}
          <span className="text-blue-400">competitive programming</span>, often
          participating in coding contests on platforms like CodeChef and
          LeetCode. Beyond building projects like a full-stack{" "}
          <span className="text-blue-400">JEE Mock Test App </span>
          and a <span className="text-blue-400"> Portfolio Website</span>, I’m
          driven by curiosity, continuous learning, and the thrill of turning
          ideas into impactful digital solutions.
        </p>

        <p className="mt-4 text-lg leading-relaxed">
          I am Currently looking for a{" "}
          <span className="text-blue-400">Web or Software development</span>{" "}
          Internship where I can learn from experienced and skilled Enginners
          and contribute to real-world projects.
        </p>
      </div>
    </div>
  );
};
