// src/components/MovieTitle.jsx
import React from 'react';
import PropTypes from 'prop-types';

MovieTitle.propTypes ={
  title:PropTypes.string
}
MovieTitle.DefaultProps ={
  title:"Movie Title"
}

function MovieTitle(props) {
  return (
    <h1 className="movie-title">
      <strong>{props.title}</strong>
    </h1>
  );
};

export default MovieTitle;
