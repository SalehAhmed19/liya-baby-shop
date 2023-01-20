import React from "react";
import CartIncDec from "./CartIncDec";
import ProductInformation from "./ProductInformation";

const CartBar = ({ increment, decrement, qty }) => {
  return (
    <div className="flex flex-col lg:flex-row my-10 border border-base-200 rounded-lg p-3">
      <ProductInformation />
      <CartIncDec increment={increment} decrement={decrement} qty={qty} />
    </div>
  );
};

export default CartBar;
