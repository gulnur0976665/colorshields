"use client";
import React, { useEffect, useRef } from "react";
import scss from "./About.module.scss";
import frame from "../../../assets/Frame 2608916.png";
import group from "../../../assets/Group.png";
import group1 from "../../../assets/Group (1).png";
import group2 from "../../../assets/Group (2).png";
import paint from "../../../assets/Paint Can.G.png";
import paint11 from "../../../assets/paint11.png";
import paintCan from "../../../assets/Paint Can.G16 7.png";
import ellipse from "../../../assets/Ellipse 41.png";
import ellipse1 from "../../../assets/Ellipse 41 (1).png";
import ellipse42 from "../../../assets/Ellipse 42.png";
import Image from "next/image";
import { HiOutlineHeart } from "react-icons/hi";
import { HiMiniCheck } from "react-icons/hi2";
const About = () => {
  const blockHrRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = blockHrRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && el) {
          el.classList.remove(scss.animate);
          void el.offsetWidth;
          el.classList.add(scss.animate);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);
  return (
    <div className={scss.About}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.block1}>
            <div className={scss.blockText}>
              <div className={scss.titleBlock}>
                <p className={scss.subHr}></p>
                <h3 className={scss.title}>About Color Shields</h3>
              </div>
              <div className={scss.descriptions}>
                <p>
                  We specialize in what others cant replicate delivering an
                  unparalleled level of craftsmanship. Our work is not just a
                  service; its the art of the art, a touch of magic in every
                  project.
                </p>
                <p>
                  Our products are a unique combination of technology and
                  design, allowing us to create customized coatings that meet
                  the highest standards. Whether you need flooring for
                  residential, commercial or industrial applications, we have
                  solutions to meet your requirements.
                </p>
              </div>
            </div>
          </div>
          <Image src={paint} alt="paint" className={scss.paintImg} />
          <Image src={ellipse} alt="paint" className={scss.ellipseImage1} />
          <div className={scss.block2}>
            <div className={scss.blockText}>
              <div className={scss.titleBlock}>
                <p className={scss.subHr}></p>
                <h3 className={scss.title}>
                  The process of making a polyaspartic floor involves several
                  steps
                </h3>
              </div>
              <div className={scss.textxHr}>
                {" "}
                <div className={scss.blocknum}>
                  <div className={scss.hr}></div>
                  <div className={scss.tegerek}>
                    <p>1</p>
                  </div>
                  <div className={scss.tegerek}>
                    <p>2</p>
                  </div>
                  <div className={scss.tegerek}>
                    <p>3</p>
                  </div>
                  <div className={scss.tegerek}>
                    <p>4</p>
                  </div>
                  <div className={scss.tegerek}>
                    <p>5</p>
                  </div>
                </div>
                <div className={scss.texts1}>
                  <p>Surface Preparation</p>{" "}
                  <p>
                    Application of <br /> the base coat
                  </p>{" "}
                  <p>
                    Application of the decorative <br /> and protective layer
                  </p>
                  <p>Drying and curing</p>
                  <p>Final Finishing</p>
                </div>
              </div>
            </div>
          </div>
          <Image src={ellipse1} alt="paint" className={scss.ellipseImage} />
          <Image src={paintCan} alt="paint" className={scss.paintImgCan} />
          <div className={scss.block3}>
            <div className={scss.blockText}>
              <div className={scss.titleBlock}>
                <p className={scss.subHr}></p>
                <h3 className={scss.title}>
                  Benefits of working with color shields
                </h3>
              </div>
              <p className={scss.description}>
                We strive to ensure that each client receives the perfect
                solution for their needs. Cooperation with us guarantees you
                quality, reliability and individual approach to each project.
              </p>
            </div>
            <div className={scss.blockIconsAll}>
              <div className={scss.blockIcons}>
                <div className={scss.text1}>
                  <div className={scss.icons}>
                    <HiOutlineHeart className={scss.icon} />
                  </div>
                  <div className={scss.texts}>
                    <h2>Customized:</h2>
                    <p>
                      We take into account the unique characteristics of each
                      project and create solutions to fit your needs.
                    </p>
                  </div>
                </div>{" "}
                <div className={scss.text1}>
                  <div className={scss.icons}>
                    <Image src={group} alt="group" className={scss.icon} />
                  </div>
                  <div className={scss.texts}>
                    <h2>High-quality materials:</h2>
                    <p>
                      We use only proven, top-quality materials to ensure the
                      longevity and durability of our floors.
                    </p>
                  </div>
                </div>{" "}
                <div className={scss.text1}>
                  <div className={scss.icons}>
                    <Image src={group1} alt="group" className={scss.icon} />
                  </div>
                  <div className={scss.texts}>
                    <h2>Customized:</h2>
                    <p>
                      Our floors not only look stunning, but also offer superior
                      durability, ease of maintenance, and longevity.
                    </p>
                  </div>
                </div>{" "}
                <div className={scss.text1}>
                  <div className={scss.icons}>
                    <Image src={group2} alt="group" className={scss.icon} />
                  </div>
                  <div className={scss.texts}>
                    <h2>Customized:</h2>
                    <p>
                      Our team consists of experienced professionals who are
                      ready to realize projects of any complexity with a high
                      degree of craftsmanship.
                    </p>
                  </div>
                </div>{" "}
              </div>
              <Image src={frame} alt="frame" className={scss.frame} />
            </div>
          </div>
          <Image src={paint11} alt="paint" className={scss.paintImg11} />
          <Image src={ellipse42} alt="paint" className={scss.ellipse42} />
          <div className={scss.block4}>
            <div className={scss.blockText}>
              <div className={scss.titleBlock}>
                <p className={scss.subHr}></p>
                <h3 className={scss.title}>
                  Difference between polyaspatic and epoxy resin
                </h3>
              </div>
              <div className={scss.blockAll1}>
                <div className={scss.blockEP}>
                  <h6>Epoxy</h6>
                  <p>Durability</p>
                  <p>Quick Drying</p>
                  <p>Detailing</p>
                </div>
                <div className={scss.blockHrWrapper}>
                  <div ref={blockHrRef} className={`${scss.blockHr}`}>
                    <div className={scss.hr}></div>
                    <div className={scss.Check}>
                      <HiMiniCheck className={scss.icon} />
                    </div>
                    <div className={scss.hr}></div>
                    <div className={scss.Check}>
                      <HiMiniCheck className={scss.icon} />
                    </div>
                    <div className={scss.hr}></div>
                    <div className={scss.Check}>
                      <HiMiniCheck className={scss.icon} />
                    </div>
                  </div>
                </div>
                <div className={scss.blockEP}>
                  <h6>Polyaspatic</h6>
                  <p>Durability</p>
                  <p>Quick Drying</p>
                  <p>Detailing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
