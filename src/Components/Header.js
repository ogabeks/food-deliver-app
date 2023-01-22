import React, { useState } from "react";
import logo from "../imgs/logo.png";
import { Link } from "react-router-dom";
import "./styles/Header.css";
import { toggleCart } from "./scripts";
import LoadingBar from "react-top-loading-bar";
import "./scripts";
const Header = () => {
  const [progress, setProgress] = useState(100);

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="header container" id="header">
        <div className="header-logo">
          <div>
            <img src={logo} alt="Food delivery app" />
            Tasty Treat
          </div>
        </div>
        <div className="header-links">
          <Link to="/here" className="active">
            Home
          </Link>
          <Link to="/here">Foods</Link>
          <Link to="/here">Cart</Link>
          <Link to="/here">Contact</Link>
        </div>
        <div className="header-tools">
          <Link to={"#"} onClick={() => toggleCart("cart", "open")}>
            <i className="uil uil-shopping-bag"></i>
          </Link>
          <Link to="/login">
            <i className="uil uil-user"></i>
          </Link>
        </div>
      </div>
      <div className="cart" id="cart">
        <div
          className="cart-close"
          onClick={() => toggleCart("cart", "close")}
        ></div>
        <div className="cart-content">
          <div className="cart-content-header">
            <i
              onClick={() => toggleCart("cart", "close")}
              className="uil uil-times-circle"
            ></i>
          </div>
          <div className="cart-content-body"></div>
          <div className="cart-content-footer">
            <div>
              Subtotal <span>$340</span>
            </div>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
