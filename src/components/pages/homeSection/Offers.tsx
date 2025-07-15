"use client";
import React from "react";
import scss from "./Offers.module.scss";
import paint from "../../../assets/Paint.png";
import paint1 from "../../../assets/Paint Can.png";
import img2 from "../../../assets/Frame 2608948.png";
import Image from "next/image";
import vector2 from "../../../assets/Vector (2).png";
import vector3 from "../../../assets/Vector (3).png";
import vector4 from "../../../assets/Vector (4).png";
import vector5 from "../../../assets/Vector (5).png";
import vectorBg from "../../../assets/Vector bg.png";
import { animateScroll as scroll } from "react-scroll";

const Offers = () => {
  const scrollToForm = () => {
    scroll.scrollTo(7290, {
      duration: 500,
      smooth: true,
    });
    window.history.pushState(null, "", "#form");
  };
  return (
    <div className={scss.Offers}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.Block1}>
            <Image src={paint} alt="paint" className={scss.paintImg} />
            <div className={scss.block}>
              <div className={scss.titleBlock}>
                <p className={scss.subHr}></p>
                <h3 className={scss.title}>Seasonal relevant offers</h3>
              </div>
              <p className={scss.description}>
                Seasonal topical offers, offers that will be more suitable for
                the service at the current time
              </p>
            </div>
            <div className={scss.blockImg}>
              <Image src={img2} alt="img2" className={scss.Image} />
              <div className={scss.blockText1}>
                <h5>Epoxy Flooring</h5>
                <p>
                  We take into account the unique characteristics of each
                  project and create solutions to fit your needs.
                </p>
                <button onClick={scrollToForm}>Order a service</button>
              </div>
            </div>
            <Image src={paint1} alt="paint" className={scss.paint1} />
          </div>
          <div className={scss.Block2}>
            <Image src={vectorBg} alt="vectorBg" className={scss.vectorBg} />
            <div className={scss.block}>
              <div className={scss.titleBlock}>
                <p className={scss.subHr}></p>
                <h3 className={scss.title}>our additional services</h3>
              </div>
              <p className={scss.description}>
                We strive to ensure that each client receives the perfect
                solution for their needs. Cooperation with us guarantees you
                quality, reliability and individual approach to each project.
              </p>
            </div>
            <div className={scss.blockImgText}>
              <div className={scss.cards}>
                <div className={scss.inner}>
                  <div className={scss.card}>
                    <Image src={vector2} alt="vector" />
                  </div>
                  <div className={scss.card1}>
                    <h6>Epoxy coatings</h6>
                    <p>
                      We take into account the unique characteristics of each
                      project and create solutions to fit your needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className={scss.cards}>
                <div className={scss.inner}>
                  <div className={scss.card}>
                    <Image src={vector3} alt="vector" />
                  </div>
                  <div className={scss.card1}>
                    <h6>Tile installation</h6>
                    <p>
                      We take into account the unique characteristics of each
                      project and create solutions to fit your needs.
                    </p>
                  </div>
                </div>
              </div>{" "}
              <div className={scss.cards}>
                <div className={scss.inner}>
                  <div className={scss.card}>
                    <Image src={vector4} alt="vector" />
                  </div>
                  <div className={scss.card1}>
                    <h6>Full remodelling </h6>
                    <p>
                      We take into account the unique characteristics of each
                      project and create solutions to fit your needs.
                    </p>
                  </div>
                </div>
              </div>{" "}
              <div className={scss.cards}>
                <div className={scss.inner}>
                  <div className={scss.card}>
                    <Image src={vector5} alt="vector" />
                  </div>
                  <div className={scss.card1}>
                    <h6>Interior painting</h6>
                    <p>
                      We take into account the unique characteristics of each
                      project and create solutions to fit your needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Offers;
