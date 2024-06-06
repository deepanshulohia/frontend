import React from "react";
import "./Footer.css";
import Payment from "../Assets/payments.png";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
            distinctio consectetur? Similique accusamus sunt laboriosam modi
            odit.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">754, oului, gfsdgfv, gdfgasd, uyrth7 </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />

            <div className="text">Phone NUmber: 99999999</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: vibecart.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Category</div>
          <span className="text">Men</span>
          <span className="text">Women</span>
          <span className="text">Kids</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="div bottom-bar-content">
          <div className="text">
            VibeCart 2024 CREATED BY Deepanshu E-COMMERCE WEBSITE
          </div>
          <img src={Payment} alt="payment rupay" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
