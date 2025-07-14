import React from "react";
import scss from "./Hero.module.scss";
import bgImage from "../../../assets/blogBg.png";
import leftPaint from "../../../assets/PaintPort.png";
import rightPaint from "../../../assets/Paint Can.G16 8.png";
import Image from "next/image";
const Hero = () => {
  return (
    <div
      className={scss.hero}
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      <Image
        src={leftPaint.src}
        className={scss.paintLeft}
        alt="left"
        width={381}
        height={381}
      />
      <Image
        src={rightPaint.src}
        className={scss.paintRight}
        alt="right"
        width={376}
        height={376}
      />
      <h1>Read our articles</h1>
    </div>
  );
};

export default Hero;
