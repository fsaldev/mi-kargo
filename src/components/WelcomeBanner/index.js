import React from "react";
import {
  Container,
  TextContainer,
  BackgroundImage,
  BackgroundOverlay,
  StyledText,
  StyledHeading,
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
    </Container>
  );
}

export default WelcomeBanner;
