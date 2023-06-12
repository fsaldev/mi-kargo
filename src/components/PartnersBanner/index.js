import React from "react";

import droneStoriesIcon from "../../assets/images/1631702984986.png";
import novaStoriesIcon from "../../assets/images/NovaSkyStories.png";
import tapeAgencyIcon from "../../assets/images/tap.png";

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

function PartnersBanner() {
  return (
    <>
      <Container>
        <TextContainer>
          <StyledHeading>Thank you to our partners</StyledHeading>
          <StyledText>
            This drone show has been made possible by best in class drone
            companies Drone Stories and Nova Sky Stories and our creative
            partners at Tape, an exciting new experiential media company.
          </StyledText>
        </TextContainer>
        <ImagesContainer>
          <StyledImage src={droneStoriesIcon} alt="drone-stories" />
          <StyledImage src={novaStoriesIcon} alt="nova-stories" />
          <StyledImage src={tapeAgencyIcon} alt="tape-agencies" />
        </ImagesContainer>
        <BottomContainer>
        <BottomText>
          We want to extend special thanks to our partners at LG Ads who share
          our vision of reimagining the biggest screen in our living room as an
          attention getting 4000(verify) square foot screen in the sky. In
          addition, we want to thank Influential for hosting our viewing party.
        </BottomText>
      </BottomContainer>
      </Container>
    </>
  );
}

export default PartnersBanner;
