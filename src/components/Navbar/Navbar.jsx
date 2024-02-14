import React, { useEffect, useState } from "react";
import {} from "react-dom";
import logo from "/images/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

import { FaCaretDown } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const count = useSelector((state) => state.cartProductCount);
  const [themomde, setThemomde] = useState(() => {
    const storedTheme = localStorage.getItem("themeMode");
    return storedTheme ? storedTheme === "light" : true;
  });
  useEffect(() => {
    localStorage.setItem("themeMode", themomde ? "light" : "dark");
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(themomde ? "light" : "dark");
  }, [themomde]);
  const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Clothes",
      link: "/Clothes",
    },

    {
      id: 3,
      name: "Electronics",
      link: "/Electronics",
    },
  ];
  const DropdownLinks = [
    {
      id: 6,
      name: "Trending Products",
      link: "/#",
    },
    {
      id: 7,
      name: "Best Selling",
      link: "/#",
    },
    {
      id: 8,
      name: "Top Rated",
      link: "/#",
    },
  ];
  return (
    <>
      <div className="shadow-md dark:bg-gray-900 dark:text-white  dark:shadow-black duration-200 relative z-40">
        <div className="bg-primary/40 py-3">
          <div className="container flex justify-between items-center">
            {/* uperNavbar section  */}

            <Link className="flex gap-2 font-bold text-2xl sm:text-3xl" to="/">
              <img src={logo} className="w-10" />
              <span className="text-black">EpicBazaar</span>
            </Link>
            {/* right portion  */}
            <div className=" flex gap-4 items-center">
              {/* search bar here  */}
              <input
                className="border border-gray-300 rounded-full px-[10px] py-[4px] w-[200px] focus:outline-secondary hover:w-[300px]	duration-500 ease-in-out hover:placeholder:text-secondary
                dark:bg-black
                "
                type="text"
                placeholder="Search"
              />
              {/* cart button is here */}
              <Link to="/cart">
                <div className="bg-secondary rounded-full py-[5px] px-[22px] flex justify-center items-center gap-2 text-white text-[15px] group cursor-pointer ">
                  <p className="group-hover:block hidden text-[16px] duration-500 ease-in-out">
                    Order
                  </p>
                  <div
                    className="flex
                   items-center justify-center relative"
                  >
                    <FaCartShopping />
                    <p className="absolute -top-2 bottom-0 left-[105%] text-red-950 text-[16px] rounded-full">
                      {count ? count : ""}
                    </p>
                  </div>
                </div>
              </Link>
              {/* dark mode button is here */}
              <div
                className="hover:bg-slate-500 rounded-sm p-1 group dark-hover:bg-blue-400"
                onClick={() => setThemomde((preValue) => !preValue)}
              >
                {themomde ? (
                  <MdLightMode className=" text-[22px] cursor-pointer text-white  " />
                ) : (
                  <MdDarkMode className="text-[22px] cursor-pointer text-blue-400  " />
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* lower Navbar section  */}
          <div className="container ">
            <ul
              className="flex justify-center gap-[30px] items-center "
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              {Menu.map((value) => (
                <li key={value.id} className="py-3 ">
                  <NavLink
                    to={value.link}
                    className={({ isActive }) =>
                      `${isActive ? "text-secondary" : ""} hover:text-secondary`
                    }
                  >
                    {value.name}
                  </NavLink>
                </li>
              ))}
              {/* Here is the section for dropDown Menu */}
              <li className="group relative ">
                <a
                  className="flex
                 items-center gap-[10] "
                >
                  <span>Trending Products</span>
                  <FaCaretDown className="transition-all duration-500 group-hover:rotate-180" />
                </a>
                <div className="absolute   bg-white shadow-md rounded-md p-2 dark:bg-black border border-green-900 hidden group-hover:inline-block ">
                  <ul>
                    {DropdownLinks.map((value) => (
                      <li key={value.id}>
                        <a
                          href={value.link}
                          className="hover:bg-primary/20 p-1  rounded-md inline-block whitespace-nowrap w-full
                          my-2
                          "
                        >
                          {value.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
