import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/aboutPreview.css";
import Preview from "../assets/preview.svg";

const AboutPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="about-preview">
      <div className="about-container">

        {/* Left Image */}
        <div className="about-image">
          <img src={Preview} alt="about" />
        </div>

        {/* Right Content */}
        <div className="about-content">
          <div className="about-card">
            <h2>About Our Platform</h2>

            <p>
              We build modern, responsive, and user-friendly web applications
              using powerful reusable components. Our goal is to make
              development faster, easier, and more efficient for everyone.
            </p>

            <button
              className="about-btn"
              onClick={() => navigate("/about")}
            >
              Read More
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutPreview;