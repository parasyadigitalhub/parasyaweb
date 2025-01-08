"use client"; 

export default function CoreValue() {
  const coreValues = [
    {
      title: "Tailored Digital Strategies",
      description:" Our approach ensures that every campaign is strategically aligned with your brand's unique identity and objectives.",
      icon: (
        <svg
          className="w-6 h-6 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Innovative Solutions",
      description: "From advanced SEO practices to cutting-edge social media strategies, our solutions are designed to enhance your online presence.",
      icon: (
        <svg
          className="w-6 h-6 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Client-Centric Focus:",
      description: "Our commitment to client satisfaction is at the core of everything we do.",
      icon: (
        <svg
          className="w-6 h-6 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Excellence",
      description: "Striving for perfection in everything we do",
      icon: (
        <svg
          className="w-6 h-6 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="my-20">
      <h3 className="text-4xl font-bold text-white text-center mb-12">
        Our Core <span className="text-red-600">Values</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {coreValues.map((value, index) => (
          <div
            key={index}
            className="bg-gray-800/10 border border-stone-800 p-6 rounded-lg text-center transform hover:scale-105 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              {value.icon}
            </div>
            <h4 className="text-white font-semibold mb-2">{value.title}</h4>
            <p className="text-gray-400">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
