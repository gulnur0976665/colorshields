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

  const scrollToY = (y: number, hash: string) => {
    scroll.scrollTo(y, { duration: 500, smooth: true });
    window.history.pushState(null, "", hash);
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
              <p onClick={() => scrollToY(2330, "#about")}>About Us</p>
              <p onClick={() => scrollToY(2790, "#process")}>
                Process of making
              </p>
              <p onClick={() => scrollToY(3230, "#benefitsItem")}>
                Benefits of working with us
              </p>
              <p onClick={() => scrollToY(4582, "#ourWork")}>Our Works</p>
              <p onClick={() => scrollToY(5300, "#certificateItem")}>
                Certificates
              </p>
              <p onClick={() => scrollToY(6000, "#reviewItem")}>Review</p>
              <p onClick={() => scrollToY(6670, "#faq")}>FAQ</p>
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
