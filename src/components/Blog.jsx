"use client";
import Image from "next/image";
import React from "react";

function Blog() {
  return (
    <section
      id="blog_insights"
      className=" relative overflow-hidden py-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Latest <span className="text-red-600">Blogs</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Stay updated with our latest thoughts on digital marketing and
            technology
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Item 1 */} <div className="group bg-neutral-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-red-600/50 transition-all duration-300">
            <div className="relative h-48 bg-neutral-700 overflow-hidden">
            <Image
  src="/Images/AI.png"
  alt="The Future of AI in Digital Marketing"
  fill
  style={{ objectFit: 'cover' }}
  className="group-hover:scale-110 transition-transform duration-500"
/>
              
            </div>
            <div className="p-6">
              <div className="mb-4">
                <p className="text-sm text-gray-400">March 15, 2024</p>
                <h3 className="text-xl font-bold text-white mt-2 group-hover:text-red-500 transition-colors">
                  The Future of AI in Digital Marketing
                </h3>
              </div>
              <p className="text-gray-300 mb-4">
                Exploring how artificial intelligence is revolutionizing the
                digital marketing landscape and what it means for businesses.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-red-600 hover:text-red-500"
              >
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Blog Item 2 */}
          <div className="group bg-neutral-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-red-600/50 transition-all duration-300">
            <div className="relative h-48 bg-neutral-700 overflow-hidden">
            <Image
  src="/Images/modernweb.png" 
  alt="Modern Web Development Trends 2024"
  fill
  style={{ objectFit: 'cover' }}
  className="group-hover:scale-110 transition-transform duration-500"
/>
              
            </div>
            <div className="p-6">
              <div className="mb-4">
                <p className="text-sm text-gray-400">March 12, 2024</p>
                <h3 className="text-xl font-bold text-white mt-2 group-hover:text-red-500 transition-colors">
                  Modern Web Development Trends 2024
                </h3>
              </div>
              <p className="text-gray-300 mb-4">
                Discover the latest trends and technologies shaping the future
                of web development and user experience.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-red-600 hover:text-red-500"
              >
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          
          <div className="group bg-neutral-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-red-600/50 transition-all duration-300">
            <div className="relative h-48 bg-neutral-700 overflow-hidden">
            import Image from 'next/image';

<Image
  src="/Images/roi.png" 
  alt="Maximizing ROI with Influencer Campaigns"
  fill
  style={{ objectFit: 'cover' }}
  className="group-hover:scale-110 transition-transform duration-500"
/>

             
            </div>
            <div className="p-6">
              <div className="mb-4">
                <p className="text-sm text-gray-400">March 10, 2024</p>
                <h3 className="text-xl font-bold text-white mt-2 group-hover:text-red-500 transition-colors">
                  Maximizing ROI with Influencer Campaigns
                </h3>
              </div>
              <p className="text-gray-300 mb-4">
                Strategic approaches to influencer marketing and how to measure
                campaign success effectively.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-red-600 hover:text-red-500"
              >
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* View All Articles */}
        <div className="text-center mt-16">
          <a
            href="/blog"
            className="bg-transparent border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            View All Articles
           
          </a>
        </div>
      </div>
    </section>
  );
}

export default Blog;
