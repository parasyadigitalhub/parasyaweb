"use client"; // Needed for React's client-side rendering in Next.js

import { useState } from "react";

export default function Legal() {
  const [activeIndex, setActiveIndex] = useState(0); // First accordion is open by default

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Legal Advisory",
      content:
        "Strategic legal advice to navigate complex regulations and safeguard your business interests.",
    },
    {
      title: "Company Incorporation:",
      content:
        "Seamless and hassle-free incorporation services, ensuring your business is legally set up for success.",
    },
    {
      title: "API & Microservices",
      content:
        "Design and deploy robust APIs and microservices for seamless integration across your systems.",
    },
    {
      title: "Trademark Registration",
      content:
        "Protect your brand identity with our end-to-end trademark services, from filing to management.",
    },
    {
      title: "ITR Filing and Tax Compliance",
      content:
        "Expert guidance and assistance with Income Tax Return (ITR) filings and compliance.",
    },
  ];

  return (
    <div className=" text-white py-16 lg:mt-mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Legal Support & Compliance</h1>
          <p className="text-lg text-neutral-300 leading-relaxed">
          In today’s regulatory environment, legal compliance
           and prope documentation are crucial. We oﬀer a
           comprehensive range of legal support services
            tailored to startups, SMEs, and established
             enterprises alike.
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