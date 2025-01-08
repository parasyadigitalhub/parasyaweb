"use client";
import React from 'react'

function Mission() {
  return (
    <section id="mission" className="py-20k">
    <div className="container mx-auto px-4">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Our <span className="text-red-600">Mission</span> &amp;{" "}
          <span className="text-red-600">Vision</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Empowering businesses through innovation and excellence
        </p>
      </div>

      {/* Mission & Vision Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Mission Card */}
        <div className="bg-gray-800/0 rounded-xl p-8 border border-gray-800 transition-all duration-300">
          <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"
              ></path>
            </svg>
          </div>
          <h3 className="text-4xl font-bold text-white mb-4">Our Mission</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            To deliver innovative business solutions that empower
            organizations to achieve their full potential through digital
            transformation, strategic consulting, and comprehensive support
            services.
          </p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-red-600 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Drive business transformation
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-red-600 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Foster innovation and growth
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-red-600 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Provide exceptional client service
            </li>
          </ul>
        </div>

        {/* Vision Card */}
        <div className="bg-gray-800/10 rounded-xl p-8 border border-gray-800 transition-all duration-300">
          <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              ></path>
            </svg>
          </div>
          <h3 className="text-4xl font-bold text-white mb-4">Our Vision</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            To be the leading force in business transformation, recognized
            globally for our innovative solutions, excellence in service
            delivery, and commitment to client success.
          </p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-red-600 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Global industry leadership
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-red-600 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Sustainable business practices
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-red-600 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Continuous innovation
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Mission