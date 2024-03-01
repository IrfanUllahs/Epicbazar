import React from "react";
import { useSelector } from "react-redux";
function SearchData() {
  const searchQuery = useSelector((state) => state.searchQuery);
  return (
    <div>
      <p>This is the search data {searchQuery}</p>
    </div>
  );
}

export default SearchData;
