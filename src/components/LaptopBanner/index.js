import React from "react";
import laptop from "../../assets/images/AD_STACK_Campbells_4.20_AA.png";

import {
  Container,
  TextContainer,
  StyledText,
  StyledHeading,
  ImagesContainer,
  StyledImage,
} from "./index.styles";

function ExtendedBanner() {
  return (
      <Container>
        <TextContainer>
          <StyledHeading>2023</StyledHeading>
          <StyledText>
            Now, with our recent move into connected tv, Kargo is on every
            screen, everywhere.
          </StyledText>
        </TextContainer>
        <ImagesContainer>
          <StyledImage src={laptop} alt="laptop-img" />
        </ImagesContainer>
      </Container>
  );
}

export default ExtendedBanner;
