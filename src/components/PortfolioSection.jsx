"use client";
import React, { useState, useEffect } from 'react';

// Simple Modal Component without createPortal
const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-50 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-neutral-900 rounded-lg border border-white/10 p-6">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white/70 hover:text-white"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

const companies = [
  
  {
    id: 1,
    name: 'Greychem',
    description: 'Building Feature',
    image: '/Branding/greychem/logo.png',
    brandingUrl: '/branding/company-one',
    websiteUrl: 'https://company-one.com',
    brandingOverview: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.',
    problemStatement: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.',
    location: 'India',
    logicPoints: [
      { 
        title: 'Buildings', 
        description: 'The depiction of buildings represents the construction aspect, showcasing the core focus of the brand on construction-related solutions.',
        image: '/Branding/greychem/log2.png'
      },
      { 
        title: 'Falcon wings', 
        description: 'The falcon wings symbolize strength, conveying a sense of power, resilience, and capability. This aligns with the idea of sturdy and well-constructed buildings.',
        image: '/Branding/greychem/log1.png'
      },
      { 
        title: 'Nest', 
        description: 'The inclusion of a nest brings in the aspect of trust. It signifies a safe and secure environment, reflecting the brands commitment toreliability and trustworthiness in the construction industry.',
        image: '/Branding/greychem/log3.png'
      },
      { 
        title: 'Flask & Bubbles', 
        description: 'These elements represent the chemical aspect, indicating an innovative approach to construction. This could imply the use of advanced materials and techniques for more eﬀective and eﬃcient building processes.',
        image: '/Branding/greychem/log4.png'
      },
      { 
        title: 'Round Shape', 
        description: 'The round shape signifies a holistic approach to construction, strength, trust, and chemical elements. It encapsulates the idea of comprehensive and integrated solutions.',
        image: '/Branding/greychem/log5.png'
      },
      { 
        title: 'Grey,Blue & Black colour Palette', 
        description: 'Gray symbolizes strength and stability in construction, blue represents trust and knowledge in chemical solutions, and black adds professionalism and precision through outlines.',
        image: '/Branding/greychem/log6.png'
      },
      { 
        title: 'Letter G & Letter C', 
        description: "'Incorporated from the logo title, the stylized combination of the letters 'G' and 'C' forms a central element. This fusion not only represents the initials of GreyChem but also signifies the integration of the brand's values and expertise.",
        image: '/Branding/greychem/log7.png'
      },
      { 
        title: 'Greychem', 
        description: "Bilding featue to the next",
        image: '/Branding/greychem/log8.png'
      },
    ],
    testimonials: [
      { author: 'John Doe', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit .' },
    
    ],
    brandingImages: [
      '/Branding/greychem/m1.png',
      '/Branding/greychem/m2.png',
      '/Branding/greychem/m3.png',
      '/Branding/greychem/m4.png',
      '/Branding/greychem/m5.png',
      '/Branding/greychem/m6.png',
      '/Branding/greychem/m7.png',
      '/Branding/greychem/m8.png',

      
      
      
    ],
    logoImage: '/Branding/greychem/logo.png'
  },
  {
    id: 2,
    name: 'Buyitr',
    description: 'Innovative solutions for modern businesses',
    image: '/Branding/buytr/logo.png',
    brandingUrl: '/branding/company-one',
    websiteUrl: 'https://company-one.com',
    brandingOverview: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.',
    problemStatement: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.',
    location: 'United States',
    logicPoints: [
      { 
        title: 'Strategic Vision', 
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        image: '/Branding/buytr/log1.png'
      },
      { 
        title: 'Market Analysis', 
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        image: '/Branding/buytr/log2.png'
      },
      { 
        title: 'Innovation Focus', 
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        image: '/Branding/buytr/log3.png'
      },
      { 
        title: 'Growth Strategy', 
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        image: '/Branding/buytr/log4.png'
      }
    ],
    testimonials: [
      { author: 'John Doe', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.' },
    ],
    brandingImages: [
      '/Branding/buytr/m1.png',
      '/Branding/buytr/m2.png',
      '/Branding/buytr/m3.png',
       '/Branding/buytr/m4.png',
    ],
    logoImage: '/Branding/buytr/logo.png'
  },
  {
    id: 3,
    name: 'Urbanstars',
    description: 'Innovative your interior',
    image: '/Branding/urbanstars/logo.png',
    brandingUrl: '/branding/company-one',
    websiteUrl: 'https://company-one.com',
    brandingOverview: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.',
    problemStatement: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.',
    location: 'United States',
    logicPoints: [
      { 
        title: 'Shape of letter U', 
        description: "Represents the letter 'U' from the brand name UrbanStar",
        image: '/Branding/urbanstars/log1.png'
      },
      { 
        title: 'Building Skyline', 
        description: "Symbolizes the brand's expertise in interior design for urban envi- ronments, conveying a modern and sophisticated aesthetic.",
        image: '/Branding/urbanstars/log2.png'
      },
      { 
        title: 'Curves in Building Floor', 
        description: "The building's elegant curves reflect UrbanStar's focus on stylish, refined interiors and design detail.",
        image: '/Branding/urbanstars/log3.png'
      },
      { 
        title: 'Star rising from Building', 
        description: "Represents UrbanStar's commitment to excellence and innovative interior design.",
        image: '/Branding/urbanstars/log4.png'
      },
      { 
        title: ' Font Style', 
        description: 'The mix of bold and unbold fonts highlights key brand aspects, symbolizing strength and sophistication.',
        image: '/Branding/urbanstars/log5.png'
      },
      { 
        title: 'Color Palette', 
        description: 'Gold signifies luxury and quality, while gray represents modernity, professionalism, and timeless elegance.',
        image: '/Branding/urbanstars/log6.png'
      }
      
    ],
    testimonials: [
      { author: 'John Doe', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.' },
    ],
    brandingImages: [
      '/Branding/urbanstars/m1.png',
      '/Branding/urbanstars/m2.png',
      '/Branding/urbanstars/m3.png',
      '/Branding/urbanstars/m4.png',
      '/Branding/urbanstars/m5.png',
      '/Branding/urbanstars/m6.png',
      '/Branding/urbanstars/m7.png',
      '/Branding/urbanstars/m8.png',
      
    ],
    logoImage: '/Branding/urbanstars/logo.png'
  },
  
  {
    id: 4,
    name: 'Future Stars Sports Academy',
    description: 'Together We Rise',
    image: '/Branding/future/logo.png',
    brandingUrl: '/branding/company-one',
    websiteUrl: 'https://company-one.com',
    brandingOverview: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.',
    problemStatement: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.',
    location: 'UAE INDIA',
    logicPoints: [
      { 
        title: 'Strategic Vision', 
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        image: '/Branding/future/log1.png'
      },
      { 
        title: 'Market Analysis', 
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        image: '/Branding/future/log2.png'
      },
      { 
        title: 'Innovation Focus', 
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        image: '/Branding/future/log3.png'
      },
      { 
        title: 'Growth Strategy', 
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        image: '/Branding/future/log4.png'
      },
      { 
        title: 'Innovation Focus', 
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        image: '/Branding/future/log5.png'
      },
      { 
        title: 'Innovation Focus', 
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        image: '/Branding/future/log6.png'
      }
    ],
    testimonials: [
      { author: 'John Doe', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.' },
    ],
    brandingImages: [
      '/Branding/future/m1.png',
      '/Branding/future/m2.png',
      '/Branding/future/m3.png',
      '/Branding/future/m4.png',
      '/Branding/future/m5.png',
      '/Branding/future/m6.png',
      '/Branding/future/m7.png',
      '/Branding/future/m8.png',
      
      
    ],
    logoImage: '/Branding/future/logo.png'
  },
  
  // ... other companies with the same structure
];

const BrandingSection = ({ company }) => {
  return (
    <div className="space-y-8 max-w-5xl mx-auto text-white">
      <h1 className="text-2xl font-normal border-b border-white/10 pb-4">{company.name}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-neutral-800/50 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden">
          <img 
            src={company.logoImage} 
            alt={`${company.name} Logo`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="font-bold mb-2">Branding Overview</h2>
            <p className="text-sm text-gray-300">{company.brandingOverview}</p>
          </div>

          <div>
            <h2 className="font-bold mb-2">Problem Statement</h2>
            <p className="text-sm text-gray-300">{company.problemStatement}</p>
          </div>

          <div>
            <h2 className="font-bold mb-2">Brand Location</h2>
            <p className="text-sm text-gray-300">{company.location}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {company.logicPoints.map((point, index) => (
          <div key={index} className="flex gap-4">
            <div className="bg-neutral-800/50 backdrop-blur-lg w-32 h-32 rounded-xl border border-white/10 overflow-hidden">
              <img 
                src={point.image} 
                alt={point.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold mb-2"># {point.title}</h3>
              <p className="text-sm text-gray-300">{point.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {company.brandingImages.map((image, index) => (
          <div key={index} className="bg-neutral-800/50 backdrop-blur-lg aspect-video rounded-xl border border-white/10 overflow-hidden">
            <img 
              src={image}
              alt={`Branding ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="w-full grid grid-cols-1 gap-8">
        {company.testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-neutral-800/50 backdrop-blur-lg p-6 rounded-xl border border-white/10 mx-auto w-full md:max-w-2xl"
          >
            <div className="flex gap-4">
              <div className="flex-1">
                <h3 className="font-bold mb-2">Testimonial</h3>
                <p className="text-sm text-gray-300">{testimonial.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBrandingClick = (e, company) => {
    e.preventDefault();
    setSelectedCompany(company);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-white mb-4 text-center">Our <span className='text-red-600'>Portfolio</span></h2>
        <p className="text-gray-400 text-center mb-16 text-lg">Discover our latest work and success stories</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company) => (
            <div 
              key={company.id} 
              className="group bg-neutral-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-red-600/50 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-neutral-700/20 transition-colors duration-300 z-10" />
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-600 transition-colors duration-300">
                  {company.name}
                </h3>
                <p className="text-gray-400 mb-6">{company.description}</p>
                
                <div className="flex gap-4">
                  <button
                    onClick={(e) => handleBrandingClick(e, company)}
                    className="text-center bg-transparent border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
                  >
                    Branding
                  </button>
                  <a
                    href={company.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center bg-transparent border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
                  >
                    Visit
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        {selectedCompany && <BrandingSection company={selectedCompany} />}
      </Modal>
    </section>
  );
};

export default PortfolioSection;