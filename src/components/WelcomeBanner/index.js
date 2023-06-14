import React,{useState} from "react";
import 'animate.css';
import icon from "../../assets/images/icon_1684508_edited.png";
import ScrollTrigger from 'react-scroll-trigger';

import {
  Container,
  TextContainer,
  BackgroundImage,
  BackgroundOverlay,
  StyledText,
  StyledHeading,
  BottomContainer,
  BottomText,
  BottomImage,
} from "./index.styles";

function WelcomeBanner() {
  const [check, setCheck]=useState(false);

  return (
      <ScrollTrigger onEnter={()=>setCheck(true)} onExit={()=>setCheck(false)}>
    {check && <Container>
      <BackgroundImage />
      <BackgroundOverlay />
     <TextContainer>
        <StyledHeading className=" animate__bounceInUp">Welcome to the evolution of media.</StyledHeading>
        <StyledText>Showtimes 6/19, 6/20, 6/21 10PM & 11:30PM</StyledText>
      </TextContainer>
      <BottomContainer>
        <BottomText>Learn More</BottomText>
        <BottomImage src={icon} alt="drop-down"/>
      </BottomContainer>
    </Container>}
    </ScrollTrigger>
  );
}

export default WelcomeBanner;
