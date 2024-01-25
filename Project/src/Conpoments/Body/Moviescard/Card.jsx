/* Card.jsx */
import React from "react";
import "../Moviescard/Card.css";

const Card = ({ image, Name, link, rating }) => {
  return (
    <>
      <div className="moviescard">
        <img src={image} alt="moviesphoto" />
        <div>
          <p>{Name}</p>
        </div>
        <a href={link}>Click to Watch</a>
        <div className="rating">
          <span className="stars-container">
            {renderStars(parseInt(rating))}
          </span>
          <p>{rating}</p>
        </div>
      </div>
    </>
  );
};

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={i <= rating ? "star filled" : "star"}>
        ⭐
      </span>
    );
  }
  return stars;
};

export default Card;
