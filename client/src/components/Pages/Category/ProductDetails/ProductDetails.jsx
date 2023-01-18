import React from "react";
import ProductInfo from "./ProductInfo";
import ProductQYTnPrice from "./ProductQYTnPrice";
import ProductImg from "./ProductImg";

const ProductDetails = () => {
  return (
    <div>
      <h1 className="font-bold text-center my-10">Product Details</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-10">
        <div className="border border-base-200 p-10 m-5 rounded-lg">
          <ProductImg />
        </div>
        <div className="p-5">
          <ProductInfo />
          {/* Quantity and Price */}
          <ProductQYTnPrice />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
