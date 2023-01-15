import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
const ProductsData = [
  {
    id: 1,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/files/category-images_fashion_320x.png?v=1670303153",
    title: "title",
  },
  {
    id: 2,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/files/category-images_beauty_320x.png?v=1670303153",
    title: "title",
  },
  {
    id: 3,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/files/category-images_baby_320x.png?v=1671600017",
    title: "title",
  },
  {
    id: 4,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/files/kids_1_320x.png?v=1670417892",
    title: "title",
  },
  {
    id: 5,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/files/category-images_weddings_320x.png?v=1670303153",
    title: "title",
  },
  {
    id: 6,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/files/category-images-Offers_320x.png?v=1672034997",
    title: "title",
  },
  {
    id: 7,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/files/food_c1f84a1f-b985-46ba-9399-8910cefaa24f_320x.png?v=1670417880",
    title: "title",
  },
  {
    id: 8,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/files/home_1_320x.png?v=1670478404",
    title: "title",
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

export const Products = () => {
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
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 5, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  });
  return (
    <>
      <div className="container mx-auto">
        <div ref={sliderRef} className="keen-slider">
          {ProductsData.map((product) => (
            <div className="keen-slider__slide ">
              <div className="relative">
                <img  src={product.img} alt="" />
                <p className="-mt-10 absolute text-[white] font-bold">{product?.title}</p>
              </div>
            </div>
          ))}
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
      <div className="container mx-auto">
        <div ref={sliderRef} className="keen-slider">
          {ProductsDataCategory.map((product) => (
            <div className="keen-slider__slide ">
              <div>
                <img src={product.img} alt="" />
                <p className="text-center p-1">{product.title}</p>
              </div>
            </div>
          ))}
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

      <div className="container mx-auto"></div>
    </>
  );
};

export default Products;
