import React from "react";
import Navbar from "../../../Shared/Navbar/Navbar";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Brands from "../Brands/Brands";
import Products from "../Products/Products";
import RecomendsProduct from "../RecomendsProduct/RecomendsProduct";

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <RecomendsProduct />
      <Brands />
      <Blogs />
      <About />
    </div>
  );
};

export default Home;
