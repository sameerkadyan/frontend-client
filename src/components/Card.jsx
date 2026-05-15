import React from "react";
import "../style/card.css";

const Card = ({
  image,
  title,
  description,
  buttonText,
  onButtonClick,
  children,
}) => {
  return (
    <div className="card">
      {image && (
        <div className="card-img-container">
          <img src={image} alt={title} className="card-img" />
        </div>
      )}

      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        {description && <p className="card-description">{description}</p>}

        {/* 👇 Custom Content (Form, Inputs etc.) */}
        {children}

        {buttonText && (
          <button className="card-btn" onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;