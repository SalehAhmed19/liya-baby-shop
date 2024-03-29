import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./MyLinks";
const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer group text-[#2096BE]">
            <h3
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              {/* <span className="text-xl md:hidden inline hover:text-red-300">
                {heading === link.name ? (
                  <span>
                    <RiArrowDropUpLine />
                  </span>
                ) : (
                  <RiArrowDropDownLine />
                )}
              </span> */}
              {/* <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2 duration-300">
                <span>
                  <RiArrowDropDownLine />
                </span>
              </span> */}
            </h3>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    {/* <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-softPeach rotate-45"
                    ></div> */}
                  </div>
                  {/* <div className="bg-softPeach p-5 grid grid-cols-3 gap-10 ">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        <h3 className="text-lg font-semibold text-mongoose">
                          {mysublinks.Head}
                        </h3>
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-sm text-naturalGray hover:translate-x-2 duration-500 my-2.5">
                            <Link
                              to={slink.link}
                              className="hover:text-tradewind"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div> */}
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h3
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline ">
                      {subHeading === slinks.Head ? (
                        <RiArrowDropUpLine />
                      ) : (
                        <RiArrowDropDownLine />
                      )}
                    </span>
                  </h3>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
