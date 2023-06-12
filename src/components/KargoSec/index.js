import React from "react";

import DroneBg from "../../assets/images/joshua-fuller-u1EGfuB4llU-unsplash.jpg";

import {
  Container,
  TextContainer,
  StyledText,
  StyledHeading,
  BottomContainer,
  BottomText,
  ImagesContainer,
  StyledImage,
} from "./index.styles";

function KargoSec() {
  return (
    <>
      <Container>
        <TextContainer>
          <StyledHeading>
            Utilizing 600 drones in a well-orchestrated, meticulous concert of
            movement, our drone story depicts the evolution of media for all of
            Cannes Lions to experience.
          </StyledHeading>
        </TextContainer>
        <ImagesContainer>
          <StyledImage src={DroneBg} alt="drone-stories" />
        </ImagesContainer>
        <BottomText>
          By demonstrating a future of drone based 3D billboard screens that
          offer brands the power to livestream narratives in the sky, our drone
          story truly honors the essence of Cannes Lions - the quintessential
          celebration of creativity and innovation.
        </BottomText>
      </Container>
      {/* <BottomContainer>
        <BottomText>
          We want to extend special thanks to our partners at LG Ads who share
          our vision of reimagining the biggest screen in our living room as an
          attention getting 4000(verify) square foot screen in the sky. In
          addition, we want to thank Influential for hosting our viewing party.
        </BottomText>
      </BottomContainer> */}
    </>
  );
}

export default KargoSec;
