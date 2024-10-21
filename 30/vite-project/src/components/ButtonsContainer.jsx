// src/components/ButtonsContainer.jsx
import React from 'react';
import './ButtonsContainer.css';

const ButtonsContainer = () => {
  return (
    <div className="buttons-container">
      <button className="red-button">
        <span>STREAM NOW </span>
        <svg
          className="play-icon"
          width="23"
          height="23"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ваш SVG код */}
          <path
            d="M14 0C6.26 0 0 6.26 0 14C0 21.73 6.26 28 14 28C21.73 28 28 21.73 28 14C28 6.26 21.73 0 14 0ZM18.5 14.21L11.67 19.18C11.64 19.2 11.59 19.22 11.55 19.22C11.5 19.23 11.45 19.22 11.41 19.2C11.37 19.17 11.34 19.14 11.31 19.1C11.29 19.06 11.28 19.02 11.28 18.97L11.28 9.05C11.28 9 11.29 8.96 11.31 8.92C11.34 8.88 11.37 8.85 11.41 8.82C11.45 8.8 11.5 8.79 11.55 8.8C11.59 8.8 11.64 8.82 11.67 8.85L18.5 13.81C18.53 13.83 18.56 13.86 18.57 13.9C18.59 13.93 18.6 13.97 18.6 14.01C18.6 14.05 18.59 14.09 18.57 14.12C18.56 14.16 18.53 14.19 18.5 14.21Z"
            fill="#FFFFFF"
            fillOpacity="1"
            fillRule="nonzero"
          />
        </svg>
      </button>
      <button className="black-button">
        <span>OTHER ACTION</span>
      </button>
    </div>
  );
};

export default ButtonsContainer;
