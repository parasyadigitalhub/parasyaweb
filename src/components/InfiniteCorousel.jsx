'use client';
import React, { useEffect, useRef, useState } from 'react';

const ContinuousCarousel = () => {
  const slides = [
    { image: "/Images/p1.png" },
    { image: "/Images/p2.jpeg" },
    { image: "/Images/p3.jpeg" },
    { image: "/Images/p4.jpeg" }
  ];
  
  const totalSlides = [...slides, ...slides, ...slides];
  const containerRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const lastScrollY = useRef(0);
  const autoSlideRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  
  // Auto-sliding functionality
  useEffect(() => {
    const startAutoSlide = () => {
      autoSlideRef.current = setInterval(() => {
        if (!isPaused) {
          setTranslateX(prevTranslate => {
            const newTranslate = prevTranslate - 0.08; // Further decreased sliding speed
            const maxTranslate = -66.67;
            
            if (newTranslate < maxTranslate) {
              return 0; // Reset to start
            }
            return newTranslate;
          });
        }
      }, 50); // Adjust interval for smoother/faster sliding
    };

    startAutoSlide();

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [isPaused]);

  // Scroll-based movement
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;
      
      setTranslateX(prevTranslate => {
        const newTranslate = prevTranslate - (scrollDelta * 0.01);
        const maxTranslate = -66.67;
        
        if (newTranslate > 0) return maxTranslate;
        if (newTranslate < maxTranslate) return 0;
        return newTranslate;
      });

      setTranslateY(prevTranslate => {
        const newTranslate = prevTranslate + (scrollDelta * 0.01);
        const maxTranslate = 20;
        
        if (Math.abs(newTranslate) > maxTranslate) {
          return newTranslate > 0 ? maxTranslate : -maxTranslate;
        }
        return newTranslate;
      });
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Apply transforms
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translate3d(${translateX}%, ${translateY}px, 0)`;
    }
  }, [translateX, translateY]);

  return (
    <section className=" overflow-hidden">
      <div className="max-w-screen mx-auto   flex items-center">
        <div 
          className=" h-[25vh] md:h-[50vh] lg:h-[70vh] relative overflow-hidden w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className="absolute inset-0 flex w-[300%] transition-transform duration-200 ease-out"
            ref={containerRef}
            style={{ willChange: 'transform' }}
          >
            {totalSlides.map((slide, index) => (
              <div
                key={index}
                className="w-[85%] relative"
              >
                <div className="absolute inset-0 p-2">
                  <div className="relative pt[100%] rounded-lg overflow-hidden">
                    <img
                      src={slide.image}
                      alt={`Carousel item ${index + 1}`}
                      className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                      loading={index < 4 ? "eager" : "lazy"}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContinuousCarousel;