import React from "react";

const Category = ({ d }) => {
  return (
    <div className="card bg-base-100 shadow-xl image-full cursor-pointer">
      <figure>
        <img src={d.img} alt="" />
      </figure>
      <div className="card-body flex justify-center items-center">
        <h2 className="card-title text-[#fff]">{d.title}</h2>
      </div>
    </div>
  );
};

export default Category;
