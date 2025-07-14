"use client";
import React from "react";
import { animateScroll as scroll } from "react-scroll";
import scss from "./HomePages.module.scss";
import vector from "../../../assets/Vector.png";
import vector1 from "../../../assets/Vector (1).png";
import Image from "next/image";
import color1 from "../../../assets/color1.png";
import Link from "next/link";
const HomePages = () => {
  const scrollTo = () => {
    scroll.scrollTo(2330, {
      duration: 500,
      smooth: true,
    });
    window.history.pushState(null, "", "#about");
  };

  const scrollToForm = () => {
    scroll.scrollTo(7290, {
      duration: 500,
      smooth: true,
    });
    window.history.pushState(null, "", "#form");
  };
  return (
    <div className={scss.videoWrapper}>
      <video src="/priming-floor.mp4" autoPlay muted loop playsInline />
      <div className={scss.overlay}></div>

      <div className={scss.block}>
        <nav className={scss.overlayMenu}>
          <div onClick={scrollTo} className={scss.pageName}>
            <Image src={vector} alt="vector" className={scss.img} />
            <Image src={vector1} alt="vector" className={scss.img1} />
            <p>About Us</p>
          </div>

          <Link href={"/portfolio"}>
            {" "}
            <div className={scss.pageName}>
              <Image src={vector} alt="vector" className={scss.img} />
              <Image src={vector1} alt="vector" className={scss.img1} />
              <p>Our works</p>
            </div>
          </Link>
          <Link href={`/reviews`}>
            {" "}
            <div className={scss.pageName}>
              <Image src={vector} alt="vector" className={scss.img} />
              <Image src={vector1} alt="vector" className={scss.img1} />
              <p>Reviews</p>
            </div>
          </Link>
          <Link href={"/gallery"}>
            {" "}
            <div className={scss.pageName}>
              <Image src={vector} alt="vector" className={scss.img} />
              <Image src={vector1} alt="vector" className={scss.img1} />
              <p>Gallery</p>
            </div>
          </Link>
          <Link href={`/blog`}>
            {" "}
            <div className={scss.pageName}>
              <Image src={vector} alt="vector" className={scss.img} />
              <Image src={vector1} alt="vector" className={scss.img1} />
              <p>Blog</p>
            </div>
          </Link>
          <div onClick={scrollToForm} className={scss.pageName}>
            <Image src={vector} alt="vector" className={scss.img} />
            <Image src={vector1} alt="vector" className={scss.img1} />
            <p>Request a quote</p>
          </div>
        </nav>
        <Image src={color1} alt="color1" className={scss.colorimg} />
      </div>
    </div>
  );
};

export default HomePages;
