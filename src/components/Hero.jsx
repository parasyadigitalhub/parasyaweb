"use client";
import React from "react";

function Hero() {
  return (
    <div className="relative flex flex-col justify-center items-center mx- h-screen bg-hero overflow-hidden">
      {/* Animated Gradient Area Above the Text */}
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-red-600 to-transparent animate-pulse"></div>

      {/* Hero Text */}
      <div className="relative z-10 text-center">
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


