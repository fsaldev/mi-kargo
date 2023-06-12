import styled from "@emotion/styled";
import welcomeImage from "../../assets/images/shutterstock_600612044.jpg";

const Container = styled("div")`
  position: relative;
  width: 100%;
  height: 100vh;
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
  background-color:#e2e6ed;
`;

const StyledText = styled("p")`
  font-size: 20px;
  padding: 0px 50px;
  text-align: center;
  font-weight: 500;
  color:#86868B;
  margin-top:15px;
`;

const StyledHeading = styled("p")`
  margin: 0px !important;
  font-size: 30px;
  font-weight:600;
  padding: 0px 50px;
  text-align: center;
`;

export {
  Container,
  BackgroundImage,
  TextContainer,
  StyledText,
  StyledHeading,
};
