import React from "react";
import { Link } from "react-router-dom";
import HomeTitle from "../Home/HomeTitle";

const About = () => {
  return (
    <div className="container">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-6">
        <div className="bg-mongoose px-24 rounded-3xl py-6">
          {" "}
          <img
            src="https://cdn.shopify.com/s/files/1/0523/3252/7770/files/Amala_Homepage_-_About_Us_700x.png?v=1620025113"
            alt=""
          />
        </div>
        <div className="text-center my-auto">
          <h1 className="capitalize my-8">about us</h1>
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
