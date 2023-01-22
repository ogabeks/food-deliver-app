import React from "react";
import icon1 from "../imgs/icon.png";
import icon2 from "../imgs/icon1.png";
import icon3 from "../imgs/icon2.png";
import icon4 from "../imgs/icons3.png";
import "./styles/Cards.css";

const Cards = () => {
  return (
    <div className="cards container">
      <div className="card">
        <img src={icon1} alt="icon" />
        <div className="card-label">Fastfood</div>
      </div>
      <div className="card">
        <img src={icon2} alt="icon" />
        <div className="card-label">Pizza</div>
      </div>
      <div className="card">
        <img src={icon3} alt="icon" />
        <div className="card-label">Asian Food</div>
      </div>
      <div className="card">
        <img src={icon4} alt="icon" />
        <div className="card-label">Row Meat</div>
      </div>
    </div>
  );
};

export default Cards;
