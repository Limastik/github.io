import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className="container mt-4">
      <h2>
        <FontAwesomeIcon icon={faInfoCircle} /> About Us
      </h2>
      <p>This is the About page.</p>
    </div>
  );
};

export default About;
