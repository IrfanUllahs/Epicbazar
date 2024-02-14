import React from "react";
// import ProductsData from "../ProductsData";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
function Clothes() {
  const ProductsData = useSelector((state) => state.ProductsData);
  return (
    <div className="dark:bg-[#111827]">
      <div className="container py-[50px]">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-10 ">
          {ProductsData.filter((value) => value.page === "clothes").map(
            (product) => (
              <Card key={product.id} value={product} />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Clothes;
