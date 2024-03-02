import React from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Card({ value }) {
  return (
    <>
      <Link to={`/shop/${value.id}`}>
        <div
          className=" flex flex-col h-[400px] w-[280px] md:w-[300px]  xl:w-[350px] group cursor-pointer"
          key={value.id}
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay={value.aosDelay}
        >
          <div className="h-[80%] w-full overflow-hidden rounded-md group-hover:scale-110 mb-2 duration-500">
            <img
              src={value.images[0].original}
              className="h-full w-full object-cover"
            />
          </div>
          <h2 className="text-[14px] font-bold text-black dark:text-white mt-2 ">
            {value.title}
          </h2>

          <div
            className="flex
             items-center justify-between gap-[5px]  "
          >
            <div className="flex font-bold text-secondary text-[17px]">
              <p>Rs.</p>
              <p>{value.price}</p>
            </div>
            <div
              className="flex
                  items-center gap-2"
            >
              <FaStar className="text-yellow-400" />
              <p className="dark:text-white">{value.rating}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
