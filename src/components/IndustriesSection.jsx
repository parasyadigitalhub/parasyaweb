"use client";

export default function IndustriesSection() {
  return (
    <section className="relative text-white mt-20 py-16 px-6 sm:px-12 lg:px-20 ">
      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl  font-bold leading-tight">
              Why you should partner with <br />
              <span className="text-red-600">Parasya</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
            At Parasya, we understand that every business is unique. Our tailored solutions encompass a wide spectrum of services, from strategic planning and financial management to cutting-edge technology implementation. We believe that a holistic approach to business is key to sustained success, which is why our team of experts collaborates closely with you to identify opportunities, mitigate risks, and create a roadmap to achieve your goals.
            </p>
          </div>

          {/* Right Content */}
          <div className="space-y-10">
            <h3 className="text-2xl font-bold text-white">Industries We Serve</h3>
            <ul className="space-y-4 text-lg">
              <li className="border-b border-gray-600 pb-2">Technology & Software</li>
              <li className="border-b border-gray-600 pb-2">Education</li>
              <li className="border-b border-gray-600 pb-2">Finance & Banking</li>
              <li className="border-b border-gray-600 pb-2">Healthcare</li>
              <li className="border-b border-gray-600 pb-2">Retail & E-commerce</li>
            </ul>
          </div>
        </div>

        {/* Floating "More" Button */}
        <div className="mt-16 flex justify-center">
          
        </div>
      </div>

      {/* Animated Blur Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-red-600/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-red-900/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
}
