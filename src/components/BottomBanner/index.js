import React, { useState } from "react";
import MobileBanner from "../MobileBanner";
import ExtendedBanner from "../ExpendedBanner";
import LaptopBanner from "../LaptopBanner";
import { Container } from "./index.styles";
import { border, borderRadius, display } from "@mui/system";

export default function BottomBanners() {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const components = [<MobileBanner />, <ExtendedBanner />, <LaptopBanner />];

  const handleClick = () => {
    setCurrentComponentIndex((prevIndex) => prevIndex + 1);
    if (currentComponentIndex >= 2) {
      setCurrentComponentIndex(0);
    }
  };
  return (
    <>
      {" "}
      <Container>{components[currentComponentIndex]}</Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "50px",
        }}
      >
        <button
          style={{
            height: "30px",
            width: "100px",
            border: "1px solid black",
            borderRadius: "5px",
            backgroundColor: "#e2e6ed",
            color: "#86868b",
          }}
          onClick={handleClick}
        >
          Next
        </button>
      </div>
    </>
  );
}
