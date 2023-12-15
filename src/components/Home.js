// Example export
// src/pages/Home.js
// Home.js
// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import AboutUs from './AboutUs';
import Museum from './Museum'
import Gallery from './Gallery'
import GiftShop from './GiftShop';

const Home = () => {
  return (
    <div className="container mt-4">
      <div className="card bg-transparent text-white">
        <div className="card-body">
          <h1 className="card-title">Welcome to Samburu Digital Museum</h1>
          <p className="card-text">
            {/* Your existing content */}
          </p>

          {/* Add buttons to navigate to different pages */}
          <div className="button-container">
            <Link to="/about">
              <button className="btn btn-primary">
                Who We are
                <br />
                Learn more about us.
              </button>
            </Link>

            <Link to="/museum">
              <button className="btn btn-primary">
                View our Museum
                <br />
                Explore our collections
              </button>
            </Link>

            <Link to="/gallery">
              <button className="btn btn-primary">
                Gallery
                <br />
                View our art gallery
              </button>
            </Link>
          </div>
          <AboutUs />
          <Museum />
          <Gallery />
          <GiftShop />

        </div>
      </div>
    </div>
  );
};

export default Home;





  