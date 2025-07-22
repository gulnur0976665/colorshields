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
    const screenWidth = window.innerWidth;
    let scrollPosition = 2250;

    if (screenWidth <= 321) {
      scrollPosition = 1970;
    } else if (screenWidth <= 769) {
      scrollPosition = 1890;
    } else if (screenWidth <= 769) {
      scrollPosition = 1890;
    } else if (screenWidth <= 821) {
      scrollPosition = 1670;
    } else if (screenWidth <= 900) {
      scrollPosition = 1710;
    } else if (screenWidth <= 1000) {
      scrollPosition = 1830;
    } else if (screenWidth <= 1116) {
      scrollPosition = 1930;
    } else if (screenWidth <= 1246) {
      scrollPosition = 2094;
    } else {
      scrollPosition = 2250;
    }

    scroll.scrollTo(scrollPosition, {
      duration: 500,
      smooth: true,
    });

    window.history.pushState(null, "", "#about");
  };

  const scrollToForm = () => {
    const screenWidth = window.innerWidth;
    let scrollPosition = 7180;

    if (screenWidth <= 321) {
      scrollPosition = 6850;
    } else if (screenWidth <= 360) {
      scrollPosition = 6870;
    } else if (screenWidth <= 375) {
      scrollPosition = 6700;
    } else if (screenWidth <= 391) {
      scrollPosition = 6600;
    } else if (screenWidth <= 428) {
      scrollPosition = 6440;
    } else if (screenWidth <= 769) {
      scrollPosition = 6820;
    } else if (screenWidth <= 835) {
      scrollPosition = 6620;
    } else if (screenWidth <= 884) {
      scrollPosition = 6750;
    } else if (screenWidth <= 900) {
      scrollPosition = 6480;
    } else if (screenWidth <= 1000) {
      scrollPosition = 6580;
    } else if (screenWidth <= 1116) {
      scrollPosition = 6680;
    } else if (screenWidth <= 1246) {
      scrollPosition = 6980;
    } else {
      scrollPosition = 7180;
    }

    scroll.scrollTo(scrollPosition, {
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
