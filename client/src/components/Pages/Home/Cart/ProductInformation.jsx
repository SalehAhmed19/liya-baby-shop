import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import dress1 from "../../../../Assets/dress/dress-1.webp";

const ProductInformation = () => {
  return (
    <div className="flex items-center">
      <img className="w-36 h-36" src={dress1} alt="" />
      <div className="mx-5">
        <div>
          <div className="flex flex-col">
            <h3 className="font-bold lg:hidden">
              MQATZ Exquisite Embroidered Simple...
            </h3>
            <h3 className="font-bold lg:block hidden">
              MQATZ Exquisite Embroidered Simple Fashion Kids Dress Skirt
              Birthday <br />
              Banquet Event Party For Girls 1-5 Years Old
            </h3>

            <p className="text-primary">Think Artly</p>
            <div className="flex items-center">
              <h4 className="text-xl">$250</h4>
              <p>
                <small className="line-through ml-5">$300</small>
              </p>
            </div>
          </div>
          <div className="my-5 flex items-center">
            <label className="swap">
              <input type="checkbox" />
              <div className="swap-on flex items-center">
                <AiFillHeart className="mr-3 lg:text-xl text-sm text-primary" />
                <span className="text-sm lg:text-xl">In Wishlist</span>
              </div>
              <div className="swap-off flex items-center">
                <AiOutlineHeart className="mr-3 lg:text-xl text-sm" />{" "}
                <span className="text-sm lg:text-xl">Add wishlist</span>
              </div>
            </label>
            <div className="divider divider-horizontal m-0"></div>
            <p className="cursor-pointer text-sm lg:text-xl">Remove</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
