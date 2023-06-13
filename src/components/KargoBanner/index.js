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
        At Kargo, we believe there are no limits to the possibilities of media.
        </StyledHeading>
        <StyledText>We know that exploring what’s next never ends. Launching first in mobile in 2003, we expanded to digital, and now, with our recent move into connected tv, Kargo is on every screen, everywhere. But this is truly just the beginning of our exciting journey. The activation you are experiencing in the sky tonight is the launching point for Kargo’s groundbreaking series of new media experiments pushing the boundaries of what’s possible.</StyledText>
      </TextContainer>
    </Container>
  );
}

export default KargoBanner;
