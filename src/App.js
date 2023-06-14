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
import BottomStarsBanner from "./components/BottomStarBanner"
import EvaluationBanner1 from "./components/EvaluationBanner1";
import LogosBanner from "./components/LogosBanner";
function App() {
  const a = document.getElementById("make-animation");
  console.log(a);
  return (
    <ParallaxProvider>
      <DroneBanner />
      <StarsBanner />
      <NeverEnds />
      <WelcomeBanner />
      <KargoBanner />
      <LogosBanner />
      {/* <PushingBanner /> */}
      {/* <KargoSec/> */}
      {/* <PartnersBanner /> */}
      <StarsVedioBanner />
      <EvaluationBanner />
      {/* <EvaluationBanner1 /> */}
      <BottomComponents />
      <BottomStarsBanner />
    </ParallaxProvider>
  );
}

export default App;
