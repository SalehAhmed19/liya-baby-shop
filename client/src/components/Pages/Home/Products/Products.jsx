import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

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

export const Products = () => {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 3, spacing: 5 },
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
              <div>
                <img src={product.img} alt="" />
              </div>
            </div>
          ))}
        </div>
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
      </div>

      <div className="container mx-auto"></div>
    </>
  );
};

export default Products;

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
