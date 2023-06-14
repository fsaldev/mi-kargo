import styled from "@emotion/styled";

const VideoContainer = styled("div")`
  position: relative;
  width: 100%;
  height: 100lvh;
`;

const Video = styled("video")`
  width: 100%;
  height: 100lvh;
  object-fit: cover;
  transition: opacity 0.3s;
  opacity: 1;
`;

const TextContainer = styled("div")`
  position: absolute;
  top: 0px;
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  color: white;
  opacity: 10;
  transition: opacity 0.3s, transform 0.3s;
  height: 100lvh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column
`;

const StyledText = styled("p")`
//   margin: 0px !important;
  font-size: 17px;
font-family: 'Poppins', sans-serif;
  padding: 0px 50px;
  text-align: center;
  font-weight: 600;
  color:#86868B;
  line-height:24px;
  margin-top:15px;
  color:black;
  animation: fadeIn 4s;
  // animation-delay:2s;
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

const StyledHeading = styled("p")`
font-size: 30px;
font-family: 'Poppins', sans-serif;
font-weight: 600;
margin: 0px !important;
padding: 0px 51px;
text-align: center;
line-height:38px;
color:black;
animation-duration: 2s; 
`;

const BottomContainer = styled("div")`
  position: absolute;
  bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 2px;
  width: 100%;
`;

const BottomText = styled("p")`
  margin: 0px !important;
  font-weight: 600;
  font-size: 18px;
  font-family:Poppins !important;
`;

const BottomImage = styled("img")`
  margin: 0px !important;
  width: 60px;
  height: 40px;
  text-decoration: blink;
	-webkit-animation-name: blinker;
	-webkit-animation-duration: 0.6s;
	-webkit-animation-iteration-count:infinite;
	-webkit-animation-timing-function:ease-in-out;
	-webkit-animation-direction: alternate;
  @-webkit-keyframes blinker {
    from {opacity: 1.0;}
    to {opacity: 0.0;}
  }
`;

export { Video, VideoContainer, TextContainer, StyledText, StyledHeading , BottomContainer ,BottomText ,BottomImage  };
