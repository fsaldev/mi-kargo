import styled from "@emotion/styled";

const Container = styled("div")`
  position: relative;
  width: 100%;
  height: 95vh;
`;

const BackgroundImage = styled("img")`
    width: 100%;
    height: 100vh;
    object-fit: cover;
`

const TextContainer = styled("div")`
  position: absolute;
  top: 0px;
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  color: white;
  opacity: 10;
  transition: opacity 0.3s, transform 0.3s;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Video, VideoContainer, TextContainer };
