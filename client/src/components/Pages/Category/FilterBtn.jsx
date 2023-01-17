import React from "react";
import { FiFilter } from "react-icons/fi";
import { MdCancel } from "react-icons/md";

const FilterBtn = ({ filter }) => {
  return (
    <button className="">
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
              <label htmlFor="my-modal-6" className="text-[#1A7998] text-xl">
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
                  <ul>
                    {f.subFilter.map((sf) => (
                      <li className="my-3">
                        <p className="text-sm">{sf.sub}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </button>
  );
};

export default FilterBtn;
