import React, { useRef } from "react";
import starsVideo from "../../assets/videos/star.mp4";

import { VideoContainer, Video, TextContainer, StyledText, StyledHeading} from "./index.styles";

function StarsVedioBanner() {
  const videoRef = useRef(null);

  return (
    <VideoContainer>
      <Video ref={videoRef} src={starsVideo} autoPlay muted loop />
      <TextContainer>
        <StyledHeading>We hope you enjoy the show</StyledHeading>
        <StyledText>We hope you enjoy the show, and please remember, there will be more chances to watch it again at additional show times throughout weak.</StyledText>
        <StyledText>Showtimes 6/19, 6/20, 6/21 930PM  1030PM</StyledText>
      </TextContainer>
    </VideoContainer>
  );
}

export default StarsVedioBanner;
