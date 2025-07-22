import React from "react";
import scss from "./Reviews.module.scss";
import bgImage from "../../../assets/reviewsBg.png";
import leftPaint from "../../../assets/Paint Can.G16 8 (1).png";
import rightPaint from "../../../assets/Paint Can.G16 3.png";
import Image from "next/image";
import vectorBg from "../../../assets/Vector bg.png";
import paintYellow from "../../../assets/Paint Can.G.png";
import paintRed from "../../../assets/Paint Can.G16 5.png";
import paintBlue1 from "../../../assets/Paint Can.G16 4.png";
import paintBlue from "../../../assets/PaintBlue.png";
import elipse1 from "../../../assets/Ellipse 41.png";
import elipse2 from "../../../assets/Ellipse 46.png";
import { IoStarSharp } from "react-icons/io5";
import Form from "@/components/ui/form/Form";
import img1 from "../../../assets/Ellipse 1.png";
import img2 from "../../../assets/Ellipse 1 (1).png";
import img3 from "../../../assets/Ellipse 38.png";

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
    title: "Steven ",
    fullDate: "2023-11-23",
    description:
      "Wonderful job, I love it! my house has been transformed with new floors!",
  },

  {
    img: img3,
    title: "Steven ",
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
    title: "Steven ",
    fullDate: "2023-11-23",
    description:
      "Wonderful job, I love it! my house has been transformed with new floors!",
  },

  {
    img: img3,
    title: "Steven ",
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
    title: "Steven ",
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
    title: "Steven ",
    fullDate: "2023-11-23",
    description:
      "Wonderful job, I love it! my house has been transformed with new floors!",
  },
];
const Reviews = () => {
  return (
    <div className={scss.Reviews}>
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
          width={331}
          height={331}
        />
        <Image
          src={rightPaint.src}
          className={scss.paintRight}
          alt="right"
          width={362}
          height={362}
        />
        <h1>Reviews from our clients</h1>
      </div>

      <div className={scss.content}>
        <Image src={vectorBg} alt="vectorBg" className={scss.vectorBg} />
        <Image src={paintYellow} alt="vectorBg" className={scss.paintYellow} />
        <Image src={paintRed} alt="vectorBg" className={scss.paintRed} />
        <Image src={paintBlue} alt="vectorBg" className={scss.paintBlue} />
        <Image src={paintBlue1} alt="vectorBg" className={scss.paintBlue1} />
        <Image src={elipse1} alt="vectorBg" className={scss.elipse1} />
        <Image src={elipse2} alt="vectorBg" className={scss.elipse2} />

        <div className={scss.titleBlock}>
          <p className={scss.subHr}></p>
          <h3 className={scss.title}>Reviews</h3>
        </div>

        <div className={scss.reviewsList}>
          {reviews.map((el, index) => (
            <div key={index} className={scss.reviewCard}>
              <Image
                src={el.img}
                alt={`avatar-${index + 1}`}
                className={scss.avatar}
              />
              <div className={scss.reviewText}>
                <div className={scss.icons}>
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
                <p className={scss.description}>{el.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Reviews;
