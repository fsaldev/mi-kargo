import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import DroneBanner from "./components/DroneBanner";
import StarsBanner from "./components/StarsBanner";
import NeverEnds from "./components/NeverEndsBanner";
import WelcomeBanner from "./components/WelcomeBanner";
import KargoBanner from "./components/KargoBanner";
import PushingBanner from "./components/PushingBanner";
import StarsVedioBanner from "./components/StarVideoBanner";
import PartnersBanner from "./components/PartnersBanner";
import EvaluationBanner from "./components/EvaluationBanner"
import EvaluationBanner1 from "./components/EvaluationBanner1";
import BottomBanners from "./components/BottomBanner";

function App() {
  return (
    <ParallaxProvider>
      <DroneBanner />
      <StarsBanner />
      <NeverEnds />
      <WelcomeBanner />
      <KargoBanner />
      <PushingBanner />
      <PartnersBanner />
      <StarsVedioBanner />
      <EvaluationBanner />
      <EvaluationBanner1 />
      <BottomBanners />
      {/* <MobileBanner />
      <ExtendedBanner />
      <LaptopBanner /> */}
    </ParallaxProvider>
  );
}

export default App;
