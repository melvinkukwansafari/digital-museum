import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
//import Contact from './components/Contact';
import Museum from './components/Museum';
import Gallery from './components/Gallery';
import GiftShop from './components/GiftShop';
import Bookings from './components/Bookings';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        {/*<Route
          path="/about"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />*/}
       
        <Route
          path="/museum"
          element={
            <Layout>
              <Museum />
            </Layout>
          }
        />  

      <Route
          path="/gallery"
          element={
            <Layout>
              <Gallery />
            </Layout>
          }
        />

        
      <Route
          path="/giftshop"
          element={
            <Layout>
              <GiftShop />
            </Layout>
          }
        />

        <Route
          path="/bookings"
          element={
            <Layout>
              <Bookings />
            </Layout>
          }
        />

      </Routes>
    </Router>
  );
};

export default App;





