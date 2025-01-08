'use client';

import { useEffect } from "react";

const ScrollRevealComponent = () => {
  useEffect(() => {
    // Dynamically import ScrollReveal only on the client side
    const initScrollReveal = async () => {
      try {
        const ScrollReveal = (await import('scrollreveal')).default;
        
        // Initialize ScrollReveal and define animations
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

    // Call the initialization function
    initScrollReveal();
  }, []);

  return null;
};

export default ScrollRevealComponent;