import React from "react";
import "./styles/Foods.css";
import burger from "../imgs/burgericon.png";
import pizza from "../imgs/pizzaicon.png";
import bread from "../imgs/breadicon.png";
import image1 from "../imgs/burger.jpg";
import image2 from "../imgs/burger1.jpg";
import image3 from "../imgs/burger2.jpg";
import image4 from "../imgs/pizza.jpg";

const Foods = () => {
  return (
    <div className="container">
      <div className="main-label">Popular Foods</div>
      <div className="category-table">
        <button id="all" className="active">
          All
        </button>
        <button>
          <img src={burger} />
           Burger
        </button>
        <button>
          <img src={pizza} />
           Pizza
        </button>
        <button>
          <img src={bread} />
           Bread
        </button>
      </div>
      <div className="card-table">
        <div className="card-item">
          <img src={image1} alt="burger" />
          <div className="card-item-label">Chicken Burger</div>
          <div className="card-item-footer">
            <div className="card-item-price">$24</div>
            <button className="card-item-btn">Add to Cart</button>
          </div>
        </div>

        <div className="card-item">
          <img src={image1} alt="burger" />
          <div className="card-item-label">Chicken Burger</div>
          <div className="card-item-footer">
            <div className="card-item-price">$24</div>
            <button className="card-item-btn">Add to Cart</button>
          </div>
        </div>

        <div className="card-item">
          <img src={image1} alt="burger" />
          <div className="card-item-label">Chicken Burger</div>
          <div className="card-item-footer">
            <div className="card-item-price">$24</div>
            <button className="card-item-btn">Add to Cart</button>
          </div>
        </div>

        <div className="card-item">
          <img src={image1} alt="burger" />
          <div className="card-item-label">Chicken Burger</div>
          <div className="card-item-footer">
            <div className="card-item-price">$24</div>
            <button className="card-item-btn">Add to Cart</button>
          </div>
        </div>

        <div className="card-item">
          <img src={image1} alt="burger" />
          <div className="card-item-label">Chicken Burger</div>
          <div className="card-item-footer">
            <div className="card-item-price">$24</div>
            <button className="card-item-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foods;
