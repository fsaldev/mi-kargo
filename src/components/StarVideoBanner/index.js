import React, { useRef , useState} from "react";
// import starsVideo from "../../assets/videos/star.mp4";
import icon from "../../assets/images/icon_1684508_edited.png";
import 'animate.css';
import ScrollTrigger from 'react-scroll-trigger';

import { VideoContainer, Video, TextContainer, StyledText, StyledHeading,BottomContainer,BottomText,BottomImage} from "./index.styles";

function StarsVedioBanner() {
  // const videoRef = useRef(null);
  const [check, setCheck]=useState(false);

  return (
    <ScrollTrigger onEnter={()=>setCheck(true)} onExit={()=>setCheck(false)}>
     {check &&<VideoContainer>
      {/* <Video ref={videoRef} src={starsVideo} autoPlay muted loop /> */}
      <TextContainer>
        <StyledHeading className=" animate__bounceInUp">We hope you enjoy the show</StyledHeading>
        <StyledText>We hope you enjoy the show, and please remember, there will be more chances to watch it again at additional show times throughout weak.</StyledText>
        <StyledText>Showtimes 6/19, 6/20, 6/21 930PM  1030PM</StyledText>
      </TextContainer>
      <BottomContainer>
        <BottomText>About Kargo</BottomText>
        <BottomImage src={icon} alt="drop-down" />
      </BottomContainer>
    </VideoContainer>}
    </ScrollTrigger>
  );
}

export default StarsVedioBanner;
