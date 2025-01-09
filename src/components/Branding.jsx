"use client"; // Needed for React's client-side rendering in Next.js

import { useState } from "react";

export default function Branding() {
  const [activeIndex, setActiveIndex] = useState(0); // First accordion is open by default

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Brand Strategy Development",
      content:
        "Crafting unique brand voices and positioning strategies that resonate.",
    },
    {
      title: "Social Media",
      content:
        "Develop and manage social media campaigns that boost brand awareness, engagement, and community building.",
    },
    {
      title: "Content Creation",
      content:
        "Developing compelling content that drives engagement and builds brand loyalty.",
    },
    {
      title: "Social Media Campaigns",
      content:
        "Creating impactful campaigns across platforms like Instagram, Facebook, LinkedIn, and more.",
    },
    {
      title: "Digital Advertising",
      content:
        "Targeted ad campaigns designed for maximum ROI.",
    },
    {
      title: "Analytics and Reporting",
      content:
        "Detailed insights to track performance and refine strategies.",
    },
  ];

  return (
    <div className=" text-white py-16 lg:mt-mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-start justify-between gap-8">
      
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Branding and Social Media Marketing</h1>
          <p className="text-lg text-neutral-300 leading-relaxed">
          At Parasya, we understand that a strong brand is keyto standing out in today’s crowded marketplace. Ourbranding and digital marketing services are designedto build and enhance your brand identity whileconnecting you with your target audience.
          </p>
          <button className="bg-transparent border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
            Know More
          </button>
        </div>

        <div className="md:w-1/2 bg-neutral-900 p-6 rounded-lg shadow-lg">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-700 last:border-none"
            >
              <button
                className="w-full flex justify-between items-center py-4 text-left text-white"
                onClick={() => handleToggle(index)}
              >
                <span className="text-lg">{item.title}</span>
                <svg
                  className={`w-5 h-5 transition-transform transform ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`${
                  activeIndex === index ? "block" : "hidden"
                } text-neutral-400 text-sm py-2`}
              >
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}