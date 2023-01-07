import React from "react";
import HomeTitle from "../Home/HomeTitle";
import { AiOutlineHeart } from "react-icons/ai";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
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
  return (
    <div className="container mx-auto ">
      <HomeTitle title="Amala Earth Recommends" />

      <div>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {RecommendsProduct.map((data) => (
            <SwiperSlide>
              <div className="card border-2 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={data?.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{data?.title}</h2>
                  <p>{data?.brands}</p>
                  <p>
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
                  <p>{data?.price}</p>

                  <div className="card-actions flex items-center justify-between">
                    <span className="text-2xl">
                      <AiOutlineHeart />
                    </span>
                    <button className="btn btn-primary capitalize">
                      add to cart
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecomendsProduct;
