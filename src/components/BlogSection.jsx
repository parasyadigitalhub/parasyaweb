"use client";
import React, { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Digital Marketing",
    date: "March 15, 2024",
    image: "/Images/AI.png",
    shortContent: "Exploring how artificial intelligence is revolutionizing the digital marketing landscape and what it means for businesses.",
    fullContent: "The future of AI in digital marketing is poised to transform the industry, offering businesses unprecedented opportunities to enhance personalization, efficiency, and data-driven decision-making. As AI technology continues to evolve, its applications in marketing are expanding rapidly. One of the most exciting advancements is **hyper-personalization**, where AI allows marketers to analyze vast amounts of customer data to create tailored experiences for individuals. This means that businesses can deliver highly personalized content, product recommendations, and offers that resonate with consumers on a deeper level, improving customer satisfaction and increasing conversion rates. In tandem with this, **predictive analytics** powered by AI enables businesses to forecast consumer behavior with greater accuracy. By recognizing patterns in data, AI can help marketers anticipate trends, optimize campaigns, and make informed decisions that are aligned with consumer preferences. Another transformative application is **automated content creation**, where AI tools like GPT-3 and DALL·E are already generating high-quality written and visual content at scale. This not only saves time but also ensures that marketers can consistently deliver relevant and engaging material to their audiences without compromising on quality. **AI-driven chatbots** and virtual assistants are also becoming an integral part of customer service and user engagement strategies. These AI-powered tools can handle inquiries, assist with product selection, and even guide customers through the purchasing process, all in real-time and around the clock. Similarly, **AI-enhanced ad targeting** is revolutionizing digital advertising. By analyzing user data and behavior, AI can optimize ad placements, ensuring that the right message reaches the right audience at the right time, thereby improving ROI and reducing wasted ad spend. Additionally, the rise of voice search means businesses will need to adapt their SEO strategies, and AI is already at the forefront of helping marketers optimize content for voice-based queries. All of these developments point to a future where AI in digital marketing will be central to how brands connect with and engage their customers. By leveraging these tools, businesses will not only improve their marketing efforts but also create more meaningful, efficient, and impactful relationships with their audiences, leading to greater growth and success in an increasingly competitive digital world.",
  },
  {
    id: 2,
    title: "Modern Web Development Trends ",
    date: "March 12, 2024",
    image: "/Images/modernweb.png",
    shortContent: "Discover the latest trends and technologies shaping the future of web development and user experience.",
    fullContent: "Modern web development is evolving rapidly, driven by new technologies and changing user expectations. One of the most impactful trends is **Progressive Web Apps (PWAs)**, which combine the best aspects of web and mobile apps to deliver a fast, reliable, and engaging user experience across devices, even in low-network conditions. PWAs offer offline functionality, push notifications, and home screen installations, making them a go-to choice for businesses seeking to create app-like experiences without building separate native applications. Alongside this, **Single Page Applications (SPAs)** have gained popularity for their ability to load content dynamically, offering users a smooth, app-like experience with faster load times. This trend, supported by frameworks like React, Angular, and Vue.js, has become a standard for delivering fast, responsive websites. Another significant trend is the rise of **dark mode**, a user interface feature that has gained widespread adoption due to its aesthetic appeal and reduced eye strain, especially in low-light environments. As users increasingly demand customization options, developers are incorporating dark mode into their designs with tools like CSS and JavaScript. In the realm of customer interaction, **AI-powered chatbots** are revolutionizing the user experience. These bots, which are capable of providing real-time customer service, assisting with product recommendations, and answering queries, are becoming integral to many websites. As they use machine learning, they continuously improve their performance, offering a more personalized and efficient service. Alongside AI, **voice search optimization** is becoming essential as voice assistants like Siri and Alexa grow in popularity. Web developers are now focusing on optimizing content for voice queries, which requires a shift toward natural language processing and restructuring content to align with how people speak rather than type. On the backend, **serverless architecture** is gaining traction, allowing developers to rely on cloud services like AWS Lambda and Google Cloud Functions instead of managing their own servers. This approach offers better scalability, faster development cycles, and cost-efficiency, particularly for businesses looking to reduce infrastructure costs. As mobile internet usage continues to grow, **mobile-first design** has become a cornerstone of modern web development. Websites are now designed with mobile users in mind from the start, ensuring responsiveness across all devices using tools like Bootstrap and Flexbox. Similarly, **motion UI** is becoming more popular as developers incorporate animations, transitions, and microinteractions to make websites more engaging and intuitive. These small visual cues guide users through websites, enhancing the overall user experience. **Cybersecurity** also remains a top priority as threats like data breaches and cyberattacks continue to rise. Developers are implementing practices like HTTPS, SSL certificates, two-factor authentication, and data encryption to protect both websites and user information. Lastly, **Jamstack architecture** is emerging as a powerful approach that decouples the frontend from the backend, improving load times, scalability, and security. By serving pre-built static content and using APIs for dynamic functionality, Jamstack is quickly becoming the architecture of choice for modern, high-performance websites. In summary, web development is moving towards a more interactive, secure, and efficient future, with trends like PWAs, SPAs, AI, and voice search optimization shaping how we build and experience the web. To stay ahead of the curve, developers must embrace these innovations to create fast, engaging, and secure websites that meet the demands of today’s users.",
  },
  {
    id: 3,
    title: "Maximizing ROI with Influencer Campaigns",
    date: "March 10, 2024",
    image: "/Images/roi.png",
    shortContent: "Strategic approaches to influencer marketing and how to measure campaign success effectively.",
    fullContent: "Maximizing ROI with Influencer CampaignsnIn today’s digital landscape, influencer marketing has emerged as one of the most effective ways for brands to connect with their target audiences and drive tangible results. By collaborating with influencers who have strong, trusted relationships with their followers, brands can reach new customers, boost brand awareness, and ultimately maximize their return on investment (ROI). However, to truly harness the power of influencer marketing, it’s essential to approach campaigns strategically, focusing on measurable outcomes and optimizing for success. One of the first steps in maximizing ROI with influencer campaigns is choosing the right influencers. Instead of focusing solely on influencers with the largest followings, brands should prioritize those who align with their values and have an engaged, relevant audience. Micro-influencers, for example, often have smaller but highly dedicated follower bases, which can lead to better engagement rates and more meaningful interactions. Collaborating with influencers who have a genuine connection with their audience increases the likelihood of more authentic and impactful campaigns, translating into higher ROI. Another critical aspect is **setting clear and measurable goals** for the campaign. Whether the objective is to increase brand awareness, drive traffic, or boost sales, defining specific KPIs (key performance indicators) at the outset allows brands to track progress and evaluate success. Metrics such as engagement rates, click-through rates, conversion rates, and sales figures provide valuable insights into how well the campaign is performing. By using tracking links, promo codes, and UTM parameters, brands can easily monitor the direct impact of influencer-driven traffic and sales, allowing them to calculate the ROI more accurately. Content strategy** is also essential in ensuring that influencer campaigns drive ROI. Influencers know their audience best, so giving them creative freedom to produce content that resonates with their followers can yield better results than rigidly dictating the messaging. That being said, brands should ensure that the content aligns with their overall brand voice and objectives. Whether it's a product review, tutorial, or sponsored post, authentic and engaging content will drive higher engagement and increase the chances of a successful campaign. To maximize ROI, it’s also important to **build long-term relationships with influencers** rather than treating them as one-off collaborators. Long-term partnerships help build consistency in messaging and foster trust between the brand and the influencer’s audience. Repeat collaborations often yield better results over time, as influencers become more familiar with the brand and its values, leading to more natural, effective promotions. Additionally, long-term relationships can often result in better rates and a more streamlined process for future campaigns, contributing to a higher return on investment. Finally, **cross-channel promotion** can significantly amplify the impact of influencer campaigns. While Instagram, TikTok, and YouTube are popular platforms for influencer marketing, cross-promoting content across multiple channels can increase reach and engagement. For example, repurposing influencer content in email newsletters, on a brand’s website, or across social media platforms helps maximize the exposure of the campaign and drives a higher return. Leveraging a multi-channel approach ensures that influencer-driven messages reach a broader, more diverse audience, increasing the potential for conversions and sales. In conclusion, maximizing ROI with influencer campaigns requires a thoughtful, data-driven approach. By selecting the right influencers, setting clear goals, allowing for creative content, fostering long-term partnerships, and utilizing cross-channel strategies, brands can drive significant value and achieve a high return on investment. Influencer marketing isn’t just about amplifying your message; it’s about building genuine, authentic connections that resonate with audiences and lead to measurable results. By optimizing these key areas, brands can ensure that their influencer campaigns are not only impactful but also highly profitable.",
  },
];

const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleClose = () => {
    setSelectedPost(null);
  };

  return (
    <section id="blog_insights" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Latest <span className="text-red-600">Blogs</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Stay updated with our latest thoughts on digital marketing and technology
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => handlePostClick(post)}
              className="group bg-neutral-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-red-600/50 transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-48 bg-neutral-700 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-sm text-gray-400">{post.date}</p>
                  <h3 className="text-xl font-bold text-white mt-2 group-hover:text-red-500 transition-colors">
                    {post.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">{post.shortContent}</p>
                <div className="inline-flex items-center text-red-600 hover:text-red-500">
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
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for expanded content */}
        {selectedPost && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 mt-24">
            <div className="bg-neutral-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-3xl font-bold text-white">{selectedPost.title}</h2>
                  <button
                    onClick={handleClose}
                    className="px-3 py-1 text-2xl text-gray-400 hover:text-white rounded-full leading-none"
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>
                <p className="text-gray-400 mb-4">{selectedPost.date}</p>
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-300 leading-relaxed">
                    {selectedPost.fullContent}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;