import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import DroneBanner from "./components/DroneBanner";
import StarsBanner from "./components/StarsBanner";
import NeverEnds from "./components/NeverEndsBanner";
import WelcomeBanner from "./components/WelcomeBanner";
import KargoBanner from "./components/KargoBanner";
import PushingBanner from "./components/PushingBanner";
import KargoSec from "./components/KargoSec";
import StarsVedioBanner from "./components/StarVideoBanner";
import PartnersBanner from "./components/PartnersBanner";
import EvaluationBanner from "./components/EvaluationBanner";
import BottomComponents from "./components/BottomComponents";

function App() {
  return (
    <ParallaxProvider>
      <DroneBanner />
      <StarsBanner />
      <NeverEnds />
      <WelcomeBanner />
      <KargoBanner />
      <PushingBanner />
      <KargoSec/>
      <PartnersBanner />
      <StarsVedioBanner />
      <EvaluationBanner />
      <BottomComponents />
    </ParallaxProvider>
  );
}

export default App;
