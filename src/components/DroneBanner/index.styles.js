import styled from "@emotion/styled";

const VideoContainer = styled("div")`
  position: relative;
  width: 100%;
  height: 95vh;

`;

const Video = styled("video")`
  width: 100%;
  height: 98vh;
  object-fit: cover;
  transition: opacity 0.3s;
  opacity: 1;
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
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Video, VideoContainer, TextContainer };
