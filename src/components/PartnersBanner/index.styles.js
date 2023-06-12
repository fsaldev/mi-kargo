import styled from "@emotion/styled";

const Container = styled("div")`
  position: relative;
  width: 100%;
  background-color: #f5f5f7;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledHeading = styled("h3")`
  margin: 0px !important;
  font-size: 24px;
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
  font-size: 15px;
  padding: 0px 50px;
  text-align: center;
  font-weight: 500;
  color: #86868b;
`;

const ImagesContainer = styled("div")`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;
`;

const StyledImage = styled("img")`
  width: 120px;
  height: 80px;
`;

const BottomContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: #f5f5f7;
  height: 40vh;
`;

const BottomText = styled("p")`
  margin: 0px !important;
  font-weight: 600;
  font-size: 15px;
  color: #86868b;
  padding: 150px 40px;
  text-align: center;
`;

const BottomImage = styled("img")`
  margin: 0px !important;
  width: 60px;
  height: 40px;
`;

export {
  Container,
  TextContainer,
  StyledText,
  StyledHeading,
  ImagesContainer,
  BottomContainer,
  BottomText,
  BottomImage,
  StyledImage,
};
