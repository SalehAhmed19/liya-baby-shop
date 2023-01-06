import React from "react";

const Card1 = ({ src, title, description }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={src} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn btn-primary"></button>
        </div>
      </div>
    </div>
  );
};

export default Card1;
