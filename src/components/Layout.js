// src/components/Layout.js
// src/components/Layout.js
// Layout.js
// Layout.js

// Layout.js

import React from 'react';
import Header from './Header';
import Footer from './Footer';
//import womanImage from './woman.jpg';
import './Layout.css'; // Import a separate CSS file for layout styling

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;




