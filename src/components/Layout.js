// src/components/Layout.js
// src/components/Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.css'; // Import a CSS file for styling

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

