import React, { useRef } from "react";
import starsVideo from "../../assets/videos/star.mp4";

import { VideoContainer, Video, TextContainer, StyledText, StyledHeading,BottomContainer,BottomText,BottomImage} from "./index.styles";


function NeverEnds() {
  const videoRef = useRef(null);

  return (
    <VideoContainer>
    <Video ref={videoRef} src={starsVideo} autoPlay muted loop />
    <TextContainer>
      <p>Next Never Ends</p>
    </TextContainer>
  </VideoContainer>
  );
}

export default NeverEnds;
