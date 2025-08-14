import React from 'react'
import { useState,useEffect } from 'react'
import img1 from './Web.jpg'
import img2 from './software.jpg'
import img3 from './DSAI.jpg'
const img=[img1,img2,img3];
export const ImageFlipper=()=>{
    const [current,setCurrent]=useState(0);
    const[flipping,setFlipping]=useState(false);
     useEffect(() => {
    const interval = setInterval(() => {
        setFlipping(true);
        setTimeout(()=>{
      setCurrent(prev => (prev + 1) % img.length);
      setFlipping(false);
    },600);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return(
    <div className="w-60 h-60 rounded-xl overflow-hidden shadow-lg shadow-blue-700">
        <img src={img[current]} alt="Images"
        className="w-full h-full object-cover transition duration-700 ease-in-out"/>
    </div>
  )
}