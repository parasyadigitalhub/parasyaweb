"use client";

import { useState, useEffect } from 'react';

const MouseSpotlight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div 
        className="absolute rounded-full bg-gradient-to-r from-red-800 to-red-700 blur-3xl"
        style={{
          width: '400px',
          height: '400px',
          left: `${mousePosition.x - 200}px`,
          top: `${mousePosition.y - 200}px`,
          transform: 'translate(0, 0)',
        }}
      />
    </div>
  );
};

export default MouseSpotlight;
