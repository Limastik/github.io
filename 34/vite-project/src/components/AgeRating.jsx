// src/components/AgeRating.jsx
import React from 'react';
import PropTypes from 'prop-types';

AgeRating.propTypes ={
  age:PropTypes.number
}
AgeRating.DefaultProps={
  age:18
}
function AgeRating(props) {
  return (
    <div className="container">
      <figure className="age-rating">
        <figcaption className="age">{props.age}+</figcaption>
      </figure>
    </div>
  );
};


export default AgeRating;
