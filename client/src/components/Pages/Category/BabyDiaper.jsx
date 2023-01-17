import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";
import { HiOutlineSortAscending } from "react-icons/hi";
import { MdCancel } from "react-icons/md";
import dress1 from "../../../Assets/dress/dress-1.webp";
import dress2 from "../../../Assets/dress/dress-2.webp";
import dress3 from "../../../Assets/dress/dress-3.webp";
import dress4 from "../../../Assets/dress/dress-4.webp";
import dress5 from "../../../Assets/dress/dress-5.webp";
import dress6 from "../../../Assets/dress/dress-6.webp";

const BabyDiaper = () => {
  const RecommendsProduct = [
    {
      id: 1,
      img: dress1,
      title:
        "MQATZ Exquisite Embroidered Simple Fashion Kids Dress Skirt Birthday Banquet Event Party For Girls 1-5 Years Old",
      brands: "Think Artly",
      ratings: "3",
      price: "250",
    },
    {
      id: 2,
      img: dress2,
      title:
        "MQATZ Exquisite Embroidered Simple Fashion Kids Dress Skirt Birthday Banquet Event Party For Girls 1-5 Years Old",
      brands: "Think Artly",
      ratings: "3",
      price: "250",
    },
    {
      id: 3,
      img: dress3,
      title:
        "MQATZ Exquisite Embroidered Simple Fashion Kids Dress Skirt Birthday Banquet Event Party For Girls 1-5 Years Old",
      brands: "Think Artly",
      ratings: "3",
      price: "250",
    },
    {
      id: 4,
      img: dress4,
      title:
        "MQATZ Exquisite Embroidered Simple Fashion Kids Dress Skirt Birthday Banquet Event Party For Girls 1-5 Years Old",
      brands: "Think Artly",
      ratings: "3",
      price: "250",
    },
    {
      id: 5,
      img: dress5,
      title:
        "MQATZ Exquisite Embroidered Simple Fashion Kids Dress Skirt Birthday Banquet Event Party For Girls 1-5 Years Old",
      brands: "Think Artly",
      ratings: "3",
      price: "250",
    },
    {
      id: 6,
      img: dress6,
      title:
        "MQATZ Exquisite Embroidered Simple Fashion Kids Dress Skirt Birthday Banquet Event Party For Girls 1-5 Years Old",
      brands: "Think Artly",
      ratings: "3",
      price: "250",
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
  return (
    <div className="my-10">
      <h1 className="my-5 text-center font-semibold">Baby Diaper</h1>
      <div className="grid grid-cols-1 lg:grid-cols-5">
        <div className="hidden lg:block mx-5">
          <h2 className="font-bold">Filtered by</h2>
          <div className="my-5">
            {filter.map((f) => (
              <div
                tabIndex={0}
                className="collapse collapse-arrow bg-base-100 rounded-box"
              >
                <div className="collapse-title text-xl">
                  <p className="text-[#2297BF]">{f.filter}</p>
                </div>
                <div className="collapse-content">
                  <ul>
                    {f.subFilter.map((sf) => (
                      <li className="my-3">
                        <p className="text-sm">{sf.sub}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="divider m-0"></div>
              </div>
            ))}
          </div>
        </div>
        <div className=" col-span-4">
          {/* search result bar */}
          <div className="border border-base-200 p-3 mx-10 rounded-lg flex justify-between items-center">
            <span>
              <p>5297 Results</p>
            </span>
            <span className="hidden lg:block">
              <span className="flex items-center">
                <p>Shorted by: </p>
                <select className="select select-sm max-w-xs">
                  <option disabled selected>
                    Relevance
                  </option>
                  {sort.map((s) => (
                    <option>
                      <p className="text-[#2297BF]">{s.sort}</p>
                    </option>
                  ))}
                </select>
              </span>
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 my-10 mx-10">
            {RecommendsProduct.map((data) => (
              <div className="card bg-base-100 border border-base-200">
                <figure className="w-100 p-3 ">
                  <img src={data?.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body py-2 px-2 lg:px-4 lg:py-3">
                  <h2 className="text-xs lg:text-xl md:text-lg font-bold">
                    {data?.title.slice(0, 30) + "..."}
                  </h2>
                  <p className="text-xs lg:text-lg">{data?.brands}</p>
                  <p className="">
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </p>
                  <p className="text-xs lg:text-xl md:text-lg">{data?.price}</p>

                  <div className="flex items-center justify-center">
                    <span className="lg:text-3xl text-xl lg:mr-4 mr-3">
                      <label className="swap">
                        <input type="checkbox" />
                        <div className="swap-on">
                          <AiFillHeart color="#2096BE" />
                        </div>
                        <div className="swap-off">
                          <AiOutlineHeart />
                        </div>
                      </label>
                    </span>
                    <button className="border lg:py-2 md:px-3 md:py-1 px-2 py-1  text-xs lg:text-sx md:text-sm hover:bg-mongoose hover:text-[white] rounded-lg capitalize">
                      add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="btm-nav lg:hidden bg-[#fff] z-10">
        <button className="">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg> */}
          {/* The button to open modal */}
          <label htmlFor="my-modal-6" className="flex items-center">
            <FiFilter />
            <p className="ml-3">Filter</p>
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <div className="flex items-center justify-between">
                <p className="text-left uppercase font-bold">Filtered by:</p>
                <div className="modal-action mt-0">
                  <label
                    htmlFor="my-modal-6"
                    className="text-[#1A7998] text-xl"
                  >
                    <MdCancel />
                  </label>
                </div>
              </div>
              <div className="divider"></div>
              <div>
                {filter.map((f) => (
                  <div
                    tabIndex={0}
                    className="collapse collapse-arrow bg-base-100 rounded-box text-left"
                  >
                    <div className="collapse-title text-xl font-medium">
                      <p>{f.filter}</p>
                    </div>
                    <div className="collapse-content">
                      <p>
                        tabIndex={0} attribute is necessary to make the div
                        focusable
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </button>
        {/* <button className="active">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button> */}
        <button>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg> */}
          {/* The button to open modal */}
          <label htmlFor="my-modal-7" className="">
            <span className="flex items-center">
              <HiOutlineSortAscending />
              <p className="ml-3">Sorting</p>
            </span>
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-7" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <div className="flex items-center justify-between">
                <p className="text-left">
                  Sort by: <span className="text-[#1A7998]">Relevance</span>
                </p>
                <div className="modal-action mt-0">
                  <label
                    htmlFor="my-modal-7"
                    className="text-[#1A7998] text-xl"
                  >
                    <MdCancel />
                  </label>
                </div>
              </div>
              <div className="divider"></div>
              <ul>
                {sort.map((s) => (
                  <li className="text-left cursor-pointer my-3" key={s._id}>
                    <button>{s.sort}</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default BabyDiaper;
