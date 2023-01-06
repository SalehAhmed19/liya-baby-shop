import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const BannerData = [
  {
    id: 1,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/files/Immunity_Banner_1920x600_1_1800x.jpg?v=1671610507",
  },
  {
    id: 2,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/files/numbers-desktop_1800x.jpg?v=1671714911",
  },
  {
    id: 3,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/files/NY-offers-desktop_51df41a7-aab2-46c8-a4dd-1ec6a112f6e6_1800x.png?v=1672810437",
  },
  {
    id: 4,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/files/Home_Banner_1920x600_1_1800x.jpg?v=1671263804",
  },
];
const Banner = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {
            BannerData.map(data=><SwiperSlide><img src={data.img} alt="" /></SwiperSlide>)
        }
        
        
      </Swiper>
    </>
  );
};

export default Banner;
