import React from "react";
import { Link } from "react-router-dom";
import HomeTitle from "../Home/HomeTitle";
import brand from "../../../../Assets/images/liya-baby-shop.png";

const About = () => {
  return (
    <div className="container">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-6">
        <div className="bg-[#E2F0F7] px-24 rounded-3xl py-6">
          {" "}
          <img src={brand} alt="" />
        </div>
        <div className="text-center my-auto">
          <h1 className="capitalize my-8 font-semibold">about us</h1>
          <h3>
            Amala Earth is a way of conscious living built on a foundation
            rooted deeply in the Indian origin. It brings together brands,
            products, experts and individuals that create a world where all
            living beings can co-exist harmoniously.
          </h3>
          <div className="capitalize  flex justify-center my-6 ">
            <Link className="mx-2" to="/">
              about us{" "}
            </Link>
            <div className="divider lg:divider-horizontal"></div>
            <Link className="mx-2" to="/">
              {" "}
              Founder's note
            </Link>
            <div className="divider lg:divider-horizontal"></div>
            <Link className="mx-2" to="/">
              our philosophy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
