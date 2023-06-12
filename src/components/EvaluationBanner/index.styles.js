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

export {
  Container,
  TextContainer,
  StyledText,
  StyledHeading,
};
