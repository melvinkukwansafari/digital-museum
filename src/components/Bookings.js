// src/components/Booking.js
import React, { useState } from 'react';

const Booking = () => {
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    date: '',
    product: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData({
      ...bookingData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the booking data (e.g., send it to the backend)
    console.log('Booking data submitted:', bookingData);
    // You will connect this to your backend later
  };

  return (
    <div>
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={bookingData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={bookingData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={bookingData.date}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Product:
          <input
            type="text"
            name="product"
            value={bookingData.product}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default Booking;

