import React, { useRef } from "react";
import starsVideo from "../../assets/videos/star.mp4";

import { VideoContainer, Video, TextContainer } from "./index.styles";

function StarsBanner() {
  const videoRef = useRef(null);

  return (
    <VideoContainer>
      <Video ref={videoRef} src={starsVideo} autoPlay muted loop />
      <TextContainer>
        <p>Innovation Never Ends</p>
      </TextContainer>
    </VideoContainer>
  );
}

export default StarsBanner;
