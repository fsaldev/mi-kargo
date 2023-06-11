import React from "react";

import icon from "../../assets/images/icon_1684508_edited.png";

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
  return (
    <Container>
      <BackgroundImage />
      <BackgroundOverlay />
      <TextContainer>
        <StyledHeading>Welcome to the evoution of media</StyledHeading>
        <StyledText>Showtimes 6/19, 6/20, 6/21 at 10PM & 11.30PM</StyledText>
      </TextContainer>
      <BottomContainer>
        <BottomText>Learn More</BottomText>
        <BottomImage src={icon} alt="drop-down" />
      </BottomContainer>
    </Container>
  );
}

export default WelcomeBanner;
