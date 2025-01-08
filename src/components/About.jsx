"use client";
import React from 'react';

export default function About() {
  return (
    <div id="root">
     
      <section id="welcome" className="py-20 ">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="w-24 h-1 mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              <span className="bg-gradient-to-r text-white bg-clip-text text-transparent">
                Welcome to <span className="text-red-600">Parasya</span>
              </span>
            </h2>
            <div className="space-y-6 text-gray-300">
              <p className="text-xl leading-relaxed">
                At Parasya, we believe in transforming businesses through innovative solutions and strategic excellence. Our commitment to excellence drives us to deliver exceptional results for our clients.
              </p>
              <p className="text-lg leading-relaxed">
                We combine industry expertise with cutting-edge technology to help businesses navigate the complex challenges of today's digital landscape. Our comprehensive approach ensures sustainable growth and lasting success for our partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="objectives" className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="text-red-600">Objectives</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Driving excellence through clear goals and strategic implementation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: 'Business Excellence',
                description:
                  'Achieve operational excellence through innovative solutions and strategic optimization of business processes.',
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                ),
              },
              {
                title: 'Client Success',
                description:
                  'Ensure sustainable growth and success for our clients through comprehensive support and guidance.',
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                ),
              },
             
            ].map(({ title, description, icon }, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-lg p-8 border border-gray-800 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {icon}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
                <p className="text-gray-400 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
   
    </div>
  );
}
