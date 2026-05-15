import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import "../style/aboutPreview.css";
import Preview from "../assets/preview.svg"

const AboutPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="about-preview">
      <div className="about-container">
        
        {/* Left Image */}
        <div className="about-image">
          <img
            src={Preview}
            alt="about"
          />
        </div>

        {/* Right Content using Card */}
        <div className="about-content">
          <Card
            title="About Our Platform"
            description="We build modern, responsive, and user-friendly web applications using powerful reusable components. Our goal is to make development faster, easier, and more efficient for everyone."
            buttonText="Read More"
            onButtonClick={() => navigate("/about")}
          />
        </div>

      </div>
    </section>
  );
};

export default AboutPreview;