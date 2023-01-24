import React, { useState } from "react";

import { MdCancel } from "react-icons/md";
import NavLinks from "./NavLinks";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../../Assets/icon/Liya Baby Shop-3.png";
import { BsCartCheck, BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-[#E2F0F7]">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <MdCancel /> : <AiOutlineMenu></AiOutlineMenu>}
          </div>
        </div>
        <ul className="md:flex hidden z-20 uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link
              to="/categories"
              className="py-7 px-3 inline-block text-[#2096BE]"
            >
              <h3>Categories</h3>
            </Link>
          </li>
          <li>
            <a
              href="#about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="py-7 px-3 inline-block text-[#2096BE]"
            >
              <h3>About</h3>
            </a>
          </li>
          <li>
            <a
              href="#recommend"
             
              className="py-7 px-3 inline-block text-[#2096BE]"
            >
              <h3>Categories</h3>
            </a>
          </li>

          {/* search bar */}
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered"
              />
              <button className="btn btn-primary text-[#fff]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="">
            <ul className="flex justify-between text-[#2096BE] px-3">
              <Link to="/login" className="lg:ml-8">
                Login
              </Link>
              <Link to="/login" className="lg:ml-8">
                <div className="indicator">
                  <span className="indicator-item badge badge-primary text-[#fff]">
                    8
                  </span>
                  <div className="grid   place-items-center">
                    <BsHeart className="text-3xl" />
                  </div>
                </div>
              </Link>
              <Link to="/cart" className="lg:ml-8">
                <div className="indicator">
                  <span className="indicator-item badge badge-primary text-[#fff]">
                    8
                  </span>
                  <div className="grid place-items-center">
                    <BsCartCheck className="text-3xl" />
                  </div>
                </div>
              </Link>
            </ul>
          </div>
        </ul>
        <div className="md:block hidden">{/* <Button /> */}</div>
        {/* Mobile nav */}
      </div>
    </nav>
  );
};

export default Navbar;
