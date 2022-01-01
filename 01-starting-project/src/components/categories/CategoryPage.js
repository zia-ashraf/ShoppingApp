import React from "react";
import "./CategoryPage.css";
import ItemCard from "../Items/ItemCard";
const CategoryPage = (props) => {
  const dummyItems = [
    {
      name: "coatOne",
      newPrice: 12,
      oldPrice: 8,
    },
    {
      name: "coatTwo",
      newPrice: 12,
      oldPrice: 8,
    },
    {
      name: "coatThree",
      newPrice: 12,
      oldPrice: 8,
    },
    {
      name: "coatFour",
      newPrice: 11,
      oldPrice: 20,
    },
  ];
  console.log(props.name);
  return (
    <div className="category-page">
      <h1>{props.name}*Category Name</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
        assumenda molestiae enim, sequi id expedita, libero earum, quidem vitae
        blanditiis illum sit quae aspernatur repellendus cumque inventore nulla
        totam laboriosam?
      </p>
      <br></br>
      <h2>Showing all __results</h2>
      <div className="item-container">
        {dummyItems.map((item) => {
          return (
            <ItemCard
              categoryName={props.name}
              name={item.name}
              oldPrice={item.oldPrice}
              newPrice={item.newPrice}
            ></ItemCard>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryPage;
