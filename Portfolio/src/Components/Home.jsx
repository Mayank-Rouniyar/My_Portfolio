import React from 'react'
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { SiGeeksforgeeks, SiLeetcode, SiCodechef } from 'react-icons/si';
import picture from './picture.jpg';
export const Home=()=>{
    return(
    <div className="flex pt-32 pl-24 text-white">
        <div className="w-1/2 pr-12 flex flex-col justify-center">
      <h1 className="text-3xl mb-2">Hi,I am</h1>
      <h1 className="text-6xl">Mayank Rouniyar</h1>
      <h1 className="text-3xl mb-4">
        and I am a{" "}
        <span className="text-blue-700 text-4xl font-semibold drop-shadow-lg">
          3rd year Student  and a Full Stack Developer.
        </span>
      </h1>
      <h1 className="text-xl mb-2">Welcome to my Portfolio Website and below are the</h1>
      <h1 className="text-xl mb-2">links to all my professional accounts</h1>
      <div className="pt-10 flex gap-6 text-3xl text-white">
        <a href="https://github.com/Mayank-Rouniyar?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-blue-500">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/mayank-rouniyar-7446a8318/" target="_blank" rel="noopener noreferrer" className="text-blue-500">
          <FaLinkedin />
        </a>
        <a href="https://www.geeksforgeeks.org/user/mayankrounzs84/" target="_blank" rel="noopener noreferrer" className="text-blue-500">
          <SiGeeksforgeeks />
        </a>
        <a href="https://leetcode.com/u/MayankRouniyar/" target="_blank" rel="noopener noreferrer" className="text-blue-500">
          <SiLeetcode />
        </a>
        <a href="https://www.codechef.com/users/chefmayank125" target="_blank" rel="noopener noreferrer" className="text-blue-500">
          <SiCodechef />
        </a>
      </div>
      </div>
      <div className="w-1/2 flex justify-center item-center">
        <img src={picture} alt="My Image" className="w-72 h-80 object-top object-cover rounded-full border-8 border-blue-700 shadow-[0_0_30px_10px_rgba(29,78,216,0.7)]"/>
      </div>
    </div>
    )
}
