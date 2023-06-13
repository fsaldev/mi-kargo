import styled from "@emotion/styled";

const Container = styled("div")`
  position: relative;
  width: 100%;
  height: 100lvh;
`;

const BackgroundOverlay = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100lvh;
  background-color: #d0d4da;
  opacity: 0.6;
`;

const TextContainer = styled("div")`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100lvh;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledText = styled("p")`
  font-size: 12px;
  font-weight: 500;
  padding: 0px 50px;
  text-align: center;
  font-weight: 500;
  margin-top: 15px;
`;

const StyledHeading = styled("p")`
  font-size: 30px;
  font-weight: 600;
  margin: 0px !important;
  padding: 4px 70px;
  text-align: center;
`;

export {
  Container,
  TextContainer,
  BackgroundOverlay,
  StyledText,
  StyledHeading,
};
