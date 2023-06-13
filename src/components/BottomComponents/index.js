import React, { useState } from "react";
import laptop from "../../assets/images/AD_STACK_Campbells_4.20_AA.png";
import phone from "../../assets/images/phone.png";
import phones from "../../assets/images/mobiles.png";

import { Container } from "./index.styles";
import SwipContainer from "./swipContainer";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function BottomComponents() {
  const bottomComponents = [
    {
      title: "2003",
      desp: "Launching in Mobile",
      img: phone,
      opacity: 0,
    },
    {
      title: "2008",
      desp: "Expanded to Digital",
      img: phones,
    },
    {
      title: "2023",
      desp: " Now, with our recent move into connected tv, Kargo is on every screen, everywhere.",
      img: laptop,
    },
  ];
  return (
    <Container>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {bottomComponents.map((item) => (
          <SwiperSlide>
            <SwipContainer title={item.title} desp={item.desp} img={item.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default BottomComponents;
