import React from "react";
import logo from "../imgs/logo.png";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main container">
        <div>
          <div className="header-logo">
            <div>
              <img src={logo} alt="Food delivery app" />
              Tasty Treat
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            pariatur accusamus
          </p>
        </div>
        <div>
          <div className="footer-label">Delivery Time</div>
          <div className="footer-label-bold">Sunday - Thursday</div>
          <div className="footer-sample-text">10L00am - 11:00pm</div>

          <div className="footer-label-bold">Friday - Saturday</div>
          <div className="footer-sample-text">Day off</div>
        </div>

        <div>
          <div className="footer-label">Contact</div>
          <div className="footer-sample-text">
            Location : Tashkent, Uzbekistan
          </div>

          <div className="footer-label-bold">Phone: +998 90 123 45 67</div>
          <div className="footer-label-bold">Email: example@gmail.com</div>
        </div>

        <div>
          <div className="footer-label">Newsletter</div>
          <div className="footer-sample-text">Subscribe our newsletter</div>
          <form>
            <div className="footer-input">
              <input type="email" placeholder="Enter your email" />
              <button>
                <i className="uil uil-message"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="footer-bottom container">
        <div className="footer-copyright">
          Copyright - 2023, website remade by{" "}
          <a href="https://ogabeks.netlify.app">Ogabek Rakhimov</a>. All rights
          reserved.
        </div>
        <div className="footer-socials">
          Follow :{" "}
          <a href="https://www.instagram.com/yousef_coder/">
            <i className="uil uil-instagram"></i>
          </a>
          <a href="https://www.github.com/ogabeks/">
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
