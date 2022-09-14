import React from "react";
import SearchInput from "../SearchInput/SearchInput";
import SelectCheck from "./../SelectCheck/SelectCheck";

import "../../styles/list-food.css";

const ListFood = () => {
  return (
    <div className="food-list-content">
      <h2 className="cook-title">Recetas de Cocina</h2>
      <div className="search-content">
        <SearchInput />
        <SelectCheck />
      </div>
    </div>
  );
};

export default ListFood;
