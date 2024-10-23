import HeroCardsSection from "./HeroCardsSection";
import HeroContent from "./HeroContent";

const HeroSection = () => {
  return (
    <section className="hero-section MuiBox-root css-0">
      <div className="container MuiBox-root css-0">
        <HeroContent />
        <HeroCardsSection />
      </div>
    </section>
  );
};

export default HeroSection;
