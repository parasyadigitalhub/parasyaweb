"use client";
import React, { useState, useEffect } from 'react';

const ChevronLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const EnhancedCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const slides = [
    {
      image: "/posters/sportwindo.jpg",
      url: "https://sportswindo.com"
    },

    {
      image: "/posters/futurestars.jpg",
      url: "https://futurestarssports.academy"
    },
   
    {
      image: "/posters/p4.jpg",
      url: "https://meptechuae.com"
    },
    {
      image: "/posters/keyworld.jpg",
      url: "https://keyworldqatar.com"
    },
    {
      image: "/posters/luvwish.jpg",
      url: "https://luvwish.in"
    },
    {
      image: "/posters/nextgen.jpg",
      url: "https://nextgen.in"
    },
    
    
   
  ];

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setActiveIndex((current) => (current + 1) % slides.length);
      }, 1500);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  return (
    <div 
      className="w-full min-h-[300px] sm:min-h-[400px] md:h-[500px] flex items-center justify-center relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl flex justify-center items-center px-4 sm:px-8 md:px-12 lg:px-20">
        {slides.map((slide, index) => {
          const position = (index - activeIndex + slides.length) % slides.length;
          const isActive = position === 0;
          const isPrev = position === slides.length - 1;
          const isNext = position === 1;
          
          return (
            <div
              key={index}
              className={`absolute w-full sm:w-[400px] md:w-[450px] lg:w-[500px] aspect-square transition-all duration-700 ease-out rounded-xl overflow-hidden
                ${isActive ? 'z-20 opacity-100 scale-100' : ''}
                ${isPrev ? 'z-10 opacity-40 scale-75 -translate-x-full' : ''}
                ${isNext ? 'z-10 opacity-40 scale-75 translate-x-full' : ''}
                ${!isActive && !isPrev && !isNext ? 'opacity-0' : ''}
                shadow-lg hover:shadow-xl transform-gpu group
                ${isActive ? 'sm:hover:scale-105' : ''}
              `}
              style={{
                transform: `
                  scale(${isActive ? 1 : 0.60})
                  translateX(${
                    isActive ? 0 : isPrev ? '-100%' : isNext ? '100%' : '0'
                  })
                `,
                transition: 'all 0.s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <div className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt="Carousel item"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 transition-all duration-300 mb-2">
                  <a
                    href={slide.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 px-3 sm:px-5 py-1.5 sm:py-2 bg-white/90 hover:bg-white text-gray-900 rounded-full text-xs sm:text-sm font-medium transform hover:scale-105 transition-all duration-300 shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit
                  </a>
                </div>
              </div>
            </div>
          );
        })}

        <button
          onClick={prevSlide}
          className="absolute left-1 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-white/80 text-gray-800 hover:bg-white transition-all duration-200 shadow-md z-10 invisible sm:visible"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-1 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-white/80 text-gray-800 hover:bg-white transition-all duration-200 shadow-md z-10 invisible sm:visible"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default EnhancedCarousel;