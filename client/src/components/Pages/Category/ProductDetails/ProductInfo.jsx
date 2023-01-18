import React from "react";

const ProductInfo = () => {
  return (
    <div>
      <h2 className="font-bold my-4">
        MQATZ Exquisite Embroidered Simple Fashion Kids Dress Skirt Birthday
        Banquet Event Party For Girls 1-5 Years Old
      </h2>
      <p className="text-[#2297BF] mr-4 my-4">Think Artly</p>
      <div className="flex items-center my-4">
        <span className="flex items-center">
          <h4 className="text-3xl text-[#2297BF]">
            $<span>250</span>{" "}
            <span className="text-[#6e6e6e] text-xl">MRP</span>
          </h4>
        </span>
        <p className="mx-5 line-through">
          $<span>300</span>
        </p>
        <p className="text-[#2297BF]">10% OFF</p>
      </div>
      {/* Ratings */}
      <div className="flex items-center my-4">
        <div class="rating rating-sm">
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
        </div>
        <p className="ml-4">2 review</p>
        <p className="text-sm text-[#2297BF] ml-3 cursor-pointer">
          Write a review
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;
