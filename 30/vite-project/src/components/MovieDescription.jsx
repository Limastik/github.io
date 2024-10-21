// src/components/MovieDescription.jsx
import React from 'react';
import './MovieDescription.css';

const MovieDescription = ({ description }) => {
  return (
    <div className="stranger-description-container">
      <span className="stranger-description">
        <p>{description}</p>
      </span>
    </div>
  );
};

export default MovieDescription;
