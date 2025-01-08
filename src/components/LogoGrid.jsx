"use client";
import React from 'react';

const LogoGrid = () => {
  // Array of logo data
  const logos = [
    { src: '/Logos/lg1.png', alt: 'Burberry' },
    { src: '/Logos/lg2.png', alt: 'Tesco' },
    { src: '/Logos/lg3.png', alt: 'The Telegraph' },
    { src: '/Logos/lg4.png', alt: 'Burberry' },
    { src: '/Logos/lg5.png', alt: 'Tesco' },
    { src: '/Logos/lg6.png', alt: 'Burberry' },
    { src: '/Logos/lg7.png', alt: 'Tesco' },
    { src: '/Logos/lg8.png', alt: 'The Telegraph' },
    { src: '/Logos/lg9.png', alt: 'Burberry' },
    { src: '/Logos/lg10.png', alt: 'Tesco' },
    { src: '/Logos/lg11.png', alt: 'Burberry' },
    { src: '/Logos/lg12.png', alt: 'Tesco' },
  
  ];

  return (
    <section className=" text-white py-6 px-4 lg:py-16 lg:px-20">
    {/* Heading */}
    <h2 className="text-3xl lg:text-5xl font-bold text-center mb-10">
      We Cherish Our Customers
    </h2>
  
    {/* Logo Grid */}
    <div className="grid grid-cols-4  border-l  border-stone-800">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="flex items-center justify-center p-4 shadow-md border-r border-b border-l border-stone-800 first:border-t-0 first:border-l-0"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="max-h-16 sm:max-h-12 md:max-h-16 lg:max-h-28 w-auto object-contain "
          />
        </div>
      ))}
    </div>
  </section>
  
  
  );
};

export default LogoGrid;
