import React, { useEffect, useRef, useState } from "react";
import droneVideo from "../../assets/videos/DRONE.mp4";
import logo from "../../assets/images/Kargo_logo.png";

import { TextContainer, Video, VideoContainer, ImagesContainer, StyledImage } from "./index.styles";

function DroneBanner() {
  const [showText, setShowText] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleVideoEnd = () => {
      setShowText(true);
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("ended", handleVideoEnd);
      return () => {
        videoElement.removeEventListener("ended", handleVideoEnd);
      };
    }
  }, [videoRef]);

  return (
    <VideoContainer>
      <ImagesContainer>
          <StyledImage src={logo} alt="laptop-img" />
        </ImagesContainer>
      <Video ref={videoRef} src={droneVideo} autoPlay muted loop />
      {/* {showText && ( */}
      <TextContainer>
        <p>The Sky is not the limit</p>
      </TextContainer>
      {/* )} */}
    </VideoContainer>
  );
}

export default DroneBanner;
