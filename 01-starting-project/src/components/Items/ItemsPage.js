import React from "react";
import { useParams } from "react-router-dom";

const ItemsPage = () => {
  const params = useParams();
  console.log("yes it is entering the itemspage");
  return (
    <React.Fragment>
      <div className="item-img-container">
        <p>this is the pagce of {params.itemName}</p>
      </div>
      <div className="item-details"></div>
    </React.Fragment>
  );
};
export default ItemsPage;
