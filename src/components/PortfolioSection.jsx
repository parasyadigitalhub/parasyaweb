"use client";
import React, { useState, useEffect } from 'react';
import { companies } from '@/data/portfolioData';

// Modal Component
const Modal = ({ isOpen, onClose, children, selectedCompany }) => {
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
      <div className="relative z-50 w-full max-w-4xl h-[90vh] bg-neutral-900 rounded-lg border border-white/10 flex flex-col">
        <div className="sticky top-0 z-10 bg-neutral-900 border-b border-white/10 p-4 flex justify-between items-center">
          {selectedCompany && (
            <h1 className="text-xl sm:text-2xl font-normal text-white">
              {selectedCompany.name}
            </h1>
          )}
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white ml-4"
          >
            ✕
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 pt-4">
          {children}
        </div>
      </div>
    </div>
  );
};

// Branding Section Component
const BrandingSection = ({ company }) => {
  if (!company) return null;

  return (
    <div className="space-y-4 sm:space-y-6 md:space-y-8 max-w-5xl mx-auto text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        <div className="bg-neutral-800/50 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden">
          <img 
            src={company.logoImage} 
            alt={`${company.name} Logo`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div>
            <h2 className="font-bold text-sm sm:text-base md:text-lg mb-2">Branding Overview</h2>
            <p className="text-xs sm:text-sm text-gray-300">{company.brandingOverview}</p>
          </div>

          <div>
            <h2 className="font-bold text-sm sm:text-base md:text-lg mb-2">Problem Statement</h2>
            <p className="text-xs sm:text-sm text-gray-300">{company.problemStatement}</p>
          </div>

          <div>
            <h2 className="font-bold text-sm sm:text-base md:text-lg mb-2">Brand Location</h2>
            <p className="text-xs sm:text-sm text-gray-300">{company.location}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {company.logicPoints.map((point, index) => (
          <div key={index} className="flex gap-2 sm:gap-4">
            <div className="bg-neutral-800/50 backdrop-blur-lg w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-xl border border-white/10 overflow-hidden">
              <img 
                src={point.image} 
                alt={point.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-sm sm:text-base md:text-lg mb-2"># {point.title}</h3>
              <p className="text-xs sm:text-sm text-gray-300">{point.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
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

      <div className="w-full grid grid-cols-1 gap-4 sm:gap-6 md:gap-8">
        {company.testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-neutral-800/50 backdrop-blur-lg p-4 sm:p-5 md:p-6 rounded-xl border border-white/10 mx-auto w-full md:max-w-2xl"
          >
            <div className="flex gap-4">
              <div className="flex-1">
                <h3 className="font-bold text-sm sm:text-base md:text-lg mb-2">Testimonial</h3>
                <p className="text-xs sm:text-sm text-gray-300">{testimonial.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Portfolio Section Component
const PortfolioSection = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBrandingClick = (e, company) => {
    e.preventDefault();
    setSelectedCompany(company);
    setIsModalOpen(true);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 mt-8 sm:mt-12 md:mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4 text-center">
          Our <span className="text-red-600">Portfolio</span>
        </h2>
        <p className="text-gray-400 text-center mb-8 sm:mb-12 md:mb-16 text-sm sm:text-base md:text-lg">
          Discover our latest work and success stories
        </p>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {companies.map((company) => (
            <div 
              key={company.id} 
              className="group bg-neutral-800/50 backdrop-blur-lg rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 hover:border-red-600/50 transition-all duration-300"
            >
              <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                <div className="absolute inset-0 bg-neutral-700/20 transition-colors duration-300 z-10" />
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-3 sm:p-4 md:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2 group-hover:text-red-600 transition-colors duration-300">
                  {company.name}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4 md:mb-6 line-clamp-2 sm:line-clamp-none">
                  {company.description}
                </p>
                
                <div className="flex gap-2 sm:gap-4">
                  <button
                    onClick={(e) => handleBrandingClick(e, company)}
                    className="text-center bg-transparent border border-white text-white text-xs sm:text-sm px-3 sm:px-4 md:px-6 py-2 sm:py-2 md:py-3 rounded-full hover:bg-white hover:text-black transition flex-1"
                  >
                    Branding
                  </button>
                  <a
                    href={company.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center bg-transparent border border-white text-white text-xs sm:text-sm px-3 sm:px-4 md:px-6 py-2 sm:py-2 md:py-3 rounded-full hover:bg-white hover:text-black transition flex-1"
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
        selectedCompany={selectedCompany}
      >
        <BrandingSection company={selectedCompany} />
      </Modal>
    </section>
  );
};

export default PortfolioSection;