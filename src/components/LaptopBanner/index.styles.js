import styled from "@emotion/styled";

const Container = styled("div")`
  position: relative;
  width: 100vw;
  background-color: #FFFFFF;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
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
  padding: 0px 50px;
  text-align: center;
  font-weight: 500;
  color: #86868b;
`;

const ImagesContainer = styled("div")`
  width: 100%;
  height:390px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;
`;

const StyledImage = styled("img")`
width:100vw;
`;

export {
  Container,
  TextContainer,
  StyledText,
  StyledHeading,
  ImagesContainer,
  StyledImage,
};
