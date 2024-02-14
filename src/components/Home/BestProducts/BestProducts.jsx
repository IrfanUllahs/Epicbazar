import React from "react";
import Img1 from "/images/shirtsImages/1.png";
import Img2 from "/images/shirtsImages/shirt2.png";
import Img3 from "/images/shirtsImages/shirt3.png";
import Img4 from "/images/shirtsImages/shirt1.png";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    title: "classic Heather Gray Hoodie",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
  },
  {
    id: 4,
    img: Img4,
    title: "Simple",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
  },
];
function BestProducts() {
  return (
    <>
      <div className="dark:bg-[#111827]">
        <div className="flex flex-col items-center container gap-[80px]  py-[60px]">
          {/* tile and description of products */}
          <div className="text-center flex flex-col items-start gap-[10px] w-full">
            <p className="text-yellow-600" data-aos="fade-up">
              Top Rated Products for you
            </p>
            <h1
              className="text-[25px] font-bold dark:text-white"
              data-aos="fade-up"
            >
              Best Products
            </h1>
            <p className="text-gray-400" data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              asperiores modi Sit asperiores modi
            </p>
          </div>
          {/* products cards are here and rating   */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  place-items-center gap-20 mt-9  ">
            {ProductsData.map((value) => (
              <div
                data-aos="zoom-in"
                data-aos-once="true"
                className="flex flex-col items-center  justify-end h-[300px] pb-5 rounded-2xl bg-white hover:bg-black/80 dark:hover:bg-primary hover:text-white relative  duration-300  shadow-xl group dark:bg-black/45 mt-10 "
                key={value.id}
              >
                <img
                  src={value.img}
                  className="w-[130px] h-[190px] mx-[50px] absolute top-[-100px] group-hover:scale-105 duration-500 group-hover:translate-y-[-10px] "
                />
                <div className="flex w-full flex-col justify-center  text-center gap-4 items-center">
                  <div
                    className="flex justify-center items-center gap-2
                "
                  >
                    <FaStar className="text-yellow-600" />
                    <FaStar className="text-yellow-600" />
                    <FaStar className="text-yellow-600" />
                    <FaStar className="text-yellow-600" />
                  </div>
                  <div>
                    <h1 className="text-[20px] font-bold dark:text-white">
                      {value.title}
                    </h1>
                    <p className="text-gray-400 dark:text-white text-[14px]">
                      {value.description}
                    </p>
                  </div>
                  <button className="bg-primary rounded-full p-[5px] w-[100px] dark:group-hover:bg-white dark:group-hover:text-primary ">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BestProducts;
