import styled from "@emotion/styled";
 
const Container = styled("div")`
  position: relative;
  width: 100%;
  height: 100lvh;
  background-color: black !important;
  opacity:1;
`;
const Container1 = styled("div")`
position:absolute;
  width: 80%;
  height: 100% !important;
//   top:300px;
//   overflow-y:scroll;
  background-color: red !important;
  margin:20px;
  z-index:999;
// padding:50px 50px;
`;

const NestedContainer = styled("div")`
  width: 100%;
  height: 80%;
  overflow-y:scroll;
  background-color: pink !important;
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

const StyledHeading = styled("p")`
position: sticky;
top: 0;
z-index: 1;
  font-size: 30px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  margin: 0px !important;
  text-align: center;
  line-height:38px;
  color:white;
  @media ( max-width:412px){
  padding: 4px 36px;
  }
  @media ( max-width:414px){
    padding: 4px 36px;
  
    }
`;

const ImagesContainer = styled("div")`
  width: 100%;
  height:200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;
  padding: 60px 0px 60px 0px;
`;

const StyledImage = styled("img")`
`;

export {
    Container, Container1,
  TextContainer,
  StyledHeading,
  ImagesContainer,
  StyledImage,
  NestedContainer
};
