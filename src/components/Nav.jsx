"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-50 shadow-lg backdrop-blur-xl bg-neutral-800/20">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
       
        <div className="text-white text-2xl font-bold">
          <Link href="/">
            <Image
              src="/Logos/logo-white.png"
              alt="MyLogo"
              width={150} // Width of the logo
              height={40} // Height of the logo
              className="object-contain"
            />
          </Link>
        </div>

       
        <div className="hidden md:flex space-x-6">
        <Link href="/">
            <span className="text-white hover:text-gray-400">Home</span>
          </Link>
          <Link href="/about">
            <span className="text-white hover:text-gray-400">About</span>
          </Link>
          <Link href="/services">
            <span className="text-white hover:text-gray-400">Services</span>
          </Link>
          <Link href="/contacts">
            <span className="text-white hover:text-gray-400">Contacts</span>
          </Link>
          <Link href="/contacts">
            <span className="text-white hover:text-gray-400">Blog</span>
          </Link>
          <Link href="/contacts">
            <span className="text-white hover:text-gray-400">Portfolio</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

     
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-gray-800 text-white p-4 space-y-4`}
      >
        <Link href="/">
          <span className="block hover:text-gray-400">Home</span>
        </Link>
        <Link href="/contact">
          <span className="block hover:text-gray-400">Contact</span>
        </Link>
        <Link href="/services">
          <span className="block hover:text-gray-400">Services</span>
        </Link>
        <Link href="/blog">
          <span className="block hover:text-gray-400">Blog</span>
        </Link>
        <Link href="/portfolio">
          <span className="block hover:text-gray-400">Portfolio</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;


