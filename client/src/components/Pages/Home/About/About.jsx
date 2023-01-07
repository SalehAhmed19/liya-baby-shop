import React from "react";
import { Link } from "react-router-dom";
import HomeTitle from "../Home/HomeTitle";

const About = () => {
  return (
    <div className="container">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-6">
        <div className="bg-amber-800 px-24 rounded-lg py-6">
          {" "}
          <img
            src="https://cdn.shopify.com/s/files/1/0523/3252/7770/files/Amala_Homepage_-_About_Us_700x.png?v=1620025113"
            alt=""
          />
        </div>
        <div className="text-center my-auto">
          <h1 className="capitalize my-6">about us</h1>
          <h3>
            Amala Earth is a way of conscious living built on a foundation
            rooted deeply in the Indian origin. It brings together brands,
            products, experts and individuals that create a world where all
            living beings can co-exist harmoniously.
          </h3>
          <div className="capitalize  flex justify-center ">
            <Link className="mx-2" to="/">
              about us{" "}
            </Link>
            <div className="divider lg:divider-horizontal"></div>
            <Link className="mx-2" to="/">
              {" "}
              Founder's note
            </Link>
            <div className="divider lg:divider-horizontal"></div>
            <Link className="mx-2" to="/">
              our philosophy
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="text-center my-2">
          “One-stop solution for curated, eco-friendly products”
        </h1>
        <h3>
          The conversation around conserving the environment and protecting and
          preserving natural resources is gaining momentum globally. With a
          complete misuse and depletion of the earth’s resources, it’s time that
          our lifestyles become such that we incorporate eco-friendly products
          that are locally sourced and sustainable.
        </h3>
        <br />
        <h3>
          Amala Earth is a one-stop market place that enables conscious consumer
          choices with over 45,000 products. It gives great importance to a
          value-based community of like-minded individuals. We treasure the
          authenticity of locally sourced products that are conscious
          alternatives to be used at home and around us. At Amala Earth,
          responsible choices are supported and transformation is embraced. The
          idea is to bring together all brands, products, experts and consumers
          on a common platform to drive a change in consumption patterns of
          individuals and enable them to incorporate organic products, eco
          friendly products and locally sourced products in everyday living.
        </h3>
        <br />
        <h3>
          The way forward is to evolve as a collective movement that will be the
          driving force in transforming consumer behavioural patterns by
          providing alternative solutions for an earth friendly lifestyle.
        </h3>
      </div>
    </div>
  );
};

export default About;
