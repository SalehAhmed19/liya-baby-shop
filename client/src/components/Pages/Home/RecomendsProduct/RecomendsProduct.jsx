import React from "react";
import HomeTitle from "../Home/HomeTitle";
import { AiOutlineHeart } from "react-icons/ai";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
const RecommendsProduct = [
  {
    id: 1,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/products/TA-84-1_300x.jpg?v=1662378982",
    title: "Scented Candles | Mango Wood | Set of 3",
    brands: "Think Artly",
    ratings: "3",
    price: "250",
  },
  {
    id: 2,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/products/TA-84-1_300x.jpg?v=1662378982",
    title: "Scented Candles | Mango Wood | Set of 3",
    brands: "Think Artly",
    ratings: "3",
    price: "250",
  },
  {
    id: 3,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/products/TA-84-1_300x.jpg?v=1662378982",
    title: "Scented Candles | Mango Wood | Set of 3",
    brands: "Think Artly",
    ratings: "3",
    price: "250",
  },
  {
    id: 4,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/products/TA-84-1_300x.jpg?v=1662378982",
    title: "Scented Candles | Mango Wood | Set of 3",
    brands: "Think Artly",
    ratings: "3",
    price: "250",
  },
  {
    id: 5,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/products/TA-84-1_300x.jpg?v=1662378982",
    title: "Scented Candles | Mango Wood | Set of 3",
    brands: "Think Artly",
    ratings: "3",
    price: "250",
  },
  {
    id: 6,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/products/TA-84-1_300x.jpg?v=1662378982",
    title: "Scented Candles | Mango Wood | Set of 3",
    brands: "Think Artly",
    ratings: "3",
    price: "250",
  },
];

const RecomendsProduct = () => {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 5, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  });
  return (
    <div className="container mx-auto bg-softPeach ">
      <HomeTitle title="Amala Earth Recommends" />

      <div ref={sliderRef} className="keen-slider">
        {RecommendsProduct.map((data) => (
          <div className="keen-slider__slide ">
            <div className="card  bg-base-100 shadow-xl">
              <figure className="w-100 p-3 ">
                <img src={data?.img} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body py-2 px-2 lg:px-4 lg:py-3">
                <h2 className="text-xs lg:text-xl md:text-lg font-bold">
                  {data?.title}
                </h2>
                <p className="text-xs lg:text-xl md:text-lg">{data?.brands}</p>
                <p className="">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </p>
                <p className="text-xs lg:text-xl md:text-lg">{data?.price}</p>

                <div className="flex items-center justify-between">
                  <span className="lg:text-3xl text-xl">
                    <AiOutlineHeart />
                  </span>
                  <button className="border lg:px-8 lg:py-2 md:px-4 md:py-1 px-2 py-1  text-xs lg:text-xl hover:bg-mongoose hover:text-[white] rounded-lg capitalize">
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecomendsProduct;
