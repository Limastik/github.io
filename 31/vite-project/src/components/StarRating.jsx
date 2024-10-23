import React from 'react';

const Star = () => (
  <svg
    width="29.44"
    height="28"
    viewBox="0 0 29.4399 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="star"
  >
    <path
      d="M14.72 0L10.17 9.22L0 10.69L7.35 17.87L5.62 28L14.72 23.22L23.81 28L22.08 17.87L29.43 10.7L19.27 9.22L14.72 0Z"
      fill="#FFEA2B"
      fillOpacity="1"
      fillRule="nonzero"
    />
  </svg>
);

const StarRating = ({ count }) => {
  const stars = Array.from({ length: count }, (_, index) => <Star key={index} />);
  return <div className="stars">{stars}</div>;
};

export default StarRating;
