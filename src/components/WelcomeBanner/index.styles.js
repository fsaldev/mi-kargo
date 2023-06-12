import styled from "@emotion/styled";
import welcomeImage from "../../assets/images/shutterstock_324436823.jpg";

const Container = styled("div")`
  position: relative;
  width: 100%;
  height: 100lvh;
`;

const BackgroundImage = styled("div")`
  width: 100%;
  height: 100lvh;
  object-fit: cover;
  filter: blur(5px);
  -webkit-filter: blur(5px);
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
  height: 100lvh;
  background-color: rgba(255, 255, 255, 0.8);
`;

const TextContainer = styled("div")`
  position: absolute;
  top: 0px;
  width: 100%;
  font-weight: bold;
  height: 100lvh;
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

const BottomContainer = styled("div")`
  position: absolute;
  bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 2px;
  width: 100%;
`;

const BottomText = styled("p")`
  margin: 0px !important;
  font-weight: 600;
  font-size: 15px;
`;

const BottomImage = styled("img")`
  margin: 0px !important;
  width: 60px;
  height: 40px;
`;

export {
  Container,
  BackgroundImage,
  TextContainer,
  BackgroundOverlay,
  StyledText,
  StyledHeading,
  BottomContainer,
  BottomText,
  BottomImage
};
