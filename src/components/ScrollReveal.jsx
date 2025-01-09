'use client';

import { useEffect } from "react";

const ScrollRevealComponent = () => {
  useEffect(() => {
    
    const initScrollReveal = async () => {
      try {
        const ScrollReveal = (await import('scrollreveal')).default;
        
      
        ScrollReveal().reveal(".reveal", {
          distance: "50px",
          duration: 1000,
          delay: 300,
          opacity: 0,
          reset: true,
          origin: "bottom",
          interval: 200,
        });
      } catch (error) {
        console.error('Error initializing ScrollReveal:', error);
      }
    };

    
    initScrollReveal();
  }, []);

  return null;
};

export default ScrollRevealComponent;