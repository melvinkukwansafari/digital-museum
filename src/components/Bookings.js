import React, { useState, useEffect } from 'react';
import BookingForm from './BookingForm';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    fetch('http://localhost:3001/bookings')
      .then((response) => response.json())
      .then((data) => setBookings(data));
  }, []);

  const addBooking = (newBooking) => {
    // Send a POST request to the server to add the new booking
    fetch('http://localhost:3001/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBooking),
    })
      .then((response) => response.json())
      .then((data) => setBookings([...bookings, data]));
  };

  return (
    <div className="bookings-container">
      <h1>Bookings</h1>
      <BookingForm onSubmit={addBooking} />
    </div>
  );
};

export default Bookings;


