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
import KargoSec from "./components/KargoSec";

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
    </ParallaxProvider>
  );
}

export default App;
