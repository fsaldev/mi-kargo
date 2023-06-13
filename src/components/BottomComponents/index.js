import React, { useEffect, useState } from "react";
import laptop from "../../assets/images/AD_STACK_Campbells_4.20_AA.png";
import phone from "../../assets/images/phone.png";
import phones from "../../assets/images/mobiles.png";
import { Icon } from "@iconify/react";

import {
  Container,
} from "./index.styles";
import SwipContainer from "./swipContainer";

function BottomComponents() {
    const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

    const handleClick = () => {
        setCurrentComponentIndex((prevIndex) => prevIndex + 1);
        if (currentComponentIndex >= 2) {
          setCurrentComponentIndex(0);
        }
      };
    
      const handleClickBack = () => {
        setCurrentComponentIndex((prevIndex) => prevIndex - 1);
        if (currentComponentIndex <= 0) {
          setCurrentComponentIndex(2);
        }
      };

    

    const bottomComponents = [
        {
            title:"2003",
            desp:"Launching in Mobile",
            img:phone,
            opacity:0,
        },
        {
            title:"2008",
            desp:"Expanded to Digital",
            img:phones,

        },
        {
            title:"2023",
            desp:" Now, with our recent move into connected tv, Kargo is on every screen, everywhere.",
            img:laptop,

        }
    ]
  return (
      <Container>
       <SwipContainer title={bottomComponents[currentComponentIndex].title} desp={bottomComponents[currentComponentIndex].desp} img={bottomComponents[currentComponentIndex].img} />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "55%",
          }}
        >
          <Icon
            icon="fluent:ios-arrow-right-24-filled"
            style={{
              height: "30px",
              width: "100px",
            }}
            onClick={handleClick}
          />
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            top: "55%",
          }}
        >
          <Icon
            icon="fluent:ios-arrow-right-24-filled"
            hFlip={true}
            style={{
              height: "30px",
              width: "100px",
            }}
            onClick={handleClickBack}
          />
        </div>
      </Container>
  );
}

export default BottomComponents;
