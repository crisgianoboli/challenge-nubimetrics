import React from "react";
import Logo from "../assets/Logo";
import foodImg from "../assets/food.jpg";

import "../styles/home.css";
import ListFood from "../components/ListFood/ListFood";

const Home = () => {
  return (
    <div className="home-container">
      <Logo />
      <div className="home-content">
        <img src={foodImg} alt="foodImg" className="food-image" />
        <ListFood />
      </div>
    </div>
  );
};

export default Home;
