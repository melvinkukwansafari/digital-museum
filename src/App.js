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
import Bookings from './components/Bookings';

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
      imageUrl: 'https://th.bing.com/th/id/R.236e0072c76ee61cfa008bfe7510fb34?rik=A%2bb2tWdKe3oHGA&riu=http%3a%2f%2fppcteotihuacan.org%2fwp-content%2fuploads%2f2017%2f05%2f50_artifacts-1024x813.png&ehk=M8S5zrcCS%2f7%2f8tRFeGRiHnLNfovmFZ0UUeAAXfGcGok%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description 2',
      age: 30,
      price: 29.99,
      imageUrl: 'https://th.bing.com/th/id/OIP.LZ-LasOikPuZi1zjoIh5PgAAAA?rs=1&pid=ImgDetMain',
    },

    {
      id: 3,
      name: 'Product 3',
      description: 'Description 3',
      age: 30,
      price: 29.99,
      imageUrl: 'https://th.bing.com/th?id=OIF.n4rJvzPbymbvy%2bM35JSbow&rs=1&pid=ImgDetMain',
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
