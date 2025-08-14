import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaReact, FaGithub, FaGitAlt, FaNodeJs, FaDatabase } from 'react-icons/fa'
import { SiC, SiCplusplus, SiTailwindcss, SiExpress, SiMongodb, SiPostman, SiJsonwebtokens } from 'react-icons/si'

export const Skill = () => {
  return (
    <div className="py-10 px-4 text-white">
      <h1 className="text-3xl font-bold text-center mb-8">My Skills</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 justify-items-center text-center">
        {/* Existing Skills */}
        <div>
          <FaHtml5 className="text-orange-600 text-6xl hover:scale-110 transition" />
          <p className="mt-2 text-lg">HTML</p>
        </div>
        <div>
          <FaCss3Alt className="text-blue-600 text-6xl hover:scale-110 transition" />
          <p className="mt-2 text-lg">CSS</p>
        </div>
        <div>
          <FaJs className="text-yellow-400 text-6xl hover:scale-110 transition" />
          <p className="mt-2 text-lg">JavaScript</p>
        </div>
        <div>
          <FaReact className="text-cyan-400 text-6xl hover:scale-110 transition" />
          <p className="mt-2 text-lg">React.js</p>
        </div>
        <div>
          <SiTailwindcss className="text-sky-400 text-6xl hover:scale-110 transition" />
          <p className="mt-2 text-lg">Tailwind</p>
        </div>
        <div>
          <FaGitAlt className="text-orange-400 text-6xl hover:scale-110 transition" />
          <p className="mt-2 text-lg">Git</p>
        </div>
        <div>
          <FaGithub className="text-gray-700 text-6xl hover:scale-110 transition" />
          <p className="mt-2 text-lg">GitHub</p>
        </div>
        <div>
          <SiC className="text-white text-6xl hover:scale-110 transition" />
          <p className="mt-2 text-lg">C</p>
        </div>
        <div>
          <SiCplusplus className="text-blue-400 text-6xl hover:scale-110 transition" />
          <p className="mt-2 text-lg">C++</p>
        </div>
        <div>
          <FaJava className="text-red-600 text-6xl hover:scale-110 transition" />
          <p className="mt-2 text-lg">Java</p>
        </div>

        {/* New Skills */}
        <div>
          <FaNodeJs className="text-green-600 text-6xl hover:scale-110 transition" />
          <p className="mt-2 text-lg">Node.js</p>
        </div>
        <div>
          <SiExpress className="text-gray-300 text-6xl hover:scale-110 transition" />
          <p className="mt-2 text-lg">Express.js</p>
        </div>
        <div>
          <SiMongodb className="text-green-500 text-6xl hover:scale-110 transition" />
          <p className="mt-2 text-lg">MongoDB</p>
        </div>
        <div>
          <FaDatabase className="text-indigo-500 text-6xl hover:scale-110 transition" />
          <p className="mt-2 text-lg">SQL</p>
        </div>
        <div>
          <SiPostman className="text-orange-500 text-6xl hover:scale-110 transition" />
          <p className="mt-2 text-lg">Postman</p>
        </div>

        {/* JWT centered */}
        <div className="md:col-span-5 flex justify-center">
          <div>
            <SiJsonwebtokens className="text-yellow-500 text-6xl hover:scale-110 transition" />
            <p className="mt-2 text-lg">JWT</p>
          </div>
        </div>
      </div>

      {/* Coursework */}
      <div className="w-full max-w-3xl mx-auto mt-12 p-6 rounded-xl bg-gradient-to-r shadow-lg">
        <h1 className="text-center text-4xl font-extrabold text-white mb-6">Coursework</h1>
        <ul className="list-inside text-center space-y-4 text-lg sm:text-2xl text-white font-medium">
          <li><span className="hover:text-blue-700 transition">Data Structures and Algorithm (DSA)</span></li>
          <li><span className="hover:text-blue-700 transition">Object Oriented Programming (OOPs)</span></li>
          <li><span className="hover:text-blue-700 transition">Database Management System (DBMS)</span></li>
          <li><span className="hover:text-blue-700 transition">Machine Learning</span></li>
        </ul>
      </div>
    </div>
  )
}
