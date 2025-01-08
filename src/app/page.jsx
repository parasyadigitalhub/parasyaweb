import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import IndustriesSection from "@/components/IndustriesSection";
import LogoGrid from "@/components/LogoGrid";
import Mission from "@/components/Mission";
import MissionSection from "@/components/MissionSection ";
import Nav from "@/components/Nav";
import Services from "@/components/Services";
import ServicesSection from "@/components/Digital";
import Image from "next/image";
import ScrollRevealComponent from "../components/ScrollReveal";
import MouseSpotlight from "@/components/MouseSpotlight";
import Demo from "@/components/Demo";
import EnhancedCarousel from "@/components/Parallax";
import ContinuousCarousel from "@/components/InfiniteCorousel";
import TestimonialSlider from "@/components/Testimonial";
export default function Home() {
  return (
    <div className=" " style={{ scrollBehavior: "smooth" }}>
       
     
       <ScrollRevealComponent />
      <div className="snap-center ">
      <Hero/>
      </div>

      <div className="snap-center mx-4  reveal ">
        <div className="w-full ">
          <EnhancedCarousel/>
        </div>
      </div>

      <div className="snap-center reveal">
      <MissionSection/>
      </div>

      <div className="snap-center reveal">
        <Mission/>

      </div>

      <div className="snap-center ">
        <IndustriesSection/>

      </div>

      <div className="snap-center ">
      <ContinuousCarousel/>
      
      </div>

      <div className="snap-center reveal">
        <Blog/>

      </div>

      <div className="snap-center reveal">
        <Services/>

      </div>

      <div className="snap-center reveal">
        <TestimonialSlider/>

      </div>

      <div className="snap-center">
        <LogoGrid/>

      </div>

     
   
   </div>
  );
}
