"use client";
import React, { useState, useEffect } from "react";

function Hero() {
  const [rotation, setRotation] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = (clientX / window.innerWidth - 0.5) * 20;
    const moveY = (clientY / window.innerHeight - 0.5) * 20;
    setMousePosition({ x: moveX, y: moveY });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setRotation(scrolled * 0.1);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center mx-auto h-screen bg-hero overflow-hidden"
         onMouseMove={handleMouseMove}>
      {/* Enhanced gradient overlay with pulse animation */}
      <div className={`
        absolute top-0 left-0 right-0 h-1/3 
        bg-gradient-to-b from-red-500 to-transparent
        animate-pulse
        transition-opacity duration-1000
      `}
      style={{ opacity: isLoading ? 0 : 1 }}></div>
      
      {/* Enhanced Floating Planet with stable glow effect */}
      <div className="absolute top-1/2 left-1/2">
        <div 
          className="relative w-[600px] h-[600px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px] 
                     transition-all duration-1000 ease-out"
          style={{
            transform: `
              translate(-50%, -50%)
              rotate(${rotation}deg)
              translate(${mousePosition.x}px, ${mousePosition.y}px)
              scale(${isLoading ? 1.5 : 1})
            `,
          }}
        >
          {/* Static glow effect layer */}
          <div className="absolute inset-0 bg-red-500 rounded-full opacity-20 blur-3xl"></div>
          
          {/* Planet image with stable opacity */}
          <img 
            src="/planet.svg" 
            alt="Floating planet"
            className="relative w-full h-full object-contain transition-opacity duration-500"
            style={{
              opacity: isLoading ? 0 : 0.4
            }}
          />
        </div>
      </div>

      {/* Main content */}
      <div 
        className="relative z-10 text-center transition-all duration-1000"
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