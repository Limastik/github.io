// src/components/AgeRating.jsx
import React from 'react';

const AgeRating = ({ age }) => {
  return (
    <div className="container">
      <figure className="age-rating">
        <figcaption className="age">{age}</figcaption>
      </figure>
    </div>
  );
};

export default AgeRating;
