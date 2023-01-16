import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Card2.module.css";
import dress1 from "../../../../Assets/dress/dress-1.webp";
import dress2 from "../../../../Assets/dress/dress-2.webp";
import dress3 from "../../../../Assets/dress/dress-3.webp";
import dress4 from "../../../../Assets/dress/dress-4.webp";
import dress5 from "../../../../Assets/dress/dress-5.webp";
import dress6 from "../../../../Assets/dress/dress-6.webp";

const Products = [
  {
    id: 1,
    img: dress1,
    title:
      "MQATZ Exquisite Embroidered Simple Fashion Kids Dress Skirt Birthday Banquet Event Party For Girls 1-5 Years Old",
    brands: "Think Artly",
    ratings: "3",
    price: "$ 250",
  },
  {
    id: 2,
    img: dress2,
    title:
      "MQATZ Exquisite Embroidered Simple Fashion Kids Dress Skirt Birthday Banquet Event Party For Girls 1-5 Years Old",
    brands: "Think Artly",
    ratings: "3",
    price: "$ 250",
  },
  {
    id: 3,
    img: dress3,
    title:
      "MQATZ Exquisite Embroidered Simple Fashion Kids Dress Skirt Birthday Banquet Event Party For Girls 1-5 Years Old",
    brands: "Think Artly",
    ratings: "3",
    price: "$ 250",
  },
  {
    id: 4,
    img: dress4,
    title:
      "MQATZ Exquisite Embroidered Simple Fashion Kids Dress Skirt Birthday Banquet Event Party For Girls 1-5 Years Old",
    brands: "Think Artly",
    ratings: "3",
    price: "$ 250",
  },
  {
    id: 5,
    img: dress5,
    title:
      "MQATZ Exquisite Embroidered Simple Fashion Kids Dress Skirt Birthday Banquet Event Party For Girls 1-5 Years Old",
    brands: "Think Artly",
    ratings: "3",
    price: "$ 250",
  },
  {
    id: 6,
    img: dress6,
    title:
      "MQATZ Exquisite Embroidered Simple Fashion Kids Dress Skirt Birthday Banquet Event Party For Girls 1-5 Years Old",
    brands: "Think Artly",
    ratings: "3",
    price: "$ 250",
  },
];

const Card2 = ({ title, description, btnContent }) => {
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
      "(min-width: 400px)": {
        slides: { perView: 1, spacing: 10 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  });
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-y-4 container my-16 bg-[#E3F0F7] rounded-lg ]">
      {" "}
      <div className="col-span-1">
        <h2 className="my-2 font-semibold">{title}</h2>
        <p className="my-2">{description}</p>
        <button className="border lg:py-2 md:px-3 md:py-1 px-2 py-1 text-xs lg:text-sx md:text-sm bg-mongoose text-[white] rounded-lg capitalize">
          {btnContent}
        </button>
      </div>
      <div className="col-span-2 relative">
        <div ref={sliderRef} className="keen-slider">
          {Products.map((data) => (
            <div className="keen-slider__slide rounded-xl">
              <div className="card bg-base-100">
                <figure className="w-100 p-3 ">
                  <img src={data?.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body py-2 px-2 lg:px-4 lg:py-3">
                  <h2 className="text-xs lg:text-xl md:text-lg font-bold">
                    {data?.title.slice(0, 30) + "..."}
                  </h2>
                  <p className="text-xs lg:text-md">{data?.brands}</p>
                  <p className="text-xs lg:text-xl md:text-lg">{data?.price}</p>
                </div>
              </div>
            </div>
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
    </div>
  );
};

export default Card2;

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
