import React from "react";
import HomeTitle from "../Home/HomeTitle";
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
  },
  {
    id: 2,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/products/TA-84-1_300x.jpg?v=1662378982",
    title: "Scented Candles | Mango Wood | Set of 3",
    brands: "Think Artly",
    ratings: "3",
  },
  {
    id: 3,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/products/TA-84-1_300x.jpg?v=1662378982",
    title: "Scented Candles | Mango Wood | Set of 3",
    brands: "Think Artly",
    ratings: "3",
  },
  {
    id: 4,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/products/TA-84-1_300x.jpg?v=1662378982",
    title: "Scented Candles | Mango Wood | Set of 3",
    brands: "Think Artly",
    ratings: "3",
  },
  {
    id: 5,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/products/TA-84-1_300x.jpg?v=1662378982",
    title: "Scented Candles | Mango Wood | Set of 3",
    brands: "Think Artly",
    ratings: "3",
  },
  {
    id: 6,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/products/TA-84-1_300x.jpg?v=1662378982",
    title: "Scented Candles | Mango Wood | Set of 3",
    brands: "Think Artly",
    ratings: "3",
  },
];

const RecomendsProduct = () => {
  return (
    <div className="container mx-auto ">
      <HomeTitle title="Amala Earth Recommends" />
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-2 ">
        
      </div>
      <div>
        <Swiper
          slidesPerView={4}
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
              <div className="card w-64 border-2 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={data?.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{data?.title}</h2>
                  <p>{data.brands}</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
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
