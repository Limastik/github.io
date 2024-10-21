// src/components/Header.jsx
import React from 'react';
import './Header.css';
import NetflixLogo from '../assets/img/Netflix.png';
import UserAvatar from '../assets/img/user-avatar.png';

const Header = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="header">
      <img className="Netflix-img" src={NetflixLogo} alt="Netflix Logo" />
      <span className="date">| {currentDate}</span>
      <img src={UserAvatar} alt="User Avatar" className="user-avatar" />
      <svg
        className="search-icon"
        width="35.835"
        height="35.834"
        viewBox="0 0 35.835 35.834"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ваш SVG код */}
        <path
          d="M25.66 23.11L35.3 32.74C35.64 33.08 35.83 33.54 35.83 34.02C35.83 34.5 35.64 34.96 35.3 35.3C34.96 35.64 34.5 35.83 34.02 35.83C33.54 35.83 33.08 35.64 32.74 35.3L23.11 25.66C20.22 27.89 16.6 28.94 12.97 28.6C9.34 28.25 5.98 26.54 3.57 23.8C1.16 21.07 -0.11 17.52 0 13.88C0.12 10.23 1.62 6.77 4.19 4.19C6.77 1.62 10.23 0.12 13.88 0C17.52 -0.11 21.07 1.16 23.8 3.57C26.54 5.98 28.25 9.34 28.6 12.97C28.94 16.6 27.89 20.22 25.66 23.11ZM14.33 25.08C17.18 25.08 19.92 23.95 21.93 21.93C23.95 19.91 25.08 17.18 25.08 14.33C25.08 11.48 23.95 8.74 21.93 6.73C19.92 4.71 17.18 3.58 14.33 3.58C11.48 3.58 8.74 4.71 6.73 6.73C4.71 8.74 3.58 11.48 3.58 14.33C3.58 17.18 4.71 19.91 6.73 21.93C8.74 23.95 11.48 25.08 14.33 25.08Z"
          fill="#FFFFFF"
          fillOpacity="1"
          fillRule="evenodd"
        />
      </svg>
    </header>
  );
};

export default Header;
