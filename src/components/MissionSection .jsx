"use client";
import React from 'react';

const MissionSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16 text-white">
      {/* Left Text Section */}
      <div className="lg:w-1/2 mb-8 lg:mb-0 p-8 rounded-xl ">
        <h2 className="text-4xl lg:text-4xl font-bold mb-4">
          About <span className="text-red-600">Parasya</span>
        </h2>
        <p className="text-lg lg:text-xl mb-6">
          At PARASYA, we're not just building a business; we're crafting a vision, one innovation at a time. Founded in 2023, we embarked on this journey with a shared dream to unlock your brand's full online potential with our digital marketing expertise.
        </p>
        <a href="/about">
          <button className="bg-transparent border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </a>
      </div>

      {/* Right Video Section */}
      <div className="relative lg:w-1/2 w-full p-8 rounded-xl mt-8 lg:mt-0">
        {/* Blurred Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-800 via-red-600 to-red-800 blur-xl opacity-50 rounded-md"></div>
        
        {/* Video Content */}
        <video className="relative rounded-md w-full object-cover" autoPlay muted loop>
          <source src="/Images/Parasya-Motion.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default MissionSection;

