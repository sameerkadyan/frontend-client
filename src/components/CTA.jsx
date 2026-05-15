import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/cta.css";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="cta">
      <div className="cta-container">
        <h2>Ready to Get Started?</h2>
        <p>
          Join us today and start building amazing websites with ease.
        </p>

        <div className="cta-buttons">
          <button onClick={() => navigate("/register")} className="btn primary">
            Sign Up Now
          </button>

          <button onClick={() => navigate("/login")} className="btn secondary">
            Login
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;