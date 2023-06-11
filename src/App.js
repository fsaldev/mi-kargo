import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import DroneBanner from "./components/DroneBanner";
import StarsBanner from "./components/StarsBanner";
import NeverEnds from "./components/NeverEndsBanner";

function App() {
  return (
    <ParallaxProvider>
      <DroneBanner />
      <StarsBanner />
      <NeverEnds />
    </ParallaxProvider>
  );
}

export default App;
