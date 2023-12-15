import React from "react";
import { Card } from "react-bootstrap"; // Import Bootstrap Card component

const AboutUs = () => {
  return (
    <div className="container mt-4">
      {/* Use Bootstrap Card component */}
      <Card bg="white" text="dark" className="font-weight-bold">
        <Card.Body className="d-flex flex-column align-items-center">
          <Card.Title className="text-center mb-4">About Us</Card.Title>
          {/* Your AboutUs component content */}
          <p className="text-left">
            Welcome to our landing page! Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. {/* ... (rest of your content) */}
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AboutUs;



