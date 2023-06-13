import styled from "@emotion/styled";

const Container = styled("div")`
  position: relative;
  width: 100%;
  background-color: #E2E6ED;
  height: 100lvh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledHeading = styled("h3")`
  font-size: 30px;
  padding: 0px 87px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  margin: 0px !important;
  text-align: center;
  line-height:38px;
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
  color: #86868b;
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  padding: 0px 50px;
  text-align: center;
  font-weight: 500;
  margin-top: 15px !important;
  line-height:24px;
`;

export {
  Container,
  TextContainer,
  StyledText,
  StyledHeading,
};
