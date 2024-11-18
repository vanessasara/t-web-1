import BestSolutionsSection from "@/components/sections/BestSolutionsSection";
import HeroSection from "@/components/sections/Hero";
import LogoTicker from "@/components/sections/LogoTicker";
import ServicesSection from "@/components/sections/AwesomeService";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";




export default function Home() {
  return (
    <div>
      
      <HeroSection />
      <LogoTicker />
      <ServicesSection />
      <BestSolutionsSection />
      <Testimonials />
      <Contact />
    </div>
  );
}
