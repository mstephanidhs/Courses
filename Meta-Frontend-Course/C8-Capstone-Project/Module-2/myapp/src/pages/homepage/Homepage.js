import HeroSection from "../../components/homepage/sections/hero-section/HeroSection";
import Highlights from "../../components/homepage/sections/highlights-section/Highlights";
import Testimonials from "../../components/homepage/sections/testimonials-section/Testimonials";

function Homepage() {
    return (
      <>
        <HeroSection />
        <Highlights />
        <Testimonials />
      </>
    );
}

export default Homepage;