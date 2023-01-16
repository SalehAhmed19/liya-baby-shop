import React from "react";
import img1 from "../../../Assets/images/free.svg";
import img2 from "../../../Assets/images/easy.svg";
import img3 from "../../../Assets/images/safety.svg";
import img4 from "../../../Assets/images/secure.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 mx-10 gap-4 my-10">
      <div className="flex justify-center items-center">
        <img className="mr-3 w-16" src={img1} alt="" />
        <div>
          <h4 className="text-[#2096BE] text-sm">Free delivery across India</h4>
          <p className="text-sm">
            Free delivery above ₹500. We promise to deliver your products
            quickly and safely.
          </p>
        </div>
        <div className="divider lg:divider-horizontal"></div>
      </div>
      <div className="flex justify-center items-center">
        <img className="mr-3 w-16" src={img2} alt="" />
        <div>
          <h4 className="text-[#2096BE] text-sm">Easy replacement</h4>
          <p className="text-sm">
            If you receive a damaged product, we’ll take it back! Now enjoy
            hassle-free shopping.
          </p>
        </div>
        <div className="divider lg:divider-horizontal"></div>
      </div>
      <div className="flex justify-center items-center">
        <img className="mr-3 w-16" src={img3} alt="" />
        <div>
          <h4 className="text-[#2096BE] text-sm">
            Strict COVID-safety measures
          </h4>
          <p className="text-sm">
            We follow all precautions at every step of acquiring, packaging and
            delivering your product.
          </p>
        </div>
        <div className="divider lg:divider-horizontal"></div>
      </div>
      <div className="flex justify-center items-center">
        <img className="mr-3 w-16" src={img4} alt="" />
        <div>
          <h4 className="text-[#2096BE] text-sm">Secure payments</h4>
          <p className="text-sm">
            With a 100% secure payment gateway, our website is perfectly safe
            for you to shop from.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
