import styled from "@emotion/styled";
import welcomeImage from "../../assets/images/shutterstock_324436823.png";

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
  // background-color: rgba(255, 255, 255, 0.8);
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
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  padding: 0px 50px;
  text-align: center;
  font-weight: 600;
  color: #86868b;
  line-height: 24px;
  margin-top: 15px;
  color:#1D1D1F;
  animation: fadeIn 4s;
  // animation-delay:2s;
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

const StyledHeading = styled("p")`
  margin: 0px !important;
  font-size: 30px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  padding: 0px 51px;
  text-align: center;
  line-height: 38px;
  animation-duration: 2s; 
`;

const BottomContainer = styled("div")`
  position: absolute;
  bottom: 30px;
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
  text-decoration: blink;
	-webkit-animation-name: blinker;
	-webkit-animation-duration: 0.6s;
	-webkit-animation-iteration-count:infinite;
	-webkit-animation-timing-function:ease-in-out;
	-webkit-animation-direction: alternate;
  @-webkit-keyframes blinker {
    from {opacity: 1.0;}
    to {opacity: 0.0;}
  }
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
  BottomImage,
};
