import styled from "@emotion/styled";

const VideoContainer = styled("div")`
  position: relative;
//   width: 100%;
  height: 100lvh;
`;

const Video = styled("video")`
  width: 100%;
  height: 100lvh;
  object-fit: cover;
  transition: opacity 0.3s;
  opacity: 1;
`;

const TextContainer = styled("div")`
  position: absolute;
  top: 0px;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  line-height:24px;
  font-family:Poppins !important;
  color: white;
  opacity: 10;
  transition: opacity 0.3s, transform 0.3s;
  height: 100lvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Video, VideoContainer, TextContainer };
