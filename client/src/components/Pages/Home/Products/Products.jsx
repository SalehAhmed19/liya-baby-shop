import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const ProductsData = [
  {
    id: 1,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/files/category-images_fashion_320x.png?v=1670303153",
  },
  {
    id: 2,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/files/category-images_beauty_320x.png?v=1670303153",
  },
  {
    id: 3,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/files/category-images_baby_320x.png?v=1671600017",
  },
  {
    id: 4,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/files/kids_1_320x.png?v=1670417892",
  },
  {
    id: 5,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/files/category-images_weddings_320x.png?v=1670303153",
  },
  {
    id: 6,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/files/category-images-Offers_320x.png?v=1672034997",
  },
  {
    id: 7,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/files/food_c1f84a1f-b985-46ba-9399-8910cefaa24f_320x.png?v=1670417880",
  },
  {
    id: 8,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/files/home_1_320x.png?v=1670478404",
  },
];
const ProductsDataCategory = [
  {
    id: 1,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/files/Rakhee_Icon_Mobile_Menu_240x240.jpg?v=1656409233",

    title: "description",
  },
  {
    id: 2,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/files/Responsiblefashion_240x240.png?v=1621497431",
    title: "description",
  },
  {
    id: 3,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/files/JoyfulHome_240x240.png?v=1621497471",
    title: "description",
  },
  {
    id: 4,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/files/Ethicalbeauty_240x240.png?v=1621497411",
    title: "description",
  },
  {
    id: 5,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/files/mindfuleating_240x240.png?v=1621497185",
    title: "description",
  },
  {
    id: 6,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/files/3_1_1_240x240.png?v=1651581035",
    title: "description",
  },
  {
    id: 7,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/files/holistic_wellness_1_240x240.png?v=1651555936",
    title: "description",
  },
  {
    id: 8,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/files/Other_743ebeb7-a65c-4d31-991c-6da89c2b8482_240x240.png?v=1621497490",
    title: "description",
  },
];
const Products = () => {
  return (
    <>
      <div className="container mx-auto">
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
          {ProductsData.map((data) => (
            <SwiperSlide>
              <img src={data.img} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container mx-auto">
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
          {ProductsDataCategory.map((data) => (
            <SwiperSlide>
              <div>
                <img src={data.img} alt="" />
                <p className="text-center p-1">{data.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Products;
