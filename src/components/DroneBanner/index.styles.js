import styled from "@emotion/styled";

const VideoContainer = styled("div")`
  position: relative;
  width: 100%;
  height: 100lvh;

`;

const Video = styled("video")`
  width: 100%;
  height: 100lvh;
  object-fit: cover;
  transition: opacity 0.3s;
  opacity: 1;
`;

const ImagesContainer = styled("div")`
position:absolute;
top:20%;
right:50%;
  width: 30px;
  height:20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;
`;

const StyledImage = styled("img")`

`;

const TextContainer = styled("div")`
  position: absolute;
  top: 0px;
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  color: white;
  opacity: 10;
  transition: opacity 0.3s, transform 0.3s;
  height: 100lvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Video, VideoContainer, TextContainer, ImagesContainer, StyledImage };
