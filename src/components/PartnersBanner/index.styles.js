import styled from "@emotion/styled";

const Container = styled("div")`
  position: relative;
  width: 100%;
  background-color: #f5f5f7;
  height: 100lvh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledHeading = styled("h3")`
    // margin: 0px !important;
  font-size: 30px;
  text-align: center;
  padding: 0px 87px;
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
  font-size: 12px;
  padding: 0px 50px;
  text-align: center;
  font-weight: 500;
  color: #86868b;
  // @media (max-width: 375px) {
  //   font-size: 13px;
  // }

`;

const ImagesContainer = styled("div")`
  width: 100%;
  height:30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;
  padding: 60px 0px 60px 0px;
`;

const StyledImage = styled("img")`
  height: 30%;
`;

const BottomContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: #f5f5f7;
  padding: 1em 0em; 
`;

const BottomText = styled("p")`
  margin: 0px !important;
  font-weight: 600;
  font-size: 12px;
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
