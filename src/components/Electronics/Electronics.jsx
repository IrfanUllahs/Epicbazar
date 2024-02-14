import React, { useEffect } from "react";
import Card from "../Card/Card";

import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useSelector } from "react-redux";
function Electronics() {
  const [filteredItem, setfilteredItem] = useState([]);
  const [selectcategory, setselectcategory] = useState("all");
  const ProductsData = useSelector((state) => state.ProductsData);

  const FiltereData = (category) => {
    const filterValues =
      category == "all"
        ? ProductsData
        : ProductsData.filter((value) => value.category.name == category);
    setfilteredItem(filterValues);
  };
  // const showAll = () => {
  //   setfilteredItem(ProductsData);
  // };
  useEffect(() => {
    setfilteredItem(ProductsData);
  }, []);

  return (
    <div className="dark:bg-[#111827]">
      <div className="container py-[50px]">
        <div className="border-[2px] rounded-md pl-3 border-secondary w-[300px]  flex justify-between mb-6 ">
          <p>Select category</p>
          <select
            id="category"
            name="category "
            onChange={(e) => FiltereData(e.target.value)}
            className="bg-transparent focus:border-none focus:outline-none"
          >
            <option value="all" selected>
              default
            </option>
            <option value="computer">computer</option>
            <option value="other">others</option>
            <option value="headphone">headphone</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-10 ">
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
