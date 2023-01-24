import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  return (
    <Link to={data.route}>
      <div className="card bg-base-100 border border-base-200">
        <figure className="w-100 p-3 ">
          <img src={data?.img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body py-2 px-2 lg:px-4 lg:py-3">
          <h2 className="text-xs lg:text-xl md:text-lg font-bold">
            {data?.title.slice(0, 30) + "..."}
          </h2>
          <p className="text-xs lg:text-lg">{data?.brands}</p>
          <p className="">
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
          <p className="text-xs lg:text-xl md:text-lg">{data?.price}</p>

          <div className="flex items-center justify-center">
            <span className="lg:text-3xl text-xl lg:mr-4 mr-3">
              <label className="swap">
                <input type="checkbox" />
                <div className="swap-on">
                  <AiFillHeart color="#2096BE" />
                </div>
                <div className="swap-off">
                  <AiOutlineHeart />
                </div>
              </label>
            </span>
            <Link
              to="/product-detail"
            >
              <button className="border lg:py-2 md:px-3 md:py-1 px-2 py-1  text-xs lg:text-sx md:text-sm hover:bg-mongoose hover:text-[white] rounded-lg capitalize">
                add to cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
