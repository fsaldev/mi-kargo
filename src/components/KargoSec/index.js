import React from "react";

import Drone from "../../assets/images/drone.jpg";

import {
  Container,
  TextContainer,
  StyledHeading,
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
          <StyledImage src={Drone} alt="drone-stories" />
        </ImagesContainer>
        <BottomText>
          By demonstrating a future of drone based 3D billboard screens that
          offer brands the power to livestream narratives in the sky, our drone
          story truly honors the essence of Cannes Lions - the quintessential
          celebration of creativity and innovation.
        </BottomText>
      </Container>
    </>
  );
}

export default KargoSec;
