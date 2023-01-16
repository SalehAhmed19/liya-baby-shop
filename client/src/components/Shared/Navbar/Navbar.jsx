import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiArrowToBottom } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import NavLinks from "./NavLinks";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../../Assets/icon/Liya Baby Shop-3.png";
import { BsCartCheck, BsHeart } from "react-icons/bs";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-mongoose">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={logo} alt="" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <MdCancel /> : <AiOutlineMenu></AiOutlineMenu>}
          </div>
        </div>
        <ul className="md:flex hidden z-20 uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/" className="py-7 px-3 inline-block text-[white]">
              Home
            </Link>
          </li>
          <NavLinks />
          {/* search bar */}
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered"
              />
              <button className="btn btn-secondary">
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
            <ul className="flex justify-between text-[white] px-3">
              <Link to="/login" className="lg:ml-8">
                Login
              </Link>
              <Link to="/login" className="lg:ml-8">
                <div className="indicator">
                  <span className="indicator-item badge badge-secondary">
                    8
                  </span>
                  <div className="grid   place-items-center">
                    <BsHeart className="text-3xl" />
                  </div>
                </div>
              </Link>
              <Link to="/login" className="lg:ml-8">
                <div className="indicator">
                  <span className="indicator-item badge badge-secondary">
                    8
                  </span>
                  <div className="grid   place-items-center">
                    <BsCartCheck className="text-3xl" />
                  </div>
                </div>
              </Link>
            </ul>
          </div>
        </ul>
        <div className="md:block hidden">{/* <Button /> */}</div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-[white] fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
         z-20`}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block text-[black]">
              Home
            </Link>
          </li>
          <NavLinks />
          <div>
            <ul className="  lg:text-[white] px-3">
              <Link to="/login" className="ml-4">
                Login/Sign Up
              </Link>
              <Link to="/login" className="ml-4">
                <div className="indicator">
                  <span className="indicator-item badge badge-secondary">
                    8
                  </span>
                  <div className="grid   place-items-center">
                    <BsCartCheck className="text-3xl" />
                  </div>
                </div>
              </Link>
              <Link to="/login" className="ml-4">
                <div className="indicator">
                  <span className="indicator-item badge badge-secondary">
                    8
                  </span>
                  <div className="grid   place-items-center">
                    <BsCartCheck className="text-3xl" />
                  </div>
                </div>
              </Link>
            </ul>
          </div>
          <div className="py-5">{/* <Button /> */}</div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
