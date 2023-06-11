import React from "react";

import {
  Container,
  TextContainer,
  BackgroundOverlay,
  StyledText,
  StyledHeading,
} from "./index.styles";

function KargoBanner() {
  return (
    <Container>
      <BackgroundOverlay />
      <TextContainer>
        <StyledHeading>
          At Kargo, we beleive there are no limits to the possibilities of media
        </StyledHeading>
        <StyledText>Showtimes 6/19, 6/20, 6/21 at 10PM & 11.30PM</StyledText>
      </TextContainer>
    </Container>
  );
}

export default KargoBanner;
