import React, { useEffect } from "react";
import Card from "../Card/Card";
import ProductsData from "../../Data/ProductData";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

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
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Category
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => FiltereData("computer")}>
                Computer
              </MenuItem>
              <MenuItem onClick={() => FiltereData("headphone")}>
                Headphone
              </MenuItem>
              <MenuItem onClick={() => FiltereData("other")}>Other</MenuItem>
              <MenuItem onClick={() => FiltereData("all")}>All</MenuItem>
            </MenuList>
          </Menu>
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
