import React, { useEffect, useState } from "react";
import {} from "react-dom";
import logo from "/images/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchQuerymethod } from "../features/addtoCart/AddtoCartSlice";
export default function Navbar() {
  const count = useSelector((state) => state.cartProductCount);
  const dispatch = useDispatch();
  const [themomde, setThemomde] = useState(() => {
    const storedTheme = localStorage.getItem("themeMode");
    return storedTheme ? storedTheme === "light" : true;
  });
  const [isClicked, setisClicked] = useState(true);
  const [searchQuery, setsearchQuery] = useState("");
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
      link: "/clothes",
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
  const [isDisplay, setisDisplay] = useState(false);
  const searchItems = () => {
    dispatch(searchQuerymethod(searchQuery));
  };
  return (
    <div className="fixed w-full z-30 bg-white  top-0 ">
      <div className="shadow-md dark:bg-gray-900 dark:text-white  dark:shadow-black duration-200 relative z-40">
        <div className="bg-primary/40 py-3">
          <div className="container flex justify-between items-center">
            {/* uperNavbar section  */}

            <Link className="flex gap-2 font-bold text-2xl sm:text-3xl" to="/">
              <img src={logo} className="w-10" />
              <span className="text-black">EpicBazaar</span>
            </Link>
            {/* search bar here  */}

            <div
              className=" border border-gray-300 rounded-full px-[10px] py-[4px] sm:w-[200px] w-[40px] focus:outline focus:border-secondary sm:hover:w-[300px] hover:w-[250px]	duration-500 ease-in-out  bg-white
                dark:bg-black absolute right-[50px] sm:right-[190px]  md:right-[200px] cursor-pointer  group flex h-[40px] justify-center items-center "
            >
              <input
                placeholder="search "
                className="w-full h-full border-none focus:border-none focus:outline-none group-hover:text-secondary bg-white dark:bg-black sm:inline-block hidden  group-hover:inline-block "
                onChange={(e) => setsearchQuery(e.target.value)}
              />
              <Link to={searchQuery && searchQuery != "." ? `/search` : null}>
                <FaSearch
                  className={
                    searchQuery && searchQuery != "."
                      ? `cursor-pointer`
                      : `cursor-not-allowed`
                  }
                  onClick={searchItems}
                />
              </Link>
            </div>
            {/* right portion  */}
            <div className=" flex gap-4 items-center relative  ">
              {/* cart button is here */}
              <Link to="/cart ">
                <div className="bg-secondary hidden rounded-full py-[8px] px-[22px] sm:flex justify-center items-center gap-2 text-white text-[20px] group cursor-pointer group">
                  <div
                    className="flex
                   items-center justify-center relative"
                  >
                    <FaCartShopping />
                    <p className="absolute -top-3 bottom-0 left-[105%] text-red-950 text-[16px] rounded-full">
                      {count}
                    </p>
                    <p className="absolute top-8 bg-gray-400 rounded-xl px-2 opacity-0 sm:group-hover:opacity-100 duration-500 ">
                      cart
                    </p>
                  </div>
                </div>
              </Link>
              {/* dark mode button is here */}
              <div
                className="bg-slate-500 sm:block hidden rounded-sm p-1 group dark:bg-yellow-900 relative  "
                onClick={() => setThemomde((preValue) => !preValue)}
              >
                {themomde ? (
                  <MdLightMode className=" text-[22px] cursor-pointer text-white  " />
                ) : (
                  <MdDarkMode className="text-[22px] cursor-pointer text-blue-400  " />
                )}
                <p className="absolute top-8 bg-gray-400 rounded-xl px-2 opacity-0 sm:group-hover:opacity-100 duration-500 text-[20px] right-[-60px] ">
                  themeMode
                </p>
              </div>

              {/* this is the code for responsiv nev bar */}
              <RiMenu3Fill
                className={`sm:hidden text-xl duration-500 ${
                  isDisplay ? "-rotate-90 " : ""
                }`}
                onClick={() => setisDisplay((prev) => !prev)}
              />
              <div
                className={`w-[320px] border rounded-b-[20px] rounded-bl-[20px] h-[200px] z-50 absolute duration-500 sm:hidden top-[40px]  bg-black -right-5   justify-center ${
                  isDisplay ? "-right-5" : "-right-[340px]"
                } 
               
               `}
              >
                {/* // this is shoping cart code  */}
                <Link to="/cart ">
                  <div className="bg-secondary  rounded-full py-[8px] px-[22px] sm:flex justify-center items-center gap-2 text-white text-[15px] group cursor-pointer mx-auto  w-[80%] my-6">
                    <div
                      className="flex
                   items-center justify-center relative gap-4"
                    >
                      <p>Shoping Cart</p>
                      <FaCartShopping />
                      <p className="absolute -top-2 bottom-0 left-[78%] text-red-950 text-[16px] rounded-full">
                        {count}
                      </p>
                    </div>
                  </div>
                </Link>
                {/* dark mode button is here */}
                <div
                  className="bg-secondary  rounded-full py-[8px] px-[22px] sm:flex justify-center items-center gap-2 text-white text-[15px] group cursor-pointer mx-auto  w-[80%] "
                  onClick={() => setThemomde((preValue) => !preValue)}
                >
                  {themomde ? (
                    <div
                      className="flex gap-2 items-center justify-center

                    "
                    >
                      <div>Light Mode</div>

                      <MdLightMode className=" text-[22px] cursor-pointer text-white  " />
                    </div>
                  ) : (
                    <div
                      className="flex gap-2  items-center justify-center
                    "
                    >
                      <div>Dark Mode</div>
                      <MdDarkMode className="text-[22px] cursor-pointer text-blue-400  " />
                    </div>
                  )}
                </div>
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
            >
              {Menu.map((value) => (
                <li key={value.id} className="py-3 ">
                  <NavLink
                    to={value.link}
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-secondary" : ""
                      } hover:text-secondary text-[19px] font-semibold`
                    }
                  >
                    {value.name}
                  </NavLink>
                </li>
              ))}
              {/* Here is the section for dropDown Menu */}
              {/* <li className="group relative ">
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
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
