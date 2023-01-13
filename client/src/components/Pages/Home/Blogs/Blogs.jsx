import React from "react";
import HomeTitle from "../Home/HomeTitle";

const BlogData = [
  {
    id: 1,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/articles/1_600x.jpg?v=1672999314",
    title: "Earth-friendly Recommendations According to Your Zodiac Sign",
    description:
      "Your zodiac sign or sun sign as it is sometimes referred to reveals a lot about your personality. Fire signs are usually more flamboyant and robust...",
  },
  {
    id: 2,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/articles/1_600x.jpg?v=1672999314",
    title: "Earth-friendly Recommendations According to Your Zodiac Sign",
    description:
      "Your zodiac sign or sun sign as it is sometimes referred to reveals a lot about your personality. Fire signs are usually more flamboyant and robust...",
  },
  {
    id: 3,
    img: "https://cdn.shopify.com/s/files/1/0523/3252/7770/articles/1_600x.jpg?v=1672999314",
    title: "Earth-friendly Recommendations According to Your Zodiac Sign",
    description:
      "Your zodiac sign or sun sign as it is sometimes referred to reveals a lot about your personality. Fire signs are usually more flamboyant and robust...",
  },
];

const Blogs = () => {
  return (
    <div className="container">
      <HomeTitle title="recent blog posts" />
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-12">
        {BlogData.map((data) => (
          <div key={data.id}>
            <img
              className="rounded-2xl my-3 transition ease-in-out duration-1000 hover:-translate-y-1 hover:scale-105"
              src={data.img}
              alt=" "
            />
            <h2 className="py-3 hover:text-mongoose cursor-pointer duration-1000">{data.title}</h2>
            <h3>{data.description}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
