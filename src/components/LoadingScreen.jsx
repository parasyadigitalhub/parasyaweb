"use client";
import { useState, useEffect } from 'react';

const LoadingScreen = ({ children }) => {
  const [currentText, setCurrentText] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [isFinalFade, setIsFinalFade] = useState(false);
  
  const texts = [
    "Digital Solutions",
    "Brand Strategy",
    "Web Development",
    "User Experience",
    "Creative Design",
    "PARASYA"
  ];

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      if (textIndex < texts.length) {
        setCurrentText(texts[textIndex]);
        setTextIndex(prev => prev + 1);
        
        // If this is the last word (PARASYA)
        if (textIndex === texts.length - 1) {
          // Wait for 800ms before starting the final fade
          setTimeout(() => {
            setIsFinalFade(true);
            // Wait for the fade animation to complete before hiding
            setTimeout(() => {
              setIsVisible(false);
              document.body.style.overflow = 'auto';
            }, 1000); // Duration of the final fade
          }, 600); // How long PARASYA stays visible
        }
      }
    }, 200); // Regular transition timing

    return () => clearTimeout(animationTimeout);
  }, [textIndex]);

  if (!isVisible) return children;

  return (
    <div className="fixed inset-0 bg-stone-950 flex items-center justify-center z-50">
      <div className={`text-center transform transition-opacity ${
        isFinalFade ? 'opacity-0 duration-1000' : 'opacity-100 duration-200'
      }`}>
        <div className="overflow-hidden">
          <h1 
            className={`
              text-4xl font-medium text-gray-200
              transform transition-all duration-200 ease-in-out
              ${textIndex === texts.length - 1 ? 'font-bold tracking-widest' : ''}
            `}
          >
            {currentText}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;