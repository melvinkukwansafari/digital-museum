// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import university from './university.png';
import museum from './museum.png';
import empower from './empower.png';
import swedish from './swedish.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white p-4">
      <div className="container text-center">
        {/* Slide Motion Effect */}
        <h5 className="text-uppercase mb-3">Our Partners</h5>
        <div className="slide-container">
          <img src={university} alt="university" className="university" />
          <img src={museum} alt="museum" className="museum" />
          <img src={empower} alt="empower" className="empower" />
          <img src={swedish} alt="swedish" className="swedish" />
        </div>

        {/* Social Icons */}
        <div className="social-icons mt-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" className="mr-3" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" className="mr-3" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="mr-3" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>

          <p className="mb-0">&copy; Samburu Digital Museum</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

