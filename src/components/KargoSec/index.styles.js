import styled from "@emotion/styled";

const Container = styled("div")`
  position: relative;
  width: 100%;
  background-color: black;
  height: 100lvh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledHeading = styled("h3")`
  margin: 0px !important;
  font-size: 14px;
  font-weight: 500;

  padding: 0px 50px;
  text-align: center;
  color: #86868b;
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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;
`;

const StyledImage = styled("img")`
  width: 100lvh;
  margin: 30px 0px;
  @media (max-width: 850px) {
    width: 100%;
    margin: 90px 0px;
  }
  // height: 500px;
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
  font-weight: 500;
  font-size: 14px;
  color: #86868b;
  padding: 0px 40px;
  text-align: center;
`;

export {
  Container,
  TextContainer,
  StyledText,
  StyledHeading,
  ImagesContainer,
  BottomContainer,
  BottomText,
  StyledImage,
};
