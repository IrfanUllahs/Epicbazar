import React, { useEffect } from "react";
import Card from "../Card/Card";
import ProductsData from "../../Data/ProductData";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";

function Electronics() {
  const [filteredItem, setfilteredItem] = useState([]);
  const [selectcategory, setselectcategory] = useState("all");

  const FiltereData = (category) => {
    setselectcategory(category);
    const filterValues =
      category == "all"
        ? ProductsData
        : ProductsData.filter((value) => value.category.name == category);
    setfilteredItem(filterValues);
  };

  useEffect(() => {
    setfilteredItem(ProductsData);
  }, []);

  return (
    <div className="dark:bg-[#111827]">
      <div className="container py-[50px] ">
        {/* filter code is here */}
        <div className="flex justify-end">
          <select
            id="gender"
            name="gender"
            value={selectcategory}
            className="w-[200px] block border-[4px] border-yellow-600 outline-none focus:outline-none p-4 dark:bg-black dark:text-secondary rounded-md "
            onChange={(e) => FiltereData(e.target.value)}
          >
            <option value="computer" className="text-[20px]">
              computer
            </option>
            <option value="headphone" className="text-[20px]">
              headphone
            </option>
            <option value="other" className="text-[20px]">
              other
            </option>
            <option value="all" className="text-[20px]">
              All
            </option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-10 mt-10 ">
          {filteredItem
            .filter((value) => value.page === "electronics")
            .map((product) => (
              <Card key={product.id} value={product} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Electronics;
