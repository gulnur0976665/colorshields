"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import scss from "./SliderBlock.module.scss";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

interface SlideItem {
  img: any;
}

interface Props {
  images: SlideItem[];
}

const SliderBlock: React.FC<Props> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = images.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className={scss.sliderWrapper}>
      <button className={scss.arrow + " " + scss.left} onClick={prevSlide}>
        <GoArrowLeft />
      </button>

      <div className={scss.slider}>
        {images.map((item, idx) => {
          const isActive = idx === activeIndex;
          const isPrev = idx === (activeIndex - 1 + total) % total;
          const isNext = idx === (activeIndex + 1) % total;

          return (
            <div
              key={idx}
              className={`${scss.slide} 
                ${isActive ? scss.active : ""} 
                ${isPrev ? scss.prev : ""} 
                ${isNext ? scss.next : ""}`}
            >
              <Image src={item.img} alt="slide" fill />
            </div>
          );
        })}
      </div>

      <button className={scss.arrow + " " + scss.right} onClick={nextSlide}>
        <GoArrowRight />
      </button>

      <div className={scss.dots}>
        {images.map((_, i) => (
          <span
            key={i}
            className={`${scss.dot} ${i === activeIndex ? scss.activeDot : ""}`}
            onClick={() => setActiveIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SliderBlock;
