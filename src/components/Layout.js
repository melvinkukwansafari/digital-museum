// src/components/Layout.js
// src/components/Layout.js
// Layout.js
// Layout.js

// Layout.js

import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
//import womanImage from './woman.jpg';
import './Layout.css'; // Import a separate CSS file for layout styling

const Layout = ({ children }) => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data)
    const fetchData = async () => {
      // Simulating a delay (remove this in a real-world scenario)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount


  return (
    <div className="layout-container">
    {loading ? (
      // Render loading effect here
      <div className="loading">Loading...</div>
    ) : (
      // Render the actual content when loading is false
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    )}
  </div>
  );
};

export default Layout;




