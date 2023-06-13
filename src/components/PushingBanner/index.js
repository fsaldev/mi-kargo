import React from "react";

import {
  Container,
  TextContainer,
  BackgroundImage,
  StyledText,
  StyledHeading,
} from "./index.style";

function PushingBanner() {
  return (
    <Container>
      <BackgroundImage />
      <TextContainer>
        <StyledHeading>Pushing the boundaries of  what's possible</StyledHeading>
        <StyledText>Drones as a medium is a new, uncharted frontier and has the potential to revolutionize the industry with limitless, awe-inspiring interactive billboards. Kargo's drone story is a first of its kind example of this avant-garde media solution.</StyledText>
      </TextContainer>
    </Container>
  );
}

export default PushingBanner;
