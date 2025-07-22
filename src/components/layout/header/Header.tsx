"use client";
import React from "react";
import color from "../../../assets/color.png";
import Image from "next/image";
import scss from "./Header.module.scss";
import Link from "next/link";
import { animateScroll as scroll } from "react-scroll";

const Header = () => {
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
    <header className={scss.headerContainer}>
      <div className="container">
        <div className={scss.headerContent}>
          <Link href="/">
            <Image src={color} alt="Logo" className={scss.logoImage} />
          </Link>
          <button className={scss.quoteButton} onClick={scrollToForm}>
            Get a quote
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
