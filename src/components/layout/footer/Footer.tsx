"use client";
import React from "react";
import scss from "./Footer.module.scss";
import color from "../../../assets/color.png";
import Image from "next/image";
import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { animateScroll as scroll } from "react-scroll";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  const scrollToY = (section: string) => {
    const screenWidth = window.innerWidth;

    const scrollMap: { [key: string]: { [key: string]: number } } = {
      about: {
        default: 2230,
        321: 1970,
        428: 1990,
        769: 1890,
        821: 1670,
        900: 1710,
        1000: 1830,
        1116: 1930,
        1246: 2094,
      },
      process: {
        default: 2670,
        428: 2520,
        769: 2300,
        821: 2050,
        884: 2150,
        1115: 2350,
        1246: 2500,
      },
      benefitsItem: {
        default: 3100,
        376: 2880,
        428: 2840,
        769: 2750,
        821: 2500,
        884: 2600,
        1115: 2800,
        1246: 2970,
      },
      ourWork: {
        default: 4480,
        360: 4855,
        376: 4725,
        391: 4610,
        428: 4550,
        769: 4460,
        821: 4210,
        884: 4260,
        1115: 4080,
        1246: 4330,
      },
      certificateItem: {
        default: 5200,
        320: 5190,
        360: 5100,
        376: 5020,
        391: 4910,
        428: 4850,
        769: 5000,
        834: 4800,
        884: 4900,
        1115: 4800,
        1246: 5000,
      },
      reviewItem: {
        default: 5900,
        360: 5670,
        376: 5520,
        428: 5350,
        769: 5600,
        821: 5300,
        834: 5400,
        884: 5550,
        1115: 5550,
        1246: 5700,
      },
      faq: {
        default: 6500,
        321: 6340,
        360: 6300,
        376: 6190,
        391: 6060,
        428: 6000,
        769: 6280,
        821: 5980,
        834: 6000,
        884: 6190,
        1115: 6050,
        1246: 6370,
      },
    };

    const sectionMap = scrollMap[section];
    if (!sectionMap) return;

    const breakpoints = Object.keys(sectionMap)
      .filter((k) => k !== "default")
      .map(Number)
      .sort((a, b) => a - b);

    let position = sectionMap.default;

    for (const bp of breakpoints) {
      if (screenWidth <= bp) {
        position = sectionMap[bp.toString()];
        break;
      }
    }

    scroll.scrollTo(position, {
      duration: 500,
      smooth: true,
    });

    window.history.pushState(null, "", `#${section}`);
  };

  return (
    <footer className={scss.footer}>
      <div className={scss.footerContent}>
        <div className={scss.columns}>
          <div className={scss.logoBlock}>
            <Image src={color} alt="Color logo" className={scss.logoImage} />
          </div>

          <div className={scss.linksGroup}>
            <h5>About Company</h5>
            <div className={scss.links}>
              <p onClick={() => scrollToY("about")}>About Us</p>
              <p onClick={() => scrollToY("process")}>Process of making</p>
              <p onClick={() => scrollToY("benefitsItem")}>
                Benefits of working with us
              </p>
              <p onClick={() => scrollToY("ourWork")}>Our Works</p>
              <p onClick={() => scrollToY("certificateItem")}>Certificates</p>
              <p onClick={() => scrollToY("reviewItem")}>Review</p>
              <p onClick={() => scrollToY("faq")}>FAQ</p>
            </div>
          </div>

          <div className={scss.linksGroup}>
            <h5>Portfolio</h5>
            <p onClick={() => router.push(`/portfolio`)}>Our Works</p>
          </div>

          <div className={scss.linksGroup}>
            <h5>Contact Us</h5>
            <p>business@color_shields</p>
            <div className={scss.socialIcons}>
              <FaXTwitter className={scss.icon} />
              <IoLogoInstagram className={scss.icon} />
              <CiLinkedin className={scss.icon} />
            </div>
          </div>
        </div>

        <p className={scss.copyright}>
          ©2023 Color Shields. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
