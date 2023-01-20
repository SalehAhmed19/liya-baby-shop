import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const CartIncDec = ({ increment, decrement, qty }) => {
  return (
    <div className="flex items-center mx-5">
      <div className="input-group border border-base-200 rounded-lg">
        <button
          className="btn bg-[#f0efef] btn-ghost btn-square"
          onClick={decrement}
        >
          <AiOutlineMinus />
        </button>
        <input value={qty} type="text" className="input w-20 text-center" />
        <button
          className="btn bg-[#f0efef] btn-ghost btn-square"
          onClick={increment}
        >
          <AiOutlinePlus />
        </button>
      </div>
      <h3 className="text-xl ml-5">${250 * qty}</h3>
    </div>
  );
};

export default CartIncDec;
