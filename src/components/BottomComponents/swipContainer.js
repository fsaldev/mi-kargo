import React, { useEffect, useState } from 'react'
import { Container, ImagesContainer, StyledHeading, StyledImage, StyledText, TextContainer } from './index.styles'

const SwipContainer = ({title,desp,img}) => {

  return (
    <Container>
    <TextContainer>
    <StyledHeading>{title}</StyledHeading>
    <StyledText>
    {desp}
    </StyledText>
    </TextContainer>
    <ImagesContainer>
    <StyledImage src={img} alt="laptop-img" />
    </ImagesContainer>
</Container>
  )
}

export default SwipContainer
