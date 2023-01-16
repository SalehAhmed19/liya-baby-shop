import React from "react";
import FaqQuestion from "./FaqQuestion";

const Faq = () => {
  const data = [
    {
      _id: 1,
      question: "What do we stand for?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus est quia at nesciunt distinctio error quis illum ratione, doloribus ab quidem qui necessitatibus, facere vero. Ipsam veniam recusandae voluptatem placeat.",
    },
    {
      _id: 2,
      question: "Our Ethos",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus est quia at nesciunt distinctio error quis illum ratione, doloribus ab quidem qui necessitatibus, facere vero. Ipsam veniam recusandae voluptatem placeat.",
    },
    {
      _id: 3,
      question: "The three pillars of Liya Baby Shop",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus est quia at nesciunt distinctio error quis illum ratione, doloribus ab quidem qui necessitatibus, facere vero. Ipsam veniam recusandae voluptatem placeat.",
    },
  ];
  return (
    <div>
      <div className=" bg-[#E2F0F7] px-8  py-8">
        <h1 className="text-center my-8 text-mongoose">
          “One-stop solution for curated, eco-friendly products”
        </h1>
        <div className="text-birch">
          <h3>
            The conversation around conserving the environment and protecting
            and preserving natural resources is gaining momentum globally. With
            a complete misuse and depletion of the earth’s resources, it’s time
            that our lifestyles become such that we incorporate eco-friendly
            products that are locally sourced and sustainable.
          </h3>
          <br />
          <h3>
            Amala Earth is a one-stop market place that enables conscious
            consumer choices with over 45,000 products. It gives great
            importance to a value-based community of like-minded individuals. We
            treasure the authenticity of locally sourced products that are
            conscious alternatives to be used at home and around us. At Amala
            Earth, responsible choices are supported and transformation is
            embraced. The idea is to bring together all brands, products,
            experts and consumers on a common platform to drive a change in
            consumption patterns of individuals and enable them to incorporate
            organic products, eco friendly products and locally sourced products
            in everyday living.
          </h3>
          <br />
          <h3>
            The way forward is to evolve as a collective movement that will be
            the driving force in transforming consumer behavioural patterns by
            providing alternative solutions for an earth friendly lifestyle.
          </h3>
        </div>
        <div className="my-5">
          {data.map((d) => (
            <FaqQuestion key={d._id} d={d} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
