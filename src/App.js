import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import AboutUs from './components/AboutUs';  // Fix the import statement
import Contact from './components/Contact';
import Museum from './components/Museum';

const App = () => {
  return (
    <Router>
      <Layout>
        {/* Replace Switch with Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />  {/* Use AboutUs instead of About */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/museum" element={<Museum />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;




