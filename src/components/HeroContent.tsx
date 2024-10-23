import HeroButton from "./HeroButton";
import HeroIconSection from "./HeroIconSection";
import HeroImage from "./HeroImage";

const HeroContent = () => {
  return (
    <div className="hero-content-main MuiBox-root css-0">
      <p className="MuiTypography-root MuiTypography-body1 hero-heading css-1woqsuu">Wishing Wallet</p>
      <p className="MuiTypography-root MuiTypography-body1 hero-para css-1woqsuu">
        Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry
      </p>
      <HeroImage />
      <HeroButton />
      <HeroIconSection />
    </div>
  );
};

export default HeroContent;

