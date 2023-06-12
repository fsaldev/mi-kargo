import React from "react";

import {
  Container,
  TextContainer,
  StyledText,
  StyledHeading,
} from "./index.styles";

function EvaluationBanner() {
  return (
      <Container>
        <TextContainer>
          <StyledHeading>The Evaluation of Kargo</StyledHeading>
          <StyledText>
          Over the course of our first 20 years, we have held steadfast to the mainstays of our mission: creativity and innovation. 
          </StyledText>
        </TextContainer>
      </Container>
  );
}

export default EvaluationBanner;
