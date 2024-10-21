// src/components/NavigationArrows.jsx
import React from 'react';
import './NavigationArrows.css';

const NavigationArrows = () => {
  return (
    <div className="film-arrows">
      {/* Ліва стрілка */}
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="arrow left-arrow"
      >
        <circle
          cx="19"
          cy="19"
          r="18.2875"
          stroke="#A7A6A6"
          strokeWidth="1.425"
        />
        <path
          d="M21.69 27.07L23.58 25.17L17.42 19L23.58 12.82L21.69 10.92L13.61 19L21.69 27.07Z"
          fill="#A7A6A6"
        />
      </svg>

      {/* Права стрілка */}
      <svg
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="arrow right-arrow"
      >
        <circle
          cx="20.5"
          cy="20.5"
          r="19.731251"
          stroke="#FFFFFF"
          strokeWidth="1.5375"
        />
        <path
          d="M17.59 11.78L15.54 13.83L22.19 20.5L15.54 27.16L17.59 29.21L26.3 20.5L17.59 11.78Z"
          fill="#FFFFFF"
        />
      </svg>
    </div>
  );
};

export default NavigationArrows;
