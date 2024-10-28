// src/components/MoviePoster.jsx
import React from 'react';

const MoviePoster = ({ src, alt }) => {
  return (
    <img className="movie-poster-class" src={src} alt={`${alt} Poster`} />
  );
};

export default MoviePoster;
