import React from "react";
import { useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";

const ProductQYTnPrice = () => {
  const [qty, setQty] = useState(1);
  const increment = () => {
    let qtyCount = qty + 1;
    setQty(qtyCount);
  };
  const decrement = () => {
    if (qty > 1) {
      let qtyCount = qty - 1;
      setQty(qtyCount);
    }
  };
  return (
    <div>
      <div className="bg-[#E2F0F7] p-5 rounded-lg my-10">
        <div className="flex items-center">
          <p className="pr-5">Quantity</p>
          <div className="form-control">
            <div className="input-group border border-base-200 rounded-lg">
              <button
                className="btn bg-[#f0efef] btn-ghost btn-square"
                onClick={decrement}
              >
                <AiOutlineMinus />
              </button>
              <input
                value={qty}
                type="text"
                className="input w-20 text-center"
              />
              <button
                className="btn bg-[#f0efef] btn-ghost btn-square"
                onClick={increment}
              >
                <AiOutlinePlus />
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center ">
              <p className="px-5">Price</p>
              <h3 className="text-3xl">${250 * qty}</h3>
            </div>
          </div>
        </div>
        {/* Add to cart or buy now */}
        <div className="flex items-center my-5">
          <button className="btn bg-[#fff] btn-ghost">
            <label className="swap">
              <input type="checkbox" />
              <div className="swap-on">
                <AiFillHeart className="text-2xl text-[#2297BF]" />
              </div>
              <div className="swap-off">
                <AiOutlineHeart className="text-2xl" />
              </div>
            </label>
          </button>
          <button className="btn btn-primary w-1/3 mx-2 text-[#fff]">
            Add to Cart
          </button>
          <button className="btn btn-primary btn-outline w-1/3 mx-2 text-[#fff]">
            BY Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductQYTnPrice;
