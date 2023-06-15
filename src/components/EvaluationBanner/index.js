import React from "react";

import {
  Container,
  Container1,
  TextContainer,
  StyledText,
  StyledText1,
  StyledHeading,
  Scroller,
} from "./index.styles";

function EvaluationBanner() {
  return (
    <Container>
      <Container1>
        <TextContainer>
          <StyledHeading>The Evolution of Kargo</StyledHeading>
          <Scroller>
            <StyledText>
              Over the course of our first 20 years, we have held steadfast to
              the mainstays of our mission: creativity and innovation.
            </StyledText>
            <StyledText1>
              From our beginnings in mobile to digital and now connectTV, Kargo
              has maintained a singular and unwavering focus on our North Star –
              bringing art to ad tech by marrying beautiful design and
              technological innovation
            </StyledText1>
          </Scroller>
        </TextContainer>
      </Container1>
    </Container>
  );
}

export default EvaluationBanner;
