// src/components/MovieTitle.jsx
import React from 'react';
import './MovieTitle.css';

const MovieTitle = ({ title }) => {
  return (
    <h1 className="movie-title">
      <strong>{title}</strong>
    </h1>
  );
};

export default MovieTitle;
