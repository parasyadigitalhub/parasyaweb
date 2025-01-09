'use client';
import React, { useEffect, useRef, useState } from 'react';

const ContinuousCarousel = () => {
  const slides = [
    { image: "/Images/p1.png" },
    { image: "/Images/p2.jpeg" },
    { image: "/Images/p3.jpeg" },
    { image: "/Images/p7.png" },
    { image: "/Images/p5.png" },
    { image: "/Images/p6.png" },
    { image: "/Images/p4.jpeg" },
    { image: "/Images/p8.png" },
  ];
  
  const totalSlides = [...slides, ...slides, ...slides];
  const containerRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const lastScrollY = useRef(0);
  const autoSlideRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {
    const startAutoSlide = () => {
      autoSlideRef.current = setInterval(() => {
        if (!isPaused) {
          setTranslateX(prevTranslate => {
            const newTranslate = prevTranslate - 0.08;
            const maxTranslate = -66.67;
            
            if (newTranslate < maxTranslate) {
              return 0;
            }
            return newTranslate;
          });
        }
      }, 50);
    };

    startAutoSlide();

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [isPaused]);

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

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translate3d(${translateX}%, ${translateY}px, 0)`;
    }
  }, [translateX, translateY]);

  return (
    <section className="overflow-hidden">
      <div className="max-w-screen mx-auto flex items-center">
        <div 
          className="h-[30vh] md:h-[55vh] lg:h-[70vh] relative overflow-hidden w-full"
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
                className="w-[90%] relative aspect-square px-6"
              >
                <div className="absolute inset-0 p-4">
                  <div className="h-full w-full relative rounded-lg overflow-hidden">
                    <img
                      src={slide.image}
                      alt={`Carousel item ${index + 1}`}
                      className="w-full h-full object-cover transform transition-transform duration-500 hover:shadow-lg"
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