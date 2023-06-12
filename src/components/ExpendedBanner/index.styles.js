import styled from "@emotion/styled";

const Container = styled("div")`
  width: 100%;
  background-color: #FFFFFF;
  height: 100lvh;
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
  height:81px;
  font-size: 20px;
  padding: 0px 50px;
  text-align: center;
  font-weight: 500;
  color: #86868b;
`;

const ImagesContainer = styled("div")`
  margin-top: 20px;
  width: 100%;
height:390px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;
`;

const StyledImage = styled("img")`
  height: 90vw;
`;

export {
  Container,
  TextContainer,
  StyledText,
  StyledHeading,
  ImagesContainer,
  StyledImage,
};
