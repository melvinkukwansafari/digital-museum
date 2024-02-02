import React, { useState } from 'react';

const BookingForm = ({ onSubmit }) => {
  const [userName, setUserName] = useState('');
  const [purposeOfVisit, setPurposeOfVisit] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ userName, purposeOfVisit, arrivalDate });
    setSubmitted(true);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">User Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Purpose of Visit:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={purposeOfVisit}
                    onChange={(e) => setPurposeOfVisit(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Date to Arrive:</label>
                  <input
                    type="date"
                    className="form-control"
                    value={arrivalDate}
                    onChange={(e) => setArrivalDate(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Book Now
                </button>
              </form>
            ) : (
              <div className="text-center">
                <p className="text-black">Thank you for filling out the form!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
