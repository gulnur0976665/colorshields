"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import scss from "./Works.module.scss";
import classic from "../../../assets/classic.png";
import offect from "../../../assets/offect.png";
import labur from "../../../assets/labur.png";
import modular from "../../../assets/modular.png";
import diog from "../../../assets/diognal.png";
import ragget from "../../../assets/ragger.png";
import herrin from "../../../assets/herrin.png";
import chess from "../../../assets/chees.png";
import carpet from "../../../assets/carpet.png";
import ellipse1 from "../../../assets/Ellipse 46.png";
import ellipse from "../../../assets/Ellipse 41.png";
import galery1 from "../../../assets/galery1.png";
import galery2 from "../../../assets/galery2.png";
import galery3 from "../../../assets/galery3.png";
import galery4 from "../../../assets/galery4.png";
import galery5 from "../../../assets/galery5.png";
import galery6 from "../../../assets/galery6.png";
import galery10 from "../../../assets/galery10.png";
import galery12 from "../../../assets/galery12.png";
import paint from "../../../assets/Paint Can.G16 4 (1).png";
import paintYellow from "../../../assets/Paint Can.G.png";
import SliderBlock from "./SliderBlock";
import { useRouter } from "next/navigation";
import TestimonialsSlider from "./TestimonialsSlider";
const imgs2 = [
  { title: "Classic", img: classic },
  { title: "Offset", img: offect },
  { title: "Labyrinth", img: labur },
  { title: "Modular", img: modular },
  { title: "Diagonal", img: diog },
  { title: "Ragged", img: ragget },
  { title: "Herringbone", img: herrin },
  { title: "Chess", img: chess },
  { title: "Carpet", img: carpet },
];
const Works = () => {
  const router = useRouter();
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <div className={scss.Works}>
      <div className={scss.content}>
        <div className={scss.block1}>
          <div className={scss.blockText}>
            <div className={scss.titleBlock}>
              <p className={scss.subHr}></p>
              <h3 className={scss.title}>our works</h3>
            </div>
            <button onClick={() => router.push("/portfolio")}>View all</button>
          </div>
          <SliderBlock
            images={[
              { img: galery1 },
              { img: galery2 },
              { img: galery3 },
              { img: galery4 },
              { img: galery5 },
              { img: galery6 },
              { img: galery10 },
              { img: galery12 },
            ]}
          />
        </div>
        <Image src={ellipse} alt="paint" className={scss.ellipseImage1} />
        <Image src={paintYellow} alt="paint" className={scss.paintYellow} />
        <Image src={paint} alt="paint" className={scss.paintImage} />
        <div className={scss.block2}>
          <Image src={ellipse1} alt="paint" className={scss.ellipseImage} />
          <div className={scss.blockText}>
            <div className={scss.titleBlock}>
              <p className={scss.subHr}></p>
              <h3 className={scss.title}>Ways of laying floor tiles</h3>
            </div>
            <p className={scss.des}>
              There are several types of laying tile flooring:
            </p>
          </div>
          <Slider {...settings} className={scss.slider}>
            {imgs2.map((el, idx) => (
              <div key={idx}>
                <div className={scss.card}>
                  <Image
                    src={el.img.src}
                    alt={el.title}
                    className={scss.img}
                    width={184}
                    height={184}
                  />
                  <h4>{el.title}</h4>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <TestimonialsSlider />
      </div>
    </div>
  );
};

export default Works;
