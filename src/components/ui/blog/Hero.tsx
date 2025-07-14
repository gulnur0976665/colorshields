import React from "react";
import scss from "./Hero.module.scss";
import bgImage from "../../../assets/blogBg.png";
import leftPaint from "../../../assets/PaintPort.png";
import rightPaint from "../../../assets/Paint Can.G16 8.png";
const Hero = () => {
  return (
    <div
      className={scss.hero}
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      <img src={leftPaint.src} className={scss.paintLeft} alt="left" />
      <img src={rightPaint.src} className={scss.paintRight} alt="right" />
      <h1>Read our articles</h1>
    </div>
  );
};

export default Hero;
