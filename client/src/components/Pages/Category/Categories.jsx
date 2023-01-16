import React from "react";
import Category from "./Category";
import babyboy from "../../../Assets/categories/babyboy.jpg";
import babygirl from "../../../Assets/categories/babygirl.jpg";
import other from "../../../Assets/categories/other.jpg";
import pajamas from "../../../Assets/categories/pajamas.jpg";
import shoes from "../../../Assets/categories/shoes.jpg";
import toys from "../../../Assets/categories/toys.jpg";

const Categories = () => {
  const data = [
    { _id: 1, title: "Baby Boy", img: babyboy },
    { _id: 2, title: "Baby Girl", img: babygirl },
    { _id: 3, title: "Other", img: other },
    { _id: 4, title: "Pajamas", img: pajamas },
    { _id: 5, title: "Shoes", img: shoes },
    { _id: 6, title: "Toys", img: toys },
  ];
  return (
    <div>
      <h1 className="font-semibold text-center my-5">All Categories</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-10">
        {data.map((d) => (
          <Category key={d._id} d={d} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
