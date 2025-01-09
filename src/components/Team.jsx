"use client";
import React from "react";

const teamMembers = [
  {
    name: "Rishan",
    role: "Founder",
    image: "/Images/Rishanpic.png",
    linkedin: "#",
  },
  {
    name: "Arjun",
    role: "Founder & CEO",
    image: "/Images/Arjunpic.png",
    linkedin: "#",
  },
  {
    name: "Abhay",
    role: "Chief Technical Officer",
    image: "/Images/Abhaypic.png",
    linkedin: "#",
  },
  {
    name: "Jefrin",
    role: "CMO",
    image: "/Images/jefrinpic.png",
    linkedin: "#",
  },
  {
    name: "Soorya",
    role: "Media Head",
    image: "/Images/sooryapic.png",
    linkedin: "#",
  },
  {
    name: "Krishna",
    role: "Public Relation Officer",
    image: "/Images/krishnapic.png",
    linkedin: "#",
  },
];

export default function Team() {
  return (
    <section className=" py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Meet the<span className="text-red-600"> team</span> 
          
        </h2>
        <p className="text-white text-lg max-w-2xl mx-auto">
        Discover the driving force behind Parasya. Our core team, including visionary founders, is committed to empowering you with expertise in Marketing and Technology world.
        </p>
      </div>
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative group rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              
              <img 
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover aspect-square  grayscale  group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white text-xl font-semibold">
                  {member.name}
                </h3>
                <p className="text-red-600">{member.role}</p>
                <div className="flex items-center mt-3 space-x-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.23 0H1.77C.792 0 0 .77 0 1.72v20.56C0 23.23.792 24 1.77 24h20.46c.977 0 1.77-.77 1.77-1.72V1.72C24 .77 23.207 0 22.23 0zM7.12 20.452H3.573V9.03H7.12v11.422zM5.344 7.529a2.038 2.038 0 110-4.076 2.038 2.038 0 010 4.076zm14.524 12.924h-3.547v-5.754c0-1.372-.027-3.137-1.91-3.137-1.91 0-2.202 1.495-2.202 3.034v5.857h-3.548V9.03h3.409v1.563h.048c.474-.899 1.634-1.847 3.367-1.847 3.6 0 4.266 2.368 4.266 5.451v6.255h-.002z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
