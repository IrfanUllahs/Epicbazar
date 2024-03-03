import React from "react";
import { useSelector } from "react-redux";
import ProductData from "../../Data/ProductData";
import Card from "../Card/Card";
function SearchData() {
  const searchQuery = useSelector((state) => state.searchQuery);
  const filteredProducts = ProductData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery)
  );
  return (
    <div className="dark:bg-[#111827]">
      <div className="container py-[150px] ">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-10 mt-10 ">
          {filteredProducts.length === 0 ? (
            <p className=" text-[25px] ">No products found</p>
          ) : (
            filteredProducts.map((selectItem) => (
              <Card key={selectItem.id} value={selectItem} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchData;
