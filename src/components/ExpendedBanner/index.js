import React from "react";
import phone from "../../assets/images/mobiles.png";

import {
  Container,
  TextContainer,
  StyledText,
  StyledHeading,
  ImagesContainer,
  StyledImage
} from "./index.styles";

function ExtendedBanner() {
  return (
      <Container>
        <TextContainer>
          <StyledHeading>2008</StyledHeading>
          <StyledText>
            Expanded to Digital
          </StyledText>
        </TextContainer>
        <ImagesContainer>
        <StyledImage src={phone} alt="mobile-img" />
        </ImagesContainer>
      </Container>
  );
}

export default ExtendedBanner;
