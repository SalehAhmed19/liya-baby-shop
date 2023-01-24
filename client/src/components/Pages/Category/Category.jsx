import React from "react";
import { useNavigate } from "react-router-dom";

const Category = ({ d }) => {
  console.log(d)
  const navigate = useNavigate();
  const handleRoute = (id) => {
    console.log(id);
    navigate(`/categories/${id}`);
  };
  return (
    <div
      onClick={() => handleRoute(d.route)}
      className="card bg-base-100 shadow-xl image-full cursor-pointer"
    >
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
