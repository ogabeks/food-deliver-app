import React from "react";
import "./styles/Info.css";
import deliverman from "../imgs/deliverman.png";
const Info = () => {
  return (
    <div className="info-section container">
      <div className="info-section-image">
        <img src={deliverman} alt="imagesas" />
      </div>
      <div className="info-section-text">
        <div className="main-label">
          Why <span>Tasty Treat?</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          minus. Tempora reprehenderit a corporis velit, laboriosam vitae ullam,
          repellat illo sequi odio esse iste fugiat dolor, optio incidunt
          eligendi deleniti!
        </p>
        <ul className="list">
          <li>
            <div className="list-label">
              <i className="uil uil-check-circle"></i> Fresh and tasty foods
            </div>
            <div className="list-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
              voluptatibus.
            </div>
          </li>

          <li>
            <div className="list-label">
              <i className="uil uil-check-circle"></i> Quality support
            </div>
            <div className="list-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
              voluptatibus.
            </div>
          </li>

          <li>
            <div className="list-label">
              <i className="uil uil-check-circle"></i> Order from any location
            </div>
            <div className="list-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
              voluptatibus.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
