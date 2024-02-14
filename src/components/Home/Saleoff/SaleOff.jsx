import React from "react";
import image from "/images/topSelling/5.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
export default function SaleOff() {
  return (
    <>
      <div className="dark:bg-[#111827]">
        <div className="container   sm:flex gap-16  flex-col sm:flex-row py-4 justify-center items-center">
          {/* this is image div */}
          <div
            className=" sm:my-0 my-[100px] drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
            data-aos="zoom-in"
            data-aos-once="true"
          >
            <img
              src={image}
              className="w-[450px] h-[400px] object-cover sm:mx-auto"
            />
          </div>
          {/* this is contents div */}
          <div
            className="flex
           flex-col gap-[40px]
           "
          >
            <>
              <h1
                className="text-[30px] font-bold  text-black dark:text-white"
                data-aos="fade-up"
              >
                Winter Sale upto 50% Off
              </h1>
            </>
            <>
              <p className="text-gray-400" data-aos="fade-up">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                reiciendis inventore iste ratione ex alias quis magni at optio
              </p>
            </>
            <>
              <div
                className="flex gap-[15px] items-center  dark:text-white"
                data-aos="fade-up"
              >
                <GrSecure />
                <p className="font-bold">Quality Products</p>
              </div>
              <div
                className="flex gap-[15px] items-center dark:text-white"
                data-aos="fade-up"
              >
                <IoFastFood />
                <p className="font-bold">Fast Delivery</p>
              </div>
              <div
                className="flex gap-[15px] items-center dark:text-white"
                data-aos="fade-up"
              >
                <GiFoodTruck />
                <p className="font-bold">Easy Payment method</p>
              </div>
              <div
                className="flex gap-[15px] items-center dark:text-white"
                data-aos="fade-up"
              >
                <GiFoodTruck />
                <p className="font-bold">Get Offers</p>
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
}
