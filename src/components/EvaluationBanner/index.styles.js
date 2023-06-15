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
  -webkit-scrollbar{
    display: none !important;
  }
 -webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
    position: absolute;
    right: 1rem;
  }
 -webkit-scrollbar-thumb {
    background-color: transparent;
    outline: 1px solid transparent;
    border-radius: 10px;
    padding-right: 50px;
  }
`;

const Scroller = styled("div")`
  height: 500px;
  overflow:scroll;
  -webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
    position: absolute;
    right: 1rem;
  }
 -webkit-scrollbar-thumb {
    background-color: transparent;
    outline: 1px solid transparent;
  }
`;

const Container1 = styled("div")`
  position: relative;
  width: 100%;
  background-color: #E2E6ED;
  height: 100lvh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top:50%;
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

const StyledText1 = styled("p")`
  margin: 0px !important;
  color: #86868b;
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  padding: 0px 50px;
  text-align: center;
  font-weight: 500;
  // margin-top: 15px !important;
  line-height:24px;
  margin-top:800px !important;
  margin-bottom:290px !important;
`;

export {
  Container,
  Container1,
  TextContainer,
  StyledText,
  StyledText1,
  StyledHeading,
  Scroller,
};
