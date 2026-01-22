import "./App.css";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/sections/IntroSection";
import AlternatingBlocks from "./components/sections/AlternatingBlocks";
import FeatureGrid from "./components/sections/FeatureGrid";
import CallToAction from "./components/sections/CallToAction";
import SiteFooter from "./components/layout/SiteFooter";

const App = () => {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <AlternatingBlocks />
      <FeatureGrid />
      <CallToAction />
      <SiteFooter />
    </>
  );
};

export default App;
