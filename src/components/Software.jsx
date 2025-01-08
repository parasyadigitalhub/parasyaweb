"use client"; // Needed for React's client-side rendering in Next.js

import { useState } from "react";

export default function Software() {
  const [activeIndex, setActiveIndex] = useState(0); // First accordion is open by default

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Custom Software Solutions.",
      content:
        "Bespoke solutions that address unique business challenges and requirements.",
    },
    {
      title: "UI/UX Design",
      content:
        "User interfaces and experiences that are both visually appealing and highly functional.",
    },
    {
      title: "Web Application Development",
      content:
        "Design and deploy robust APIs and microservices for seamless integration across your systems.",
    },
    {
      title: "Mobile App Development",
      content:
        "Cross-platform mobile apps built to enhance user experience and drive engagement.",
    },
    {
      title: "SEO",
      content:
        "Optimize websites to rank higher on search engines, driving organic traﬃc and improving visibility.",
    },
    {
      title: "Maintenance and Support",
      content:
        "Ongoing technical support to ensure seamless operation of your Software.",
    },
  ];

  return (
    <div className=" text-white py-16 lg:mt-mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Software Development</h1>
          <p className="text-lg text-neutral-300 leading-relaxed">
          Technology is at the heart of business growth. We
specialize in creating user-centric web and mobile
applications tailored to your specific needs. Our
software development services focus on delivering
scalable, high-performance solutions.
          </p>
          <button className="bg-transparent border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
            Know More
          </button>
        </div>

        {/* Right Accordion */}
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