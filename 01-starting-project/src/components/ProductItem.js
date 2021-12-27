import React from "react";
import "./ProductItem.css";

const ProductItem = (props) => {
  return (
    <a href="#" className="item">
      <img src={props.image}></img>
      <div className="item-details">
        <h1>{props.name}</h1>
        <h1>{props.availableNumber} Items</h1>
      </div>
    </a>
  );
};
export default ProductItem;
