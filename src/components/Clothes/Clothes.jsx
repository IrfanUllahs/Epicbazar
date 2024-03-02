import { useEffect, useState } from "react";
// import ProductData from "../../../public/Data/ProductData";
import Card from "../Card/Card";
import ProductsData from "../../Data/ProductData.js";
import { IoMdArrowDropdown } from "react-icons/io";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
function Clothes() {
  const [filteredItem, setfilteredItem] = useState([]);
  const [selectcategory, setselectcategory] = useState("all");
  const [sortedValue, setsortedValue] = useState("");

  const FiltereData = (category) => {
    setselectcategory(category);
    const filterValues =
      category == "all"
        ? ProductsData
        : ProductsData.filter((value) => value.category.name == category);
    setfilteredItem(filterValues);
  };
  const sortData = (sortValue) => {
    if (sortValue == "price(a-z)") {
      const sortedItems = [...filteredItem].sort((a, b) => b.price - a.price);
      setfilteredItem(sortedItems);
    } else if (sortValue == "price(z-a)") {
      const sortedItems = [...filteredItem].sort((a, b) => a.price - b.price);
      setfilteredItem(sortedItems);
    } else if (sortValue == "rating(a-z)") {
      const sortedItems = [...filteredItem].sort((a, b) => b.rating - a.rating);
      setfilteredItem(sortedItems);
    } else if (sortValue == "rating(z-a)") {
      const sortedItems = [...filteredItem].sort((a, b) => a.rating - b.rating);
      setfilteredItem(sortedItems);
    }
    setsortedValue(sortValue);
  };
  useEffect(() => {
    setfilteredItem(ProductsData);
  }, []);
  useEffect(() => {
    sortData(sortedValue);
  }, [selectcategory]);

  return (
    <div className="dark:bg-[#111827]">
      <div className="container pt-[150px]">
        <div className="flex justify-end gap-4">
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Sort
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => sortData("price(a-z)")}>
                Price(A-Z)
              </MenuItem>
              <MenuItem onClick={() => sortData("price(z-a)")}>
                Price(Z-A)
              </MenuItem>
              <MenuItem onClick={() => sortData("rating(a-z)")}>
                rating(A-Z)
              </MenuItem>
              <MenuItem onClick={() => sortData("rating(z-a)")}>
                rating(Z-A)
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Category
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => FiltereData("women")}>women</MenuItem>
              <MenuItem onClick={() => FiltereData("men")}>men</MenuItem>

              <MenuItem onClick={() => FiltereData("all")}>All</MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-10 mt-10">
          {filteredItem
            .filter((value) => value.page === "clothes")
            .map((product) => (
              <Card key={product.id} value={product} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Clothes;
