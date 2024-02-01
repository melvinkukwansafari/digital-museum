import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Museum from './components/Museum';
import Gallery from './components/Gallery';
import 'bootstrap/dist/css/bootstrap.min.css';
import GiftShop from './components/GiftShop';
import ProductList from './components/ProductList';
//import '.components/Styles.css';

const App = () => {
  // Declare and define productData

  const data = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      age: 25,
      price: 19.99,
      imageUrl: 'https://example.com/image1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description 2',
      age: 30,
      price: 29.99,
      imageUrl: 'https://example.com/image2.jpg',
    },
    // ... more objects
  ];
  

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
        <Route
          path="/about"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />
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
              {/* Pass the productData as a prop to ProductList */}
              <ProductList products={data} />
            </Layout>
          }
        /> 
      </Routes>
    </Router>
  );
};

export default App;
