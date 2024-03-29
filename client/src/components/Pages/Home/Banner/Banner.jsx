import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import AnimatedText from "react-animated-text-content";
import "keen-slider/keen-slider.min.css";
import "../Brands/style.css";
import img1 from "../../../../Assets/images/bannerImg-01.jpg";
import img2 from "../../../../Assets/images/bannerImg-02.jpg";
import img3 from "../../../../Assets/images/bannerImg-03.jpg";
import img4 from "../../../../Assets/images/bannerImg-04.jpg";

const BannerData = [
  {
    id: 1,
    img: img1,
    content: "Best Quality Product",
  },
  {
    id: 2,
    img: img2,
    content: "Best Fashion",
  },
  {
    id: 3,
    img: img3,
    content: "Reasonable price",
  },
  {
    id: 4,
    img: img4,
    content: "20% off!",
  },
];
const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <div className="">
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {BannerData.map((data) => (
            // <img
            //   alt="bannerImage"
            //   src={data.img}
            //   key={data.id}
            //   className="keen-slider__slide bannerImg"
            // />
            <>
              <div
                className="keen-slider__slide h-96 flex flex-col items-center justify-center"
                style={{
                  background: `url(${data.img})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  // objectFit: "contain",
                }}
              >
                <AnimatedText
                  type="words" // animate words or chars
                  animation={{
                    x: "200px",
                    y: "-20px",
                    scale: 1.1,
                    ease: "ease-in-out",
                  }}
                  animationType="lights"
                  interval={0.06}
                  duration={0.8}
                  tag="p"
                  className="animated-paragraph font-bold text-[#fff] text-3xl lg:text-5xl mx-20 text-center"
                  includeWhiteSpaces
                  threshold={0.1}
                  rootMargin="20%"
                >
                  Liya Baby Shop
                </AnimatedText>
                <AnimatedText
                  type="words" // animate words or chars
                  animation={{
                    x: "200px",
                    y: "-20px",
                    scale: 1.1,
                    ease: "ease-in-out",
                  }}
                  animationType="wave"
                  interval={0.06}
                  duration={0.8}
                  tag="p"
                  className="animated-paragraph text-center text-[#fff] font-semibold my-5 text-xl"
                  includeWhiteSpaces
                  threshold={0.1}
                  rootMargin="20%"
                >
                  {data.content}
                </AnimatedText>
              </div>
            </>
          ))}
        </div>
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
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Banner;

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
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
