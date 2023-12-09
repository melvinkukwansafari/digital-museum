// Example export
// src/pages/Home.js
// Home.js
// Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-4">
      <div className="card bg-transparent text-white">
        <div className="card-body">
          <h1 className="card-title">Home Page</h1>
          <p className="card-text">
            {/* Your existing content */}
          </p>

          {/* Add buttons to navigate to different pages */}
          <div>
            <Link to="/about">
              <button className="btn btn-primary mr-2">Go to About Us</button>
            </Link>

            <Link to="/museum">
              <button className="btn btn-primary mr-2">Go to Museum</button>
            </Link>

            <Link to="/gallery">
              <button className="btn btn-primary">Go to Gallery</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;




  