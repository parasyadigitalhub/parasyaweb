"use client";

import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-50 shadow-lg backdrop-blur-xl bg-neutral-800/50">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <a href="/">
            <img
              src="/Logos/logo-white.png"
              alt="MyLogo"
              className="object-contain w-36 h-10"
            />
          </a>
        </div>

        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-white hover:text-gray-400 transition-colors duration-300">
            Home
          </a>
          <a href="/about" className="text-white hover:text-gray-400 transition-colors duration-300">
            About
          </a>
          <a href="/services" className="text-white hover:text-gray-400 transition-colors duration-300">
            Services
          </a>
          <a href="/contacts" className="text-white hover:text-gray-400 transition-colors duration-300">
            Contacts
          </a>
          <a href="/blog" className="text-white hover:text-gray-400 transition-colors duration-300">
            Blog
          </a>
          <a href="/portfolio" className="text-white hover:text-gray-400 transition-colors duration-300">
            Portfolio
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu} 
            className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute w-full h-0.5 bg-white transform transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
              <span className={`absolute w-full h-0.5 bg-white transform transition-all duration-300 ease-in-out top-3 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute w-full h-0.5 bg-white transform transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
            </div>
          </button>
        </div>
      </div>

      <div
        className={`transform transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } md:hidden bg-gradient-to-b from-gray-800 to-gray-900 text-white absolute top-full left-0 w-full min-h-screen`}
      >
        <div className="p-6 space-y-8">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/contacts", label: "Contact" },
            { href: "/services", label: "Services" },
            { href: "/blog", label: "Blog" },
            { href: "/portfolio", label: "Portfolio" }
          ].map((item, index) => (
            <a 
              key={item.href} 
              href={item.href}
              className="block transform transition-all duration-300 hover:translate-x-2"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: isOpen ? 'slideIn 0.5s ease-out forwards' : 'none'
              }}
            >
              <span className="text-2xl font-medium hover:text-gray-400 transition-colors duration-300">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(1rem);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default NavBar;

