import React from 'react'

export const Project = () => {
  return (
    <div className="text-white py-10 px-4 sm:px-6 md:px-20">
      <h1 className="text-4xl sm:text-5xl text-center font-bold mb-10">My Projects</h1>

      <ol className="list-decimal list-outside space-y-8 pl-6 sm:pl-10 marker:text-2xl sm:marker:text-3xl">
        <li className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">
            <a href="https://github.com/Mayank-Rouniyar/JeeMainMockTest" target="_blank" rel="noopener noreferrer">
              TEST APP
            </a>
          </h2>
          <ul className="list-disc list-inside text-white text-base sm:text-xl space-y-1">
            <li>Built a full-stack exam simulation app using React.js, Node.js, Express, and MongoDB.</li>
            <li>Integrated timer logic, MCQ/numerical question flow, answer tracking, and JWT-protected APIs.</li>
            <li>Designed real-time UI with auto-submit on timeout; implemented state management using React Hooks.</li>
            <li>Developed an Admin Panel with full test management capabilities, including creating, editing, deleting, publishing, and unpublishing tests.</li>
          </ul>
        </li>

        <li className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 pt-4">
            <a href="https://github.com/Mayank-Rouniyar/Todo" target="_blank" rel="noopener noreferrer">
              TODO APP
            </a>
          </h2>
          <ul className="list-disc list-inside text-white text-base sm:text-xl space-y-1">
            <li>Built a responsive Todo List using React JS, Vite, and TailwindCSS with full CRUD functionality.</li>
            <li>Implemented global state management using Context API and persisted data with local storage.</li>
            <li>Used React Hooks for dynamic updates and ensured a clean, mobile-friendly UI.</li>
          </ul>
        </li>

        <li className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 pt-4">
            <a href="https://github.com/Mayank-Rouniyar/Portfolio" target="_blank" rel="noopener noreferrer">
              PORTFOLIO WEBSITE
            </a>
          </h2>
          <ul className="list-disc list-inside text-white text-base sm:text-xl space-y-1">
            <li>Developed a fully responsive personal portfolio website using React.js and TailwindCSS showcasing skills, projects, and contact information.</li>
            <li>Implemented client-side routing using react-router-dom for smooth navigation across multiple sections (Home, About, Skills, Projects, Contact).</li>
            <li>Designed reusable components like Navbar, Footer, and content sections using component-based architecture.</li>
            <li>Utilized React Hooks (useState, useEffect) to manage component state and interaction.</li>
          </ul>
        </li>
      </ol>
    </div>
  )
}
