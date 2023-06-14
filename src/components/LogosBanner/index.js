import React, { useState } from "react";
import dronelogo from "../../assets/images/drone-stories.png";
import novalogo from "../../assets/images/NOVA-logo.png";
import taplogo from "../../assets/images/TAPE-logo.png";
import solutionlogo from "../../assets/images/LGAd-Solutions-white.png";
// import ScrollTrigger from "react-scroll-trigger";
import "./index.css";
import { TweenLite , TimelineMax} from 'gsap';
import {
  Container,
  TextContainer,
  StyledHeading,
  ImagesContainer,
  Container1,
  NestedContainer,
  StyledImage,
} from "./index.styles";

function LogosBanner() {
    
//   const [currentImage, setCurrentImage] = useState(images[0]);
  const [check1, setCheck1] = useState(0);
  console.log(check1);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const images = [dronelogo, novalogo, taplogo, solutionlogo];

//   TweenLite.defaultEase = Linear.easeNone;
  
  var viewSteps = document.querySelectorAll(".step");
  
  var viewportHeight = window.innerHeight;
  
  var scroller = {  
    container: document.querySelector("#scroll-container"),
    viewportHeight: viewportHeight,
    stepHeight: Math.max(viewportHeight, 2500),
    scrollHeight: 0,
    padding: 400,
    steps: [],
    step: 0,
    y: 0
  };
  
  var tl = new TimelineMax({
    paused: true,
    onUpdate: update
  });
  
  for (var i = 0; i < viewSteps.length; i++) { 
    addStep(viewSteps[i], scroller.stepHeight, scroller.padding, i);  
  }
  
  TweenLite.set(document.body, { 
    height: scroller.scrollHeight + scroller.viewportHeight
  });
  
  TweenLite.set(scroller.container, { 
    height: scroller.scrollHeight,
    force3D: true
  });
  
  var info = createInfo();
  var requestId = null;
  
  window.addEventListener("scroll", requestUpdate);
  update();
  
  function addStep(element, size, padding, index) {
      
    var step = {
      height: element.clientHeight,
      size: size,
      pad: padding,
      progress: 0
    };
    
    if (index > 0 ) {
      
      var last = scroller.steps[index - 1];
          
      tl.set(scroller, { step: index - 1 }, scroller.scrollHeight)    
        .to(scroller.container, last.height, { y: "-=" + last.height }, scroller.scrollHeight);
    }
     
    tl.set(scroller, { step: index }, scroller.scrollHeight)
      .to(step, size, { progress: 1 }, scroller.scrollHeight)
    
    scroller.scrollHeight += (size + padding);  
    scroller.steps.push(step);
  }
  
  function update() {
    scroller.y = window.pageYOffset;
    tl.time(scroller.y);
    requestId = null;  
    updateInfo();
  }
  
  function requestUpdate() {
    if (!requestId) {
      requestId = requestAnimationFrame(update);
    }
  }
  
  function updateInfo() {
    
    info.currStep = scroller.step + 1;
    info.currStepProgress = Math.floor(scroller.steps[scroller.step]?.progress * 100 ) + "%";
    info.currPos = Math.round(scroller.y);
    console.log(info.currPos);
    // setCheck1( info.currPos);
    info.totalProgress = Math.floor(tl.progress() * 100 ) + "%";
    
    info.numSteps = scroller.steps.length;
    info.stepHeight = scroller.stepHeight;
    info.padding = scroller.padding;
    info.scrollHeight = scroller.scrollHeight;
    // info.viewportHeight = scroller.viewportHeight;
    // info.totalHeight = scroller.scrollHeight + scroller.viewportHeight;
  }
  
  function createInfo() {
    
    var info = {};
    var items = Array.from(document.querySelectorAll(".info .value"));
    
    items.forEach(function(element) {
      Object.defineProperty(info, element.id, {
        set: function(value) { element.textContent = value; }
      });
    });
      
    return info;
  }


  return (
    <div id="viewport" class="viewport">
  <div id="scroll-container" class="scroll-container"> 
    <Container >
      <TextContainer>
        <StyledHeading>This show has been made possible by...</StyledHeading>

        <ImagesContainer>
          <StyledImage src={dronelogo} alt="drone-stories" />
        </ImagesContainer>
      </TextContainer>
    </Container>
    </div>
    </div>
  );
}

export default LogosBanner;
