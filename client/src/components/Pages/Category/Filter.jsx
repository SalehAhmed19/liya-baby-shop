import React from "react";

const Filter = ({ filter }) => {
  return (
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
  );
};

export default Filter;
