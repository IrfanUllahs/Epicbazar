import React from "react";

import ProductsData from "../../../Data/ProductData";
import Card from "../../Card/Card";

function TopSelling() {
  return (
    <>
      <div className="dark:bg-[#111827]">
        <div className="flex flex-col items-center container gap-[40px] py-3 ">
          {/* tile and description of products */}
          <div className="text-center flex flex-col gap-[10px]">
            <p className="text-yellow-600" data-aos="fade-up">
              Top Selling Products for you
            </p>
            <h1
              className="text-[25px] font-bold dark:text-white"
              data-aos="fade-up"
            >
              Products
            </h1>
            <p className="text-gray-400" data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              asperiores modi Sit asperiores modi
            </p>
          </div>
          {/* products cards are here and rating   */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-10 ">
            {/* {ProductsData.filter((value) =>
              value.page === "home-data" ? (
                <Card key={value.id} value={value} />
              ) : null
            )} */}
            {ProductsData.filter((value) => value.page === "home-data").map(
              (product) => (
                <Card key={product.id} value={product} />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default TopSelling;
