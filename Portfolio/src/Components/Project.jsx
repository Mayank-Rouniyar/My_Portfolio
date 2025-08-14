import React from 'react'
export const Project=()=>{
    return(
        <div className="text-white">
            <h1 className="text-5xl text-center justify-center flex">My Projects</h1>
            <div className="pl-20">
             <ol className="list-decimal list-inside">
                <li className="text-3xl font-bold text-blue-700"><a href="https://github.com/Mayank-Rouniyar/JeeMainMockTest"
                target="_blank"
                rel="noopener noreferrer">TEST APP</a>
                <ul className="list-disc list-outside text-white text-xl">
                    <li>Built a full-stack exam simulation app using React.js, Node.js, Express, and MongoDB.</li>
                    <li>Integrated timer logic, MCQ/numerical question flow, answer tracking, and JWT-protected APIs.</li>
                    <li>Designed real-time UI with auto-submit on timeout; implemented state management using React Hooks.</li>
                    <li>Developed an Admin Panel with full test management capabilities, including creating, editing, deleting, publishing, and unpublishing tests.</li>
                </ul>
                </li>
                <li className="text-3xl font-bold text-blue-700 pt-8"><a href="https://github.com/Mayank-Rouniyar/Todo"
                target="_blank"
                rel="noopener noreferrer">TODO APP</a>
                <ul className="list-disc list-outside text-white text-xl">
                    <li>Build a responsive Todo List using React JS,Vite and taiwindcss with full CRUD functionality.</li>
                    <li>Implemented global state management using Context API and persisted data with local storage.</li>
                    <li>Used React Hooks for dynamic update and ensured a clean,mobile friendly UI.</li>
                </ul>
                </li>
                <li className="text-3xl font-bold text-blue-700 pt-8"><a href="https://github.com/Mayank-Rouniyar/Portfolio"
                target="_blank"
                rel="noopener noreferrer">PORTFOLIO WEBSITE</a>
                <ul className="list-disc list-outside text-white text-xl">
                    <li>Developed a fully responsive personal portfolio website using React.js and taiwindcss showcasing skills, projects, and contact information.</li>
                    <li>Implemented client-side routing using react-router-dom to provide smooth navigation across multiple sections (Home, About, Skills, Projects, Contact).</li>
                    <li>Designed reusable components like Navbar, Footer, and content sections using component-based architecture.</li>
                    <li>Utilized React Hooks (useState),(useEffect) to manage component state and interaction.</li>
                </ul>
                </li>
             </ol>
            </div>
        </div>
    )
}
