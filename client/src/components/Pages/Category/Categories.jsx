import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Category from "./Category";
import babyboy from "../../../Assets/categories/babyboy.jpg";
import babygirl from "../../../Assets/categories/babygirl.jpg";
import diapar from "../../../Assets/categories/diapar.jpg";
import toys from "../../../Assets/categories/toys.jpg";
import man from "../../../Assets/categories/man.jpg";
import woman from "../../../Assets/categories/woman.jpg";
import offer from "../../../Assets/categories/offer.jpg";

const Categories = () => {
  const data = [
    {
      _id: 1,
      title: "Baby Diapers and Wipes",
      img: diapar,
      route: "baby-diaper-wipes",
    },
    {
      _id: 2,
      title: "New Born Essentials",
      img: toys,
      route: "new-born-essentials",
    },
    {
      _id: 3,
      title: "Baby Dress ( Girl)",
      img: babygirl,
      route: "baby-girl-dress",
    },
    {
      _id: 4,
      title: "Baby Dress ( Boy )",
      img: babyboy,
      route: "baby-boy-dress",
    },
    { _id: 5, title: "Women Dress", img: woman, route: "women-dress" },
    { _id: 6, title: "Man Clothing", img: man, route: "men-clothing" },
    { _id: 7, title: "Offer items", img: offer, route: "offer-items" },
  ];

  return (
    <div id="categories">
      <h1 className="font-semibold text-center my-5">All Categories</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-10">
        {data.map((d) => (
          <Category key={d._id} d={d} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
