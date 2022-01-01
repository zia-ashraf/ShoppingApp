import React from "react";
import "./ItemCard.css";
import oneImage from "../../resources/images/headerImg.jpg";
import { Link } from "react-router-dom";

const ItemCard = (props) => {
  return (
    <Link to={`/home/${props.categoryName}/${props.name}`} className="iitem">
      <img src={oneImage}></img>
      <div className="iitem-details">
        <h1>{props.name}</h1>
        <h2>{props.newPrice}</h2>
      </div>
    </Link>
  );
};
export default ItemCard;
