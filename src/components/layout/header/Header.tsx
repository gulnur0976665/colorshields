"use client";
import React from "react";
import color from "../../../assets/color.png";
import Image from "next/image";
import scss from "./Header.module.scss";
import Link from "next/link";
import { animateScroll as scroll } from "react-scroll";

const Header = () => {
  const scrollToForm = () => {
    scroll.scrollTo(7290, {
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
