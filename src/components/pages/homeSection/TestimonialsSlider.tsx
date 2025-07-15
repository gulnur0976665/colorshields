"use client";
import React from "react";
import Slider from "react-slick";
import scss from "./TestimonialsSlider.module.scss";
import img1 from "../../../assets/Ellipse 1.png";
import img2 from "../../../assets/Ellipse 1 (1).png";
import img3 from "../../../assets/Ellipse 38.png";
import { IoStarSharp } from "react-icons/io5";
import vectorBg from "../../../assets/Vector 2.png";
import Image from "next/image";
const reviews = [
  {
    img: img1,
    title: "Jane Doe",
    fullDate: "2023-11-23",
    description:
      "Wonderful job, I love it! my house has been transformed with new floors!",
  },
  {
    img: img2,
    title: "Molly",
    fullDate: "2023-11-23",
    description:
      "Wonderful job, I love it! my house has been transformed with new floors!",
  },
  {
    img: img3,
    title: "Steven Anderson",
    fullDate: "2023-11-23",
    description:
      "Wonderful job, I love it! my house has been transformed with new floors!",
  },

  {
    img: img3,
    title: "Steven Anderson",
    fullDate: "2023-11-23",
    description:
      "Wonderful job, I love it! my house has been transformed with new floors!",
  },
  {
    img: img1,
    title: "Jane Doe",
    fullDate: "2023-11-23",
    description:
      "Wonderful job, I love it! my house has been transformed with new floors!",
  },
  {
    img: img2,
    title: "Molly",
    fullDate: "2023-11-23",
    description:
      "Wonderful job, I love it! my house has been transformed with new floors!",
  },
  {
    img: img1,
    title: "Jane Doe",
    fullDate: "2023-11-23",
    description:
      "Wonderful job, I love it! my house has been transformed with new floors!",
  },
  {
    img: img2,
    title: "Molly",
    fullDate: "2023-11-23",
    description:
      "Wonderful job, I love it! my house has been transformed with new floors!",
  },
  {
    img: img3,
    title: "Steven Anderson",
    fullDate: "2023-11-23",
    description:
      "Wonderful job, I love it! my house has been transformed with new floors!",
  },

  {
    img: img3,
    title: "Steven Anderson",
    fullDate: "2023-11-23",
    description:
      "Wonderful job, I love it! my house has been transformed with new floors!",
  },
  {
    img: img1,
    title: "Jane Doe",
    fullDate: "2023-11-23",
    description:
      "Wonderful job, I love it! my house has been transformed with new floors!",
  },
  {
    img: img2,
    title: "Molly",
    fullDate: "2023-11-23",
    description:
      "Wonderful job, I love it! my house has been transformed with new floors!",
  },

  {
    img: img3,
    title: "Steven Anderson",
    fullDate: "2023-11-23",
    description:
      "Wonderful job, I love it! my house has been transformed with new floors!",
  },
  {
    img: img1,
    title: "Jane Doe",
    fullDate: "2023-11-23",
    description:
      "Wonderful job, I love it! my house has been transformed with new floors!",
  },
  {
    img: img2,
    title: "Molly",
    fullDate: "2023-11-23",
    description:
      "Wonderful job, I love it! my house has been transformed with new floors!",
  },
  {
    img: img1,
    title: "Jane Doe",
    fullDate: "2023-11-23",
    description:
      "Wonderful job, I love it! my house has been transformed with new floors!",
  },
  {
    img: img2,
    title: "Molly",
    fullDate: "2023-11-23",
    description:
      "Wonderful job, I love it! my house has been transformed with new floors!",
  },
  {
    img: img3,
    title: "Steven Anderson",
    fullDate: "2023-11-23",
    description:
      "Wonderful job, I love it! my house has been transformed with new floors!",
  },
];

const TestimonialsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 428,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className={scss.block3}>
      <div className={scss.titleBlock}>
        <p className={scss.subHr}></p>
        <h3 className={scss.title}>Reviews</h3>
      </div>
      <Image
        src={vectorBg}
        alt="vec"
        className={scss.vectorBg}
        width={1920}
        height={1120}
        priority
        style={{ width: "100%", height: "auto" }}
      />

      <div className={scss.Slider}>
        <Slider {...settings} className={scss.slider}>
          {reviews.map((el, idx) => (
            <div key={idx}>
              <div className={scss.card}>
                <Image src={el.img.src} alt={el.title} width={60} height={60} />
                <div className={scss.profile}>
                  <div className={scss.stars}>
                    <IoStarSharp className={scss.iconStar} />
                    <IoStarSharp className={scss.iconStar} />
                    <IoStarSharp className={scss.iconStar} />
                    <IoStarSharp className={scss.iconStar} />
                    <IoStarSharp className={scss.iconStar} />
                  </div>
                  <div className={scss.reviewHeader}>
                    <h3 className={scss.name}>{el.title}</h3>
                    <p className={scss.date}>{el.fullDate}</p>
                  </div>
                  <p className={scss.text}>{el.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <Slider {...settings} className={scss.slider}>
          {reviews.map((el, idx) => (
            <div key={idx}>
              <div className={scss.card}>
                <Image src={el.img.src} alt={el.title} width={60} height={60} />
                <div className={scss.profile}>
                  <div className={scss.stars}>
                    <IoStarSharp className={scss.iconStar} />
                    <IoStarSharp className={scss.iconStar} />
                    <IoStarSharp className={scss.iconStar} />
                    <IoStarSharp className={scss.iconStar} />
                    <IoStarSharp className={scss.iconStar} />
                  </div>
                  <div className={scss.reviewHeader}>
                    <h3 className={scss.name}>{el.title}</h3>
                    <p className={scss.date}>{el.fullDate}</p>
                  </div>
                  <p className={scss.text}>{el.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
