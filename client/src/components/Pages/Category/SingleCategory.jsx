import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import dress1 from "../../../Assets/dress/dress-1.webp";
import dress2 from "../../../Assets/dress/dress-2.webp";
import dress3 from "../../../Assets/dress/dress-3.webp";
import dress4 from "../../../Assets/dress/dress-4.webp";
import dress5 from "../../../Assets/dress/dress-5.webp";
import dress6 from "../../../Assets/dress/dress-6.webp";
import Filter from "./Filter";
import FilterBtn from "./FilterBtn";
import ProductCard from "./ProductCard";
import SortingBar from "./SortingBar";
import SortingBtn from "./SortingBtn";

const SingleCategory = () => {
  let arr = [];
  const [productData, setProductData] = useState([]);
  const RecommendsProduct = [
    {
      id: 1,
      img: dress1,
      title:
        "MQATZ Exquisite Embroidered Simple Fashion Kids Dress Skirt Birthday Banquet Event Party For Girls 1-5 Years Old",
      brands: "Think Artly",
      ratings: "3",
      price: "250",
      route: "baby-diaper-wipes",
    },
    {
      id: 2,
      img: dress2,
      title:
        "MQATZ Exquisite Embroidered Simple Fashion Kids Dress Skirt Birthday Banquet Event Party For Girls 1-5 Years Old",
      brands: "Think Artly",
      ratings: "3",
      price: "250",
      route: "baby-diaper-wipes",
    },
    {
      id: 3,
      img: dress3,
      title:
        "MQATZ Exquisite Embroidered Simple Fashion Kids Dress Skirt Birthday Banquet Event Party For Girls 1-5 Years Old",
      brands: "Think Artly",
      ratings: "3",
      price: "250",
      route: "baby-diaper-wipes",
    },
    {
      id: 4,
      img: dress4,
      title:
        "MQATZ Exquisite Embroidered Simple Fashion Kids Dress Skirt Birthday Banquet Event Party For Girls 1-5 Years Old",
      brands: "Think Artly",
      ratings: "3",
      price: "250",
      route: "baby-diaper-4",
    },
    {
      id: 5,
      img: dress5,
      title:
        "MQATZ Exquisite Embroidered Simple Fashion Kids Dress Skirt Birthday Banquet Event Party For Girls 1-5 Years Old",
      brands: "Think Artly",
      ratings: "3",
      price: "250",
      route: "baby-diaper-5",
    },
    {
      id: 6,
      img: dress6,
      title:
        "MQATZ Exquisite Embroidered Simple Fashion Kids Dress Skirt Birthday Banquet Event Party For Girls 1-5 Years Old",
      brands: "Think Artly",
      ratings: "3",
      price: "250",
      route: "baby-diaper-6",
    },
  ];
  const sort = [
    { _id: 1, sort: "Relevance" },
    { _id: 2, sort: "Price, Low to High" },
    { _id: 3, sort: "Price, High to Low" },
    { _id: 4, sort: "Name, A-Z" },
    { _id: 5, sort: "Name, Z-A" },
    { _id: 6, sort: "Products, Old to New" },
    { _id: 7, sort: "Products, New to Old" },
    { _id: 8, sort: "Just for you" },
  ];
  const filter = [
    {
      _id: 1,
      filter: "Shop by concern",
      subFilter: [
        { _id: 1, sub: "Category" },
        { _id: 2, sub: "Category" },
        { _id: 3, sub: "Category" },
        { _id: 4, sub: "Category" },
        { _id: 5, sub: "Category" },
      ],
    },
    {
      _id: 2,
      filter: "Brand",
      subFilter: [
        { _id: 1, sub: "Category" },
        { _id: 2, sub: "Category" },
        { _id: 3, sub: "Category" },
        { _id: 4, sub: "Category" },
        { _id: 5, sub: "Category" },
      ],
    },
    {
      _id: 3,
      filter: "Category",
      subFilter: [
        { _id: 1, sub: "Category" },
        { _id: 2, sub: "Category" },
        { _id: 3, sub: "Category" },
        { _id: 4, sub: "Category" },
        { _id: 5, sub: "Category" },
      ],
    },
    {
      _id: 4,
      filter: "Type",
      subFilter: [
        { _id: 1, sub: "Category" },
        { _id: 2, sub: "Category" },
        { _id: 3, sub: "Category" },
        { _id: 4, sub: "Category" },
        { _id: 5, sub: "Category" },
      ],
    },
    {
      _id: 5,
      filter: "Weight",
      subFilter: [
        { _id: 1, sub: "Category" },
        { _id: 2, sub: "Category" },
        { _id: 3, sub: "Category" },
        { _id: 4, sub: "Category" },
        { _id: 5, sub: "Category" },
      ],
    },
    {
      _id: 6,
      filter: "Pack Size",
      subFilter: [
        { _id: 1, sub: "Category" },
        { _id: 2, sub: "Category" },
        { _id: 3, sub: "Category" },
        { _id: 4, sub: "Category" },
        { _id: 5, sub: "Category" },
      ],
    },
    {
      _id: 7,
      filter: "Price",
      subFilter: [
        { _id: 1, sub: "Category" },
        { _id: 2, sub: "Category" },
        { _id: 3, sub: "Category" },
        { _id: 4, sub: "Category" },
        { _id: 5, sub: "Category" },
      ],
    },
    {
      _id: 8,
      filter: "Discount",
      subFilter: [
        { _id: 1, sub: "Category" },
        { _id: 2, sub: "Category" },
        { _id: 3, sub: "Category" },
        { _id: 4, sub: "Category" },
        { _id: 5, sub: "Category" },
      ],
    },
  ];
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <div className="my-10">
        <h1 className="my-5 text-center font-semibold">{id}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <Filter filter={filter} />
          <div className=" col-span-4">
            {/* search result bar */}
            <SortingBar sort={sort} />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 my-10 mx-10">
              {/* {RecommendsProduct.map((data) => (
                <ProductCard data={data} />
              ))} */}
              {RecommendsProduct.map((data) => {
                if (data.route === id) {
                  arr.push(data);
                  console.log(arr);
                  arr.map((d) =>
                    console.log(d)
                    // <div>
                    //   <p>{d.brands}</p>
                    // </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className="btm-nav lg:hidden bg-[#fff] z-10">
          <FilterBtn filter={filter} />
          <SortingBtn sort={sort} />
          {/* Comment */}
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;
