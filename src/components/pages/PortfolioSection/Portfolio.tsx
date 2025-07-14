"use client";
import React from "react";
import scss from "./Portfolio.module.scss";
import bgImage from "../../../assets/portfolia.png";
import leftPaint from "../../../assets/PaintPort.png";
import rightPaint from "../../../assets/Paint Can.G16 8.png";
import paintRed1 from "../../../assets/Paint Can.G16 5.png";
import vectorBg from "../../../assets/Vector bg.png";
import elipse from "../../../assets/Ellipse 41.png";
import elipse1 from "../../../assets/Ellipse 46.png";
import Image from "next/image";
import rightPaintBlue from "../../../assets/PaintBlue.png";
import leftPaintYllew from "../../../assets/Paint Can.G.png";
import Form from "@/components/ui/form/Form";
import { usePortfolioQuery } from "@/redux/api/portfolio";
const Portfolio = () => {
  const { data, isLoading, isError } = usePortfolioQuery();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching articles.</p>;

  return (
    <div className={scss.portfolio}>
      <div
        className={scss.portfolioHero}
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        <img src={leftPaint.src} className={scss.paintLeft} alt="left" />
        <img src={rightPaint.src} className={scss.paintRight} alt="right" />
        <h1 className={scss.heroTitle}>Take a look at our projects</h1>
      </div>

      <div className={scss.portfolioContent}>
        <Image src={vectorBg} alt="vectorBg" className={scss.vectorBg} />

        {data?.map((el) => (
          <div key={el.id} className={scss.project}>
            <div className={scss.projectHeader}>
              <p className={scss.projectLine}></p>
              <h3 className={scss.projectTitle}>{el.title}</h3>
            </div>

            <div className={scss.projectBody}>
              <div className={scss.projectGallery}>
                {el.photos.map((photo) => (
                  <Image
                    key={photo.id}
                    src={photo.image}
                    alt="gal"
                    width={284}
                    height={254}
                    className={scss.projectImage}
                  />
                ))}
              </div>

              <div className={scss.projectText}>
                <h5 className={scss.projectTextTitle}>{el.title}</h5>
                <p className={scss.projectDescription}>{el.description}</p>
              </div>
            </div>
          </div>
        ))}

        <Image
          src={rightPaintBlue}
          alt="blue paint"
          className={scss.paintBlue}
        />
        <Image src={paintRed1} alt="red paint" className={scss.paintRed} />
        <Image
          src={leftPaintYllew}
          alt="yellow paint"
          className={scss.paintYellow}
        />
        <Image src={elipse} alt="ellipse" className={scss.ellipseRedRight} />
        <Image src={elipse1} alt="ellipse" className={scss.ellipseRedLeft} />
      </div>

      <Form />
    </div>
  );
};

export default Portfolio;
