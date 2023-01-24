import React from "react";
import Navbar from "../../../Shared/Navbar/Navbar";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Brands from "../Brands/Brands";
import Faq from "../Faq/Faq";
import Products from "../Products/Products";
import RecomendsProduct from "../RecomendsProduct/RecomendsProduct";
import Card2 from "./Card2";

const Home = () => {
  return (
    <div id='home'>
      <Banner />
      <Products />
      <RecomendsProduct />
      <Card2
        title="Purposeful Gifts"
        description="Unique, thoughtful and handmade products ideal for every occasion."
        btnContent="see more products"
      />
      <Card2
        title="Responsible Fashion"
        description="Made with upcycled, handwoven, natural fabrics, these clothes are comfortable, high quality and a great choice."
        btnContent="see more products"
      />
      <Products />
      <Card2
        title="Ayurvedic Food and Self-care"
        description="A curation of Ayurvedic products that work wonders for your health and well-being.
        "
        btnContent="see more products"
      />
      <Card2
        title="Joyful Home"
        description="To create a sense of positivity in our everyday spaces, our options of conscious home products are made from restorative, reclaimed and materials sourced from natural elements."
        btnContent="see more products"
      />
      <Card2
        title="Ethical Beauty"
        description="Dedicated to products that include naturally sourced ingredients that make you look good and feel good."
        btnContent="see more products"
      />
      <Brands />
      <Blogs />
      <About />
      <Faq />
    </div>
  );
};

export default Home;
