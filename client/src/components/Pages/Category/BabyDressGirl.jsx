import React from "react";
import Filter from "./Filter";
import FilterBtn from "./FilterBtn";
import SortingBar from "./SortingBar";
import SortingBtn from "./SortingBtn";

const BabyDressGirl = () => {
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
  return (
    <div className="my-10">
      <h1 className="my-5 text-center font-semibold">Baby Dress (Girl)</h1>
      <div className="grid grid-cols-1 lg:grid-cols-5">
        <Filter filter={filter} />
        <div className=" col-span-4">
          {/* search result bar */}
          <SortingBar sort={sort} />
        </div>
      </div>
      <div className="btm-nav lg:hidden bg-[#fff] z-10">
        <FilterBtn filter={filter} />
        <SortingBtn sort={sort} />
      </div>
    </div>
  );
};

export default BabyDressGirl;
