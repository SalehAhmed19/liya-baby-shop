import React from "react";

const SortingBar = ({ sort }) => {
  return (
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
  );
};

export default SortingBar;
