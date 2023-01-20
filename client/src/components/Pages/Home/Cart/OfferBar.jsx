import React from "react";

const OfferBar = () => {
  return (
    <div className="my-5 p-2 flex items-center justify-between bg-[#E2F0F7] rounded-lg">
      <p className="text-primary mx-3 lg:text-base text-xs text-center">
        Register to get <span className="font-bold">10% OFF</span> on your first
        order <span className="font-bold">ACROSS ALL THE CATEGORIES</span>
      </p>
      <button className="btn btn-primary lg:btn-md btn-sm text-[#fff]">
        Get 10% OFF
      </button>
    </div>
  );
};

export default OfferBar;
