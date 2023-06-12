import React from "react";
import phone from "../../assets/images/phone.png";

import {
  Container,
  TextContainer,
  StyledText,
  StyledHeading,
  ImagesContainer,
  StyledImage
} from "./index.styles";

function MobileBanner() {
  return (
      <Container>
        <TextContainer>
          <StyledHeading>2003</StyledHeading>
          <StyledText>
            Launching in Mobile
          </StyledText>
        </TextContainer>
        <ImagesContainer>
        <StyledImage src={phone} alt="mobile-img" />
        </ImagesContainer>
      </Container>
  );
}

export default MobileBanner;
