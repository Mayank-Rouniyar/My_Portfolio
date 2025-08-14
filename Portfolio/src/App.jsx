import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Route,Routes } from 'react-router-dom'
import { Home } from './Components/Home'
import { About } from './Components/About'
import {Skill} from './Components/Skill'
import {Project} from './Components/Project'
import {Contact} from './Components/Contact'
const App = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen w-screen bg-black-to-blue text-white">
      <Navbar/>
      <div className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skill" element={<Skill />} />
        <Route path="/Project" element={<Project/>} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      </div>
       <footer className="text-center p-4 bg-gray-900 text-gray-400">
          © {new Date().getFullYear()} Mayank Rouniyar: All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default App;
