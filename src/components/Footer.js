// src/components/Footer.js
import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import university from './university.png';
import museum from './museum.png';
import empower from './empower.png';
import swedish from './swedish.png';
import './Footer.css';

const Footer = () => {
  const slideContainerRef = useRef(null);

  const handleSlide = (direction) => {
    const slideContainer = slideContainerRef.current;
    const slideAmount = 100; // Adjust the slide amount as needed

    if (slideContainer) {
      const currentScrollLeft = slideContainer.scrollLeft;
      const newScrollLeft =
        direction === 'left' ? currentScrollLeft - slideAmount : currentScrollLeft + slideAmount;

      slideContainer.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-dark text-white p-4">
      <div className="container text-center">
        <p className="mb-0">&copy; Samburu Digital Museum</p>

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

          {/* Slide Motion Effect */}
          <div className="slide-container" ref={slideContainerRef}>
            <img src={university} alt="university" className="university" />
            <img src={museum} alt="museum" className="museum" />
            <img src={empower} alt="empower" className="empower" />
            <img src={swedish} alt="swedish" className="swedish" />
          </div>

          {/* Control Buttons */}
          <div className="mt-3">
            <button onClick={() => handleSlide('left')} className="btn btn-light mr-2">
              Slide Left
            </button>
            <button onClick={() => handleSlide('right')} className="btn btn-light">
              Slide Right
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;





  