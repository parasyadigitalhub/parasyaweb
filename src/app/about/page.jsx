import CoreValue from '@/components/Corevalue';
import LogoGrid from '@/components/LogoGrid';
import Mission from '@/components/Mission';
import Team from '@/components/Team';
import React from 'react';

const About = () => {
  return (
    <div id="root">
      {/* Welcome Section */}
      <section id="welcome" className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="w-24 h-1 mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              <span className="bg-gradient-to-r text-white bg-clip-text text-transparent">
                Welcome to <span className="text-red-600">Parasya</span>
              </span>
            </h2>
            <div className="space-y-6 text-gray-300">
              <p className="text-xl leading-relaxed">
              where we are dedicated to "Elevating Your Identity." Our taglinereflects our mission to enhance and amplify your brand's presencein the digital world. By employing innovative strategies and leveragingthe latest technologies, we aim to refine youronline identity and elevate your business to new heights.
              </p>
              <p className="text-lg leading-relaxed">At Parasya, we specialize in delivering cutting-edge digital marketing
solutions tailored to meet the unique needs of each client. Our team
of experts harnesses the power of innovative strategies and advanced
technology to drive growth, enhance brand visibility, and maximize
online presence. Whether you're looking to boost your social media
engagement, optimize your search engine rankings, or create
compelling content, Parasya is committed to helping your business
succeed in the digital landscape. With a focus on results and customer
satisfaction, we are your trusted partner in navigating the dynamic
world of digital marketing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section id="objectives" className="py-20 ">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-white mb-4">
        Our <span className="text-red-600">Goals</span> &{" "}
        <span className="text-red-600">Objectives</span>
      </h2>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        At Parasya, we enhance brand visibility and drive targeted traffic for
        our clients by leveraging a mix of advanced SEO techniques, personalized
        content strategies, and data-driven social media marketing. We utilize
        cutting-edge tools and methodologies, including keyword optimization,
        backlink analysis, and on-page SEO to boost search engine rankings. Our
        success is measured through comprehensive analytics, focusing on key
        performance indicators (KPIs) like conversion rates, ROI, and customer
        engagement. We ensure that our digital marketing efforts align with
        clients' overall business goals, creating integrated strategies that
        promote cohesive and sustainable growth.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {[
        {
          title: "Business Excellence",
          description:
            "Achieve operational excellence through innovative solutions and strategic optimization of business processes.",
          icon: (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          ),
        },
        {
          title: "Client Success",
          description:
            "Ensure sustainable growth and success for our clients through comprehensive support and guidance.",
          icon: (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
            />
          ),
        },
        {
          title: "Integrate AI-Powered Tools", 
          description:
            "Enhance serviceoﬀerings by incorporating AI-driven tools forpersonalized marketing strategies and predictive analytics.",
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
          title: "Strengthen Online Presence",
          description:"Increase Parasya’s digital footprint through consistent content creation and thought leadership to establish the company as an industry expert.",
          icon: (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          ),
        },
        {
          title: "Foster Innovation and Sustainability",
          description:
            "IPromote a culture of innovation by investing in continuous staﬀ training and adopting sustainable practices that benefit both clients and the broader community",
          icon: (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7H7m6 0V3m0 4h4m-4 4h6m0 0v-4m0 4v6m0 0h-6m0 0v-6m0 6H7"
            />
          ),
        },
        {
          title: "Sustainable Growth",
          description:"IPromote a culture ofinnovation by investing in continuous staﬀ training and adoptingsustainable practices that benefit both clients and the broadercommunity",
          icon: (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          ),
        },
      ].map((objective, index) => (
        <div
          key={index}
          className="bg-gray-800/30 rounded-lg p-8 border border-gray-800 transition-all duration-300 transform hover:-translate-y-1"
         >
          <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
            <svg
              className="w-6 h-6 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {objective.icon}
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-4">
            {objective.title}
          </h3>
          <p className="text-gray-400 leading-relaxed">{objective.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      <div className='snap-center'> 
        <Mission/>
      </div>

      <div className='snap-center'> 
        <CoreValue/>
      </div>

      <div className='snap-center'> 
        <Team/>
      </div>
     
    </div>

  );
};

export default About;
