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
  background-color: #E2E6ED;
  opacity: 0.7;
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
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  padding: 0px 32px;
  text-align: center;
  font-weight: 500;
  margin-top: 15px;
  line-height:17px;
`;

const StyledHeading = styled("p")`
  font-size: 30px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  margin: 0px !important;
  padding: 4px 46px;
  text-align: center;
  line-height:38px;
  @media ( max-width:390px){
  padding: 4px 36px;

  }
`;

export {
  Container,
  TextContainer,
  BackgroundOverlay,
  StyledText,
  StyledHeading,
};
