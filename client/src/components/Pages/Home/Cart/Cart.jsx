import React, { useState } from "react";
import OfferBar from "./OfferBar";
import CartBar from "./CartBar";
import { BiCheck } from "react-icons/bi";
import { RiSecurePaymentFill } from "react-icons/ri";
import CheckoutBtn from "./CheckoutBtn";
import payment1 from "../../../../Assets/PaymentsIcon/COD1.svg";
import payment2 from "../../../../Assets/PaymentsIcon/Maestro1.svg";
import payment3 from "../../../../Assets/PaymentsIcon/Mastercard1.svg";
import payment4 from "../../../../Assets/PaymentsIcon/Net_Banking1.svg";
import payment5 from "../../../../Assets/PaymentsIcon/Rupay1.svg";
import payment6 from "../../../../Assets/PaymentsIcon/upi.svg";
import payment7 from "../../../../Assets/PaymentsIcon/Visa1.svg";

const Cart = () => {
  const [qty, setQty] = useState(1);
  const increment = () => {
    let qtyCount = qty + 1;
    setQty(qtyCount);
  };
  const decrement = () => {
    if (qty > 1) {
      let qtyCount = qty - 1;
      setQty(qtyCount);
    }
  };

  const PaymentIcon = [
    { _id: 1, icon: payment1 },
    { _id: 2, icon: payment2 },
    { _id: 3, icon: payment3 },
    { _id: 4, icon: payment4 },
    { _id: 5, icon: payment5 },
    { _id: 6, icon: payment6 },
    { _id: 7, icon: payment7 },
  ];
  return (
    <div className="mx-5 lg:mx-10 my-10">
      <h1 className="font-bold">My Cart (1 items)</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-2">
          <OfferBar />
          <CartBar increment={increment} decrement={decrement} qty={qty} />
        </div>
        <div className="m-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h2 className="font-bold mr-2">Total</h2>{" "}
              <span className="italic">
                <small>(Inclusive of all taxes)</small>
              </span>
            </div>
            <h2 className="ml-5 text-primary">${250 * qty}</h2>
          </div>
          <div className="flex justify-end mt-2">
            <div className="flex items-center bg-[#D1F1D9] border border-[#368B48] px-2 rounded w-52">
              <BiCheck className="text-[#368B48]" />
              <p className="ml-2 text-[#368B48] text-center">
                <small> You got a FREE Shipping!</small>
              </p>
            </div>
          </div>
          <CheckoutBtn />
          <div className="flex items-center">
            <RiSecurePaymentFill className="text-xl mr-2" />
            <p> 100% secure payments</p>
          </div>
          <div className="flex">
            {PaymentIcon.map((pi) => (
              <div key={pi._id}>
                <img className="h-8 w-8" src={pi.icon} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
