import React from "react";
import "./NewsLetter.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const NewsLetter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">News Letter</span>
        <span className="big-text">Sign up for latest update and offers</span>
        <div className="form">
          <input type="text" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
        <div className="text">
          Will be used accordance with our private policy!
        </div>
        <div className="social-icons">
          <div className="icons">
            <FaFacebookF size={14} />
          </div>
          <div className="icons">
            <FaTwitter size={14} />
          </div>
          <div className="icons">
            <FaInstagram size={14} />
          </div>
          <div className="icons">
            <FaLinkedinIn size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
