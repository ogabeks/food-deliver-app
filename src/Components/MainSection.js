import React from "react";
import { Link } from "react-router-dom";
import "./styles/MainSection.css";
import hero from "../imgs/hero.png";

const MainSection = () => {
  return (
    <>
      <div className="main-section container">
        <div className="main-section-info">
          <div className="top-label">Easy way to make an order</div>
          <h1>
            <span>HUGNRY?</span> Just wait <br />
            food at <span>your door</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni
            delectus tenetur autem, sint veritatis!
          </p>
          <Link to="#" className="btn btn-solid">
            Order now
          </Link>
          <Link to="/foods" className="btn btn-outline">
            See all foods
          </Link>
          <div className="fees">
            <div>
              <i className="uil uil-car"></i>
              No shipping charge
            </div>
            <div>
              <i className="uil uil-shield-check"></i>
              100% secure checkout
            </div>
          </div>
        </div>
        <div className="main-section-img">
          <img src={hero} />
        </div>
      </div>
    </>
  );
};

export default MainSection;
