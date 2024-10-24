// src/components/MovieDescription.jsx
import React from 'react';
import PropTypes from 'prop-types';

MovieDescription.propTypes ={
  description:PropTypes.string
}
MovieDescription.DefaultProps ={
  description:"Movie Description"
}

function MovieDescription(props){
  return (
    <div className="stranger-description-container">
      <span className="stranger-description">
        <p>{props.description}</p>
      </span>
    </div>
  );
};

export default MovieDescription;
