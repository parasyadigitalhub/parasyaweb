"use client";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const ScrollRevealComponent = () => {
  useEffect(() => {
    // Initialize ScrollReveal and define animations
    ScrollReveal().reveal(".reveal", {
      distance: "50px", // Set the distance the element will slide in
      duration: 1000, // Duration of the animation
      delay: 300, // Delay before the animation starts
      opacity: 0, // Start opacity (can be customized)
      reset: true, // Whether to trigger the animation again when it comes back into view
      origin: "bottom", // Origin direction (can be left, right, top, bottom)
      interval: 200, // Interval between each element reveal (useful for multiple elements)
    });
  }, []);

  return null;
};

export default ScrollRevealComponent;
