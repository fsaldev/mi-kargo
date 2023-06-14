// import styled from "@emotion/styled";
// import { COLORS } from "../../constants/colors";

// const BackgroundContainer = styled("div")`
//   width: 100%;
//   height: 80vh;
//   background-color: ${COLORS.BLACK}
// `;

// const TextContainer = styled("div")`
//   width: 100%;
//   font-size: 24px;
//   font-weight: bold;
//   color: white;
//   opacity: 10;
//   padding-top: 10rem;
//   display: flex;
//   justify-content: center;
// `;

// export { BackgroundContainer, TextContainer };

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

export { Video, VideoContainer, TextContainer };

