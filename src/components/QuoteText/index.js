import React from "react";
import image from "../../assets/qut.png";

import "./style.css";

export default function QuoteText({ text, header }) {
  return (
    <div className="card-quote">
      <h2>{header}</h2>
      <div className="quote-container-text">
        <img className="quote-image-start" src={image} alt="image_" />
        <p> {text} </p>
        <img className="quote-image-end" src={image} alt="image_" />
      </div>
    </div>
  );
}
