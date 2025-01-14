import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import IndustriesSection from "@/components/IndustriesSection";
import LogoGrid from "@/components/LogoGrid";
import Mission from "@/components/Mission";
import MissionSection from "@/components/MissionSection ";
import Services from "@/components/Services";
import EnhancedCarousel from "@/components/Parallax";
import TestimonialSlider from "@/components/Testimonial";
import TripleCarousel from "@/components/DualCorousel";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollRevealComponent from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className=" overflow-hidden" style={{ scrollBehavior: "smooth" }}>


      <LoadingScreen>
      

      <ScrollRevealComponent/>
      <div className="snap-center ">
        <Hero />
      </div>

      <div className="snap-center mx-4  reveal ">
        <div className="w-full ">
          <EnhancedCarousel />
        </div>
      </div>

      <div className="snap-center reveal">
        <MissionSection />
      </div>

      <div className="snap-center ">
        <Mission />

      </div>

      <div className="snap-center reveal">
        <IndustriesSection />

      </div>

      <div className="snap-center ">
        <TripleCarousel/>

      </div>

      <div className="snap-center ">
        <Blog />

      </div>

      <div className="snap-center">
        <Services />

      </div>

      <div className="snap-center reveal">
        <TestimonialSlider />

      </div>

      <div className="snap-center">
        <LogoGrid />

      </div>

      </LoadingScreen>

    </div>

  );
}
