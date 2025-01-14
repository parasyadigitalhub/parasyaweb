"use client";
import React, { useState, useEffect } from "react";

function Hero() {
  const [rotation, setRotation] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  // Handle mouse movement
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = (clientX / window.innerWidth - 0.5) * 20;
    const moveY = (clientY / window.innerHeight - 0.5) * 20;
    setMousePosition({ x: moveX, y: moveY });
  };

  // Handle scroll rotation
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setRotation(scrolled * 0.1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initial loading animation
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);

  return (
    <div 
      className="relative flex flex-col justify-center items-center h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Planet Background Image */}
      <div 
        className={`
          absolute w-4/5 md:w-[85%] lg:w-[90%] h-4/5 opacity-20 
          transition-all duration-1000 ease-out
        `}
        style={{
          transform: `
            rotate(${rotation}deg)
            translate(${mousePosition.x}px, ${mousePosition.y}px)
            scale(${isLoading ? 1.5 : 1.1})
          `,
          opacity: isLoading ? 0 : 0.2
        }}
      >
        <img
          src="/planet.svg"
          alt="Planet background"
          className="w-full h-full object-contain animate-pulse"
        />
      </div>

      {/* Red gradient overlay */}
      <div 
        className={`
          absolute top-0 left-0 right-0 h-1/3
          bg-gradient-to-b from-red-600 to-transparent animate-pulse
          transition-opacity duration-1000
        `}
        style={{ opacity: isLoading ? 0 : 1 }}
      ></div>
      
      {/* Content */}
      <div 
        className={`
          relative z-10 text-center
          transition-all duration-1000
        `}
        style={{
          opacity: isLoading ? 0 : 1,
          transform: `translateY(${isLoading ? '20px' : '0'})`,
        }}
      >
        <h1 className="font-sans font-black text-5xl md:text-7xl lg:text-8xl text-stone-300 mt-24">
          ELEVATING <br />
          YOUR IDENTITY
        </h1>
        <p className="mt-4 font-sans font-light text-sm md:text-md lg:text-lg text-stone-400 max-w-2xl mx-auto">
          Your One-Stop Solution for Incorporation, Legal Support, Digital
          Marketing, and Cutting-Edge App & Web Development Services.
        </p>
      </div>
    </div>
  );
}

export default Hero;
