import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiArrowToBottom } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import NavLinks from "./NavLinks";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-mongoose">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <p className="text-[white]">liya baby shop</p>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? (
              <MdCancel />
            ) : (
              <AiOutlineMenu
                
              ></AiOutlineMenu>
            )}
          </div>
        </div>
        <ul className="md:flex hidden z-20 uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/" className="py-7 px-3 inline-block text-[white]">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="md:block hidden">{/* <Button /> */}</div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
         z-20`}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">{/* <Button /> */}</div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
