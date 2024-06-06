import React from "react";
import "./Hero.css";
import hero_image from "../Assets/boy-t2.png";

import arrow_icon from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Discover the Latest Trends in Fashion</h2>
        <div>
          <div className="hero-hand-icon"></div>
        </div>
        <div className="hero-latest-btn">
          <div>Explore More</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
