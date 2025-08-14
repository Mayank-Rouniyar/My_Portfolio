import React from 'react'
import {Link, NavLink} from 'react-router-dom'
export const Navbar=()=>{
    return (
      <nav className="w-full h-16 px-8 bg-black-to-blue text-white flex items-center justify-between">
        <h2 className="text-xl font-bold pl-16">Portfolio</h2>
        <ul className="flex gap-6">
        <li><NavLink to="/" className={({isActive})=>isActive?"text-blue-700":"hover:underline decoration-blue-700"}>Home</NavLink></li>
        <li><NavLink to="/about" className={({isActive})=>isActive?"text-blue-700":"hover:underline decoration-blue-700"}>About</NavLink></li>
        <li><NavLink to="/skill" className={({isActive})=>isActive?"text-blue-700":"hover:underline decoration-blue-700"}>Skill</NavLink></li>
        <li><NavLink to="/project" className={({isActive})=>isActive?"text-blue-700":"hover:underline decoration-blue-700"}>Project</NavLink></li>
        <li><NavLink to="/contact" className={({isActive})=>isActive?"text-blue-700":"hover:underline decoration-blue-700"}>Contact</NavLink></li>
      </ul>
      </nav>
    );
};
