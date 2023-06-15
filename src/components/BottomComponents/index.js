import React, { useState } from "react";
import laptop from "../../assets/images/AD_STACK_Campbells_4.20_AA.png";
import phone from "../../assets/images/phone.png";
import phones from "../../assets/images/mobiles.png";
import emptyphone from "../../assets/images/empty-phone.png";
import Phone2 from "../../assets/images/2008-phonepick.png";

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
      desp: "Debuts in mobile creating ringtones, wallpaper and applications.",
      img: phone,
      opacity: 0,
    },
    {
      title: "2008",
      desp: "Expands into building mobile websites for media companies and launches ad sales business.",
      img: Phone2,
    },
    {
      title: "2013",
      desp: "Unveils proprietary technology enabling us to seamlessly integrate hundreds of premium publishers.",
      img: phones,
    },
    {
      title: "2016",
      desp: "Develops the Kargo SSP marking our entrance into programmatic.",
      img: emptyphone,
    },
    {
      title: "2023",
      desp: "Becomes a full funnel, cross screen solution with the addition of connectedTV capabilities.",
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
