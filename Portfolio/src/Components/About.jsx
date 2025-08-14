import React from "react";
import { ImageFlipper } from "./ImageFlipper";

export const About = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-black to-blue-950 text-white px-4 sm:px-8 lg:px-20 py-8 lg:py-12">
      <div className="flex justify-center md:justify-start w-full md:w-1/2 mb-8 md:mb-0">
        <div className="max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] w-full">
          <ImageFlipper />
        </div>
      </div>

      <div className="w-full md:w-1/2 text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
          About Me
        </h1>

        <p className="text-base sm:text-lg leading-relaxed">
          Hello, I'm{" "}
          <span className="text-blue-400 font-semibold">Mayank Rouniyar</span>,
          a passionate 3rd year student in Computer Science with a strong
          interest in
          <span className="text-blue-400"> Web Development </span> and
          <span className="text-blue-400"> Software Engineering</span>.
        </p>

        <p className="mt-4 text-base sm:text-lg leading-relaxed">
          I’m a Computer Science undergraduate passionate about crafting modern,
          responsive web applications and solving complex problems. My toolkit
          includes
          <span className="text-blue-400"> React.js</span>,{" "}
          <span className="text-blue-400"> Tailwind CSS</span>,
          <span className="text-blue-400"> Node.js</span>, and{" "}
          <span className="text-blue-400"> MongoDB</span>. I have a strong
          foundation in{" "}
          <span className="text-blue-400"> Data Structures & Algorithms</span>
          and enjoy{" "}
          <span className="text-blue-400"> competitive programming</span>,
          participating in contests on CodeChef and LeetCode. Beyond building
          projects like a full-stack{" "}
          <span className="text-blue-400"> JEE Mock Test App </span>
          and a <span className="text-blue-400"> Portfolio Website</span>, I’m
          driven by curiosity, continuous learning, and the thrill of turning
          ideas into impactful digital solutions.
        </p>

        <p className="mt-4 text-base sm:text-lg leading-relaxed">
          I am currently looking for a{" "}
          <span className="text-blue-400"> Web or Software Development</span>{" "}
          internship where I can learn from experienced engineers and contribute
          to real-world projects.
        </p>
      </div>
    </div>
  );
};
