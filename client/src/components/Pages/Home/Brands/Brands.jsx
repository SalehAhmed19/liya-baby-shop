import React, { useState } from "react";
import HomeTitle from "../Home/HomeTitle";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import brand1 from "../../../../Assets/brands/brand1.avif";
import brand2 from "../../../../Assets/brands/brand2.avif";
import brand3 from "../../../../Assets/brands/brand3.avif";
import brand4 from "../../../../Assets/brands/brand4.avif";
import brand5 from "../../../../Assets/brands/brand5.avif";
import brand6 from "../../../../Assets/brands/brand6.avif";
import brand7 from "../../../../Assets/brands/brand7.avif";
import brand8 from "../../../../Assets/brands/brand8.avif";
import brand9 from "../../../../Assets/brands/brand9.avif";
import brand10 from "../../../../Assets/brands/brand10.avif";
const Brands = () => {
  const data = [
    { _id: 1, img: brand1 },
    { _id: 2, img: brand2 },
    { _id: 3, img: brand3 },
    { _id: 4, img: brand4 },
    { _id: 5, img: brand5 },
    { _id: 6, img: brand6 },
    { _id: 7, img: brand7 },
    { _id: 8, img: brand8 },
    { _id: 9, img: brand9 },
    { _id: 10, img: brand10 },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    breakpoints: {
      "(min-width: 360px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 5, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  });
  return (
    <div className="container">
      <div ref={sliderRef} className="keen-slider">
        {data.map((d) => (
          <div
            key={d._id}
            className="keen-slider__slide flex items-center justify-center border border-base-200 p-4"
          >
            <img src={d.img} className="w-32" alt="" />
          </div>
        ))}
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Brands;

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow arrow-dark ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
