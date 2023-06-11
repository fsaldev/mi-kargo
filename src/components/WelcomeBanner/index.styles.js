import styled from "@emotion/styled";
import welcomeImage from "../../assets/images/shutterstock_324436823.jpg";

const Container = styled("div")`
  position: relative;
  width: 100%;
  height: 95vh;
`;

const BackgroundImage = styled("div")`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  filter: blur(10px);
  -webkit-filter: blur(10px);
  background-image: url(${welcomeImage});
  background-repeat: no-repeat;
  background-size: cover;
  mix-blend-mode: overlay;
`;

const BackgroundOverlay = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.3);
`;

const TextContainer = styled("div")`
  position: absolute;
  top: 0px;
  width: 100%;
  font-weight: bold;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledText = styled("p")`
  margin: 0px !important;
  font-size: 15px;
  padding: 0px 50px;
  text-align: center;
  font-weight: 500;
`;

const StyledHeading = styled("p")`
  margin: 0px !important;
  font-size: 24px;
  padding: 0px 50px;
  text-align: center;
`;

export {
  Container,
  BackgroundImage,
  TextContainer,
  BackgroundOverlay,
  StyledText,
  StyledHeading
};
