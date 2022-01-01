import React from "react";
import Category from "./categories/CategoryPage";
import "./CategoryCard.css";
import { useNavigate } from "react-router-dom";
const CategoryCard = (props) => {
  let navigate = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    console.log("you clicked on a category");
    navigate(`/home/${props.name}`);
  };

  return (
    <a onClick={clickHandler} className="item">
      <img src={props.image}></img>
      <div className="item-details">
        <h1>{props.name}</h1>
        <h1>{props.availableNumber} Items</h1>
      </div>
    </a>
  );
};
export default CategoryCard;
