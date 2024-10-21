// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Додайте контент футера, якщо необхідно */}
      <p>&copy; {new Date().getFullYear()} Best Movies. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
