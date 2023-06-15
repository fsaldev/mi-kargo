import styled from "@emotion/styled";

const Container = styled("div")`
  position: relative;
  width: 100vw;
  background-color: #ffffff;
  height: 100lvh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: 1;
  transition: opacity 1s ease-out-in;
`;

const StyledHeading = styled("h3")`
  font-size: 30px;
  padding: 0px 50px;
  text-align: center;
`;

const TextContainer = styled("div")`
  width: 100%;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledText = styled("p")`
  margin: 0px !important;
  font-size: 20px;
  padding: 0px 29px;
  text-align: center;
  font-weight: 500;
  color: #86868b;
  @media (max-width: 375px) {
    padding: 0px 21px;
  }
  @media (max-width: 360px) {
    padding: 0px 14px;
  }
`;

const ImagesContainer = styled("div")`
  margin-top: 20px;
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;
`;

const StyledImage = styled("img")`
  height: 100%;
`;

export {
  Container,
  TextContainer,
  StyledText,
  StyledHeading,
  ImagesContainer,
  StyledImage,
};
