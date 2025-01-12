"use client";
import React from 'react';

const DualCarousel = () => {
  // Separate image arrays for each carousel
  const topImages = [
    "/Images/p1.png",
    "/Images/p2.jpeg",
    "/Images/p3.jpeg",
    "/Images/p4.jpeg",
    "/Images/p5.png",
    "/Images/p6.png",
    "/Images/p7.png",
    "/Images/p8.png",
    "/Images/p1.png",
    "/Images/p2.jpeg",
    "/Images/p3.jpeg",
    "/Images/p4.jpeg",
    
  
  ];

  const bottomImages = [
   "/Images/p9.png",
   "/Images/p10.png",
   "/Images/p11.png",
   "/Images/p12.png",
   "/Images/p13.png",
   "/Images/p14.png",
   "/Images/p15.png",
   "/Images/p16.png",
   "/Images/p17.png",
   "/Images/p9.png",
   "/Images/p10.png",
   "/Images/p11.png",
   "/Images/p12.png",
   "/Images/p13.png",
   "/Images/p14.png",
   "/Images/p15.png",
   "/Images/p16.png",
   "/Images/p17.png",
   
   
  ];

  // Responsive Carousel Track component
  const CarouselTrack = ({ images, animationClass }) => (
    <div className={`${animationClass} flex`}>
      {/* First set of images */}
      <div className="flex shrink-0">
        {images.map((img, index) => (
          <div 
            key={`set1-${index}`} 
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 shrink-0 mx-2 sm:mx-3 md:mx-4"
          >
            <img
              src={img}
              alt={`Carousel image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
      {/* Duplicate set for seamless loop */}
      <div className="flex shrink-0">
        {images.map((img, index) => (
          <div 
            key={`set2-${index}`} 
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 shrink-0 mx-2 sm:mx-3 md:mx-4"
          >
            <img
              src={img}
              alt={`Carousel image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full overflow-hidden py-4 sm:py-6 md:py-8 lg:py-12">
      {/* Top Carousel - Left to Right */}
      <div className="relative mb-4 sm:mb-6 md:mb-8 lg:mb-12">
        <CarouselTrack 
          images={topImages} 
          animationClass="animate-carousel-rtl"
        />
      </div>

      {/* Bottom Carousel - Right to Left */}
      <div className="relative">
        <CarouselTrack 
          images={bottomImages} 
          animationClass="animate-carousel-ltr"
        />
      </div>

      <style jsx global>{`
        @keyframes carousel-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes carousel-ltr {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        /* Responsive animation speeds */
        .animate-carousel-rtl {
          animation: carousel-rtl var(--carousel-speed-normal, 20s) linear infinite;
        }

        .animate-carousel-ltr {
          animation: carousel-ltr var(--carousel-speed-normal, 20s) linear infinite;
        }

        /* Adjust animation speeds for different screen sizes */
        @media (max-width: 640px) {
          :root {
            --carousel-speed-normal: 15s;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          :root {
            --carousel-speed-normal: 20s;
          }
        }

        @media (min-width: 1025px) {
          :root {
            --carousel-speed-normal: 25s;
          }
        }

        .animate-carousel-rtl:hover,
        .animate-carousel-ltr:hover {
          animation-play-state: paused;
        }

        /* Optimize performance */
        .animate-carousel-rtl,
        .animate-carousel-ltr {
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default DualCarousel;