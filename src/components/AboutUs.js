import React from "react";
import { Card } from "react-bootstrap"; // Import Bootstrap Card component
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="container mt-4">
      {/* Use Bootstrap Card component */}
      <Card bg="white" text="dark" className="font-weight-bold">
        <Card.Body className="d-flex flex-column align-items-center">
          <Card.Title className="text-center mb-4">About Us</Card.Title>
          {/* Your AboutUs component content */}
          <p className="text-left">
          A Digital Museum for Digital History.
Samburu Digital Museum is a collection of images, text documents and recorded oral stories of the ongoing rock art tradition and the cultural heritage Samburu community living in Northern Kenya.

This museum is a product of a collaboration project between Linnaeus University, Kalmar and Empower the Northern Frontier, a Kenya based NGO with support from Swedish Institute that led to identifying, safeguarding and documenting this living cultural heritage. {/* ... (rest of your content) */}
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AboutUs;



