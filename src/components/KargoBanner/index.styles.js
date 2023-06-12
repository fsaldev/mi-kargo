import styled from "@emotion/styled";

const Container = styled("div")`
  position: relative;
  width: 100%;
  height: 95vh;
`;

const BackgroundOverlay = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #D0D4DA;
  opacity: 0.6;
`;

const TextContainer = styled("div")`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledText = styled("p")`
  font-size: 15px;
  padding: 0px 50px;
  text-align: center;
  font-weight: 500;
  margin-top:15px
`;

const StyledHeading = styled("h2")`
  margin: 0px !important;
  padding: 0px 50px;
  text-align: center;
`;

export {
  Container,
  TextContainer,
  BackgroundOverlay,
  StyledText,
  StyledHeading,
};
