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
import {Animator,ScrollContainer,  ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

function App() {
  return (
    <ParallaxProvider>
      <ScrollContainer>
      <ScrollPage className="scrollPAge">
      <DroneBanner />
      </ScrollPage>
      <ScrollPage className="scrollPAge">
      <StarsBanner />
      </ScrollPage>
      <ScrollPage className="scrollPAge">
      <NeverEnds />
      </ScrollPage>
      <ScrollPage className="scrollPAge">
      <WelcomeBanner />
      </ScrollPage>
      <ScrollPage className="scrollPAge">
      <KargoBanner />
      </ScrollPage>
      <ScrollPage className="scrollPAge">
      <LogosBanner />
      </ScrollPage>
      {/* <PushingBanner /> */}
      {/* <KargoSec/> */}
      {/* <PartnersBanner /> */}
      <ScrollPage className="scrollPAge">
      <StarsVedioBanner />
      </ScrollPage>
      <ScrollPage className="scrollPAge">
      <EvaluationBanner />
      </ScrollPage>
      {/* <EvaluationBanner1 /> */}
      <ScrollPage className="scrollPAge">
      <BottomComponents />
      </ScrollPage>
      <ScrollPage className="scrollPAge">
         <BottomStarsBanner />
         </ScrollPage>
      </ScrollContainer>
    </ParallaxProvider>
  );
}

export default App;
