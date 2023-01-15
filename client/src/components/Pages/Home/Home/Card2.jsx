import React from "react";

const Card2 = ({ title, description, btnContent }) => {
  return (
    <div>
      {" "}
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <button>{btnContent}</button>
      </div>
      <div>
        <div className="card  bg-base-100 shadow-xl">
          <figure className="px-4 pt-4">
            <img
              src="https://placeimg.com/400/225/arch"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
