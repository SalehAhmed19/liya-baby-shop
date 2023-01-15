import React from "react";
import Navbar from "../../../Shared/Navbar/Navbar";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Brands from "../Brands/Brands";
import Faq from "../Faq/Faq";
import NewsLetter from "../NewsLetter/NewsLetter";
import Products from "../Products/Products";
import RecomendsProduct from "../RecomendsProduct/RecomendsProduct";
import Card2 from "./Card2";

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <RecomendsProduct />
      <Card2
        title="Purposeful Gifts"
        description="Unique, thoughtful and handmade products ideal for every occasion."
        btnContent="see more products"
      />
      <Brands />
      <Blogs />
      <About />
      <Faq />
      <NewsLetter />
    </div>
  );
};

export default Home;
