"use client";
import React from "react";
import scss from "./Gallery.module.scss";
import bgImage from "../../../assets/galleryBg.png";
import leftPaint from "../../../assets/PaintPort.png";
import rightPaint from "../../../assets/PaintYellow.png";
import vectorBg from "../../../assets/Vector bg.png";
import elipse from "../../../assets/Ellipse 41.png";
import elipse1 from "../../../assets/Ellipse 46.png";
import Image from "next/image";
import rightPaintBlue from "../../../assets/PaintBlue.png";
import leftPaintRed from "../../../assets/Paint.png";
import rightPaintBlue1 from "../../../assets/Paint Can.G16 4.png";
import leftPaintYllew from "../../../assets/Paint Can.G.png";
import Form from "@/components/ui/form/Form";
import { useGalleryQuery } from "@/redux/api/gallery";

const Gallery = () => {
  const { data, isLoading, isError } = useGalleryQuery();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching articles.</p>;

  return (
    <div className={scss.galleryWrapper}>
      <div
        className={scss.galleryHero}
        style={{
          backgroundImage: `url(${bgImage.src})`,
        }}
      >
        <img src={leftPaint.src} className={scss.heroPaintLeft} alt="left" />
        <img src={rightPaint.src} className={scss.heroPaintRight} alt="right" />
        <h1>GALLERY OF OUR WORKS</h1>
      </div>

      <div className={scss.galleryContent}>
        {data?.map((el, index) => (
          <div key={index} className={scss.gallerySection}>
            <div className={scss.galleryTitle}>
              <p className={scss.titleDivider}></p>
              <h3 className={scss.sectionHeading}>{el.title}</h3>
            </div>
            <Image
              src={vectorBg}
              alt="vectorBg"
              className={scss.galleryVectorBg}
            />
            <div className={scss.imageGrid}>
              {el.images.map((photo, idx) => (
                <Image
                  key={idx}
                  src={photo.image}
                  alt="img"
                  width={400}
                  height={300}
                  className={scss.galleryImage}
                />
              ))}
            </div>
          </div>
        ))}
        <Image
          src={rightPaintBlue}
          alt="paint"
          className={scss.decorBlueRight}
        />
        <Image
          src={leftPaintRed}
          alt="leftPaintRed"
          className={scss.decorRedLeft}
        />
        <Image
          src={rightPaintBlue1}
          alt="rightPaintBlue1"
          className={scss.decorCanBlue}
        />
        <Image
          src={leftPaintYllew}
          alt="leftPaintYllew"
          className={scss.decorCanYellow}
        />
        <Image src={elipse} alt="elipse" className={scss.radialRedRight} />
        <Image src={elipse1} alt="elipse" className={scss.radialRedLeft} />
        <Form />
      </div>
    </div>
  );
};

export default Gallery;
