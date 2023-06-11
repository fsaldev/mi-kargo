import styled from "@emotion/styled";
import { COLORS } from "../../constants/colors";

const BackgroundContainer = styled("div")`
  width: 100%;
  height: 80vh;
  background-color: ${COLORS.BLACK}
`;

const TextContainer = styled("div")`
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  color: white;
  opacity: 10;
  padding-top: 10rem;
  display: flex;
  justify-content: center;
`;

export { BackgroundContainer, TextContainer };
