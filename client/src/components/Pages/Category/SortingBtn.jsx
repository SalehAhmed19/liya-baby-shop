import React from "react";
import { HiOutlineSortAscending } from "react-icons/hi";
import { MdCancel } from "react-icons/md";

const SortingBtn = ({ sort }) => {
  return (
    <button>
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
              <label htmlFor="my-modal-7" className="text-[#1A7998] text-xl">
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
  );
};

export default SortingBtn;
