import React from "react";
import "./Home.css";
import descImg from "./../resources/images/desc-img.jpg";
import headerImg from "./../resources/images/headerImg.jpg";
import image from "./../resources/images/productImg/product1.jpg";
import CategoryCard from "../components/CategoryCard";
const Home = (props) => {
  return (
    <div>
      <hr />
      <img className="header-img" src={headerImg}></img>
      <hr />
      <section className="description-section">
        <div className="description-image">
          <img src={descImg} alt="an image of clothing" />
        </div>
        <div className="description-text">
          <h1>Description Text</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            laudantium qui accusantium, voluptates sapiente consectetur odio
            ipsum aspernatur neque nostrum.
          </p>
        </div>
        <hr></hr>
      </section>
      <hr />
      <div className="feature-container">
        <div className="feature-box">
          <i class="fas fa-coins"></i>
          <h1>Budget Deals</h1>
        </div>
        <div className="feature-box">
          <i class="fas fa-medal"></i>
          <h1>Finest Quality</h1>
        </div>
        <div className="feature-box">
          <i class="fas fa-truck"></i>
          <h1>Quick Delievery</h1>
        </div>
        <div className="feature-box">
          <i class="fas fa-hand-holding-usd"></i>
          <h1>Seasonal Discounts</h1>
        </div>
      </div>
      <hr />
      <div className="category-container">
        <div className="men-category category">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <a href="#"> Men</a>
        </div>
        <div className="women-category category">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <a href="#"> Women</a>
        </div>
        <div className="children-category category">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <a href="#"> Children</a>
        </div>
      </div>
      <hr />
      <div className="products-heading">
        <h3>Order from our wide variety of apparels 😏</h3>
        <i class="fas fa-hat-wizard"></i>
      </div>
      <hr />
      <div className="products">
        {props.productArray.map((product) => {
          return (
            <CategoryCard
              name={product.name}
              availableNumber={product.availableNumber}
              id={product.id}
              image={image}
              isFavourite={product.isFavourite}
            ></CategoryCard>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
