import React from "react";
import HomeTitle from "../Home/HomeTitle";

const Blogs = () => {
  return (
    <div className="container">
      <HomeTitle title="recent blog posts" />
      <div>
        <img
          src="https://cdn.shopify.com/s/files/1/0523/3252/7770/articles/1_600x.jpg?v=1672999314"
          alt=" "
        />
        <h3>Earth-friendly Recommendations According to Your Zodiac Sign</h3>
        <p>
          Your zodiac sign or sun sign as it is sometimes referred to reveals a
          lot about your personality. Fire signs are usually more flamboyant and
          robust...
        </p>
      </div>
    </div>
  );
};

export default Blogs;
