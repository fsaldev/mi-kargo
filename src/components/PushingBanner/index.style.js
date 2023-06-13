import styled from "@emotion/styled";
import welcomeImage from "../../assets/images/shutterstock_600612044.jpg";

const Container = styled("div")`
  position: relative;
  width: 100%;
  height: 100lvh;
`;

const BackgroundImage = styled("div")`
  width: 100vw;
  height: 45%;
  object-fit: cover;
  background-image: url(${welcomeImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const TextContainer = styled("div")`
  width: 100%;
  font-weight: bold;
  height: 55%;
  display: flex;
  flex-direction: column;
  background-color: #E2E6ED;
  opacity: 0.7;
`;

const StyledText = styled("p")`
font-size: 18px;
font-family: 'Poppins', sans-serif;
font-weight: 600;
padding: 0px 32px;
text-align: center;
font-weight: 500;
margin-top: 15px;
line-height:24px;
color:#86868B;
`;

const StyledHeading = styled("p")`
font-size: 30px;
font-family: 'Poppins', sans-serif;
font-weight: 600;
margin: 0px !important;
padding: 4px 46px;
text-align: center;
line-height:38px;
color:#1D1D1F;
z-index:99
`;

export {
  Container,
  BackgroundImage,
  TextContainer,
  StyledText,
  StyledHeading,
};
