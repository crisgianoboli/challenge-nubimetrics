import React from "react";
import SearchInput from "../SearchInput/SearchInput";

import "../../styles/list-food.css";

const ListFood = () => {
  return (
    <div className="food-list-content">
      <h2 className="cook-title">Recetas de Cocina</h2>
      <div>
        <SearchInput />
        
      </div>
    </div>
  );
};

export default ListFood;
