'use client';
import React from 'react';

// ScrollAnimation Component with 3D effects
const ScrollAnimation = () => {
  React.useEffect(() => {
    const reveals = document.querySelectorAll('[class*="reveal-"]');
    
    const reveal = () => {
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', reveal);
    setTimeout(reveal, 100);
    
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <style>
      {`
        [class*="reveal-"] {
          opacity: 0;
          transition: all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1);
          transform-style: preserve-3d;
          perspective: 2000px;
          will-change: transform, opacity;
        }

        .reveal-flip-left {
          transform: rotateY(70deg) translateZ(100px) translateX(-100px);
        }

        .reveal-flip-center {
          transform: rotateX(70deg) translateZ(100px) translateY(50px);
        }

        .reveal-flip-right {
          transform: rotateY(-70deg) translateZ(100px) translateX(100px);
        }

        [class*="reveal-"].active {
          opacity: 1;
          transform: rotateX(0) rotateY(0) translateZ(0) translate(0);
        }

        .delay-200 { transition-delay: 200ms; }
        .delay-400 { transition-delay: 400ms; }
        .delay-600 { transition-delay: 600ms; }
      `}
    </style>
  );
};

const testimonials = [
  {
    id: 1,
    name: "Meptech",
    image: "/Images/lg7.png",
    content: "LinkedIn marketing strategies helped us connect with the right audience and enhanced our professional presence."
  },
  {
    id: 2,
    name: "Keyworld Qatar",
    image: "/Images/lg8.png",
    content: "The Google Ads campaigns brought excellent results, increasing our visibility and attracting more customers."
  },
  {
    id: 3,
    name: "ILM",
    image: "/Images/lg9.png",
    content: "Parasya delivered outstanding video production work that perfectly captured our vision and made a lasting impression."
  }
];

const TestimonialCard = ({ testimonial, animationClass }) => (
  <div className={`relative group h-64 ${animationClass}`}>
    <div className="absolute inset-0 bg-gradient-to-r from-red-800/50 to-gray-800/50 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-75"></div>
    <div className="relative p-6 bg-gray-950 backdrop-blur-md rounded-2xl border border-red-900/30 hover:border-red-700/40 transition-all duration-300 h-full flex flex-col">
      <div className="flex items-start gap-4 mb-4">
        <div className="relative flex-shrink-0">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-white truncate">{testimonial.name}</h3>
        </div>
      </div>
      <p className="text-gray-400 leading-relaxed flex-1 line-clamp-4">
        {testimonial.content}
      </p>
      <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-red-700 to-transparent"></div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const getAnimationClass = (index) => {
    const classes = [
      'reveal-flip-left delay-200',
      'reveal-flip-center delay-400',
      'reveal-flip-right delay-600'
    ];
    return classes[index];
  };

  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden">
      <ScrollAnimation />
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16 reveal-flip-center">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Discover why leading companies choose our solution to drive their success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial}
              animationClass={getAnimationClass(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;