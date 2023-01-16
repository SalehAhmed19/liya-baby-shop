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
          <h3 className=" text-left">
            <span className="font-bold">Liya Baby Shop</span> is a premier baby
            shop company that specializes in providing high-quality and safe
            products for babies and young children. Our wide range of products
            includes everything from clothing and accessories to strollers, car
            seats, and nursery furniture. We pride ourselves on our attention to
            detail and commitment to customer satisfaction. With a focus on
            safety and style, our products are carefully selected to meet the
            needs of both parents and babies. Whether you're a new parent or a
            seasoned pro, <span className="font-bold">Liya Baby Shop</span> has
            everything you need to make your baby's life comfortable, safe, and
            stylish. Shop with us today and see the difference for yourself!
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
