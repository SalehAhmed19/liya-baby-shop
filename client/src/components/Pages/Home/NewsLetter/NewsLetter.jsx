import React from "react";

const NewsLetter = () => {
  return (
    <div className="my-10 flex flex-col justify-center items-center">
      <h2 className="font-semibold text-center my-3">
        Liya Baby Shop News Letter
      </h2>
      <p className="text-center mb-3">
        Subscribe to our newsletter and join the earth-friendly <br /> community
        today!
      </p>
      <div className="form-control">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered"
          />
          <button
            style={{ color: "#fff" }}
            className="btn btn-primary btn-square w-40"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
