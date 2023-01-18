import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import dress1 from "../../../../Assets/dress/dress-1.webp";
import dress2 from "../../../../Assets/dress/dress-2.webp";
import dress3 from "../../../../Assets/dress/dress-3.webp";
import dress4 from "../../../../Assets/dress/dress-4.webp";
import dress5 from "../../../../Assets/dress/dress-5.webp";
import dress6 from "../../../../Assets/dress/dress-6.webp";

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

const ProductImg = () => {
  const img = [
    { _id: 1, image: dress1 },
    { _id: 2, image: dress2 },
    { _id: 3, image: dress3 },
    { _id: 4, image: dress4 },
    { _id: 5, image: dress5 },
    { _id: 6, image: dress6 },
  ];

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );
  return (
    <div>
      {/* <img src={dress1} alt="" /> */}
      <div ref={sliderRef} className="keen-slider">
        {img.map((i) => (
          <div className="keen-slider__slide flex justify-center items-center">
            <img src={i.image} alt="" />
          </div>
        ))}
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail my-5">
        {img.map((i) => (
          <div className="keen-slider__slide cursor-pointer">
            <img src={i.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImg;
