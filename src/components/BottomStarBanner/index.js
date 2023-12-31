import React, { useRef } from "react";
import starsVideo from "../../assets/videos/star.mp4";
import {Animator,ScrollContainer,  ScrollPage, batch, Sticky, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import { VideoContainer, Video, TextContainer } from "./index.styles";

function BottomStarsBanner() {
  const videoRef = useRef(null);

  return (
    <VideoContainer>
      <Video ref={videoRef} src={starsVideo} autoPlay muted loop />
      <Animator animation={batch(Sticky() , MoveIn())} className="scroll">
      <TextContainer>
        <p style={{padding:"0px 50px"}}>Having built a global, omnichannel solution that engages users across every screen with differentiated, impactful creative, it is inspiring to consider the innovations on our horizon - both near and far</p>
      </TextContainer>
      </Animator>
    </VideoContainer>
  );
}

export default BottomStarsBanner;
