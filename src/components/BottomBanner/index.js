import React from "react";
import MobileBanner from "../MobileBanner";
import ExtendedBanner from "../ExpendedBanner";
import LaptopBanner from "../LaptopBanner";
import { Container } from "./index.styles";

export default function BottomBanners() {
  return (
      <Container>
      <MobileBanner />
      <ExtendedBanner />
      <LaptopBanner />
     </Container>
  );
}
