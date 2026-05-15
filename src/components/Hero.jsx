import React from "react";
import "../style/hero.css";
import heroImg from "../assets/hero.svg"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        
        {/* Left Content */}
        <div className="hero-content">
          <h1>
            Ek Shuruaat <span>Mere Dosto</span> ke liye!!
          </h1>
          <p>
            Sabhi Bhaiyo se nivedan hai apna account banakar
            meri website use kare aur mujhe apna experience bataiye!!
          </p>

          <div className="hero-buttons">
            <button className="btn primary">Shuru kare!!</button>
            <button className="btn secondary">Adhik jaankari</button>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-image">
          <img
            src={heroImg}
            alt="hero"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;