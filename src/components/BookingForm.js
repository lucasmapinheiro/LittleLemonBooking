import React, { useState, useEffect } from 'react';
import moment from 'moment';
import '../css/BookingForm.css';

function BookingForm({ onDateChange }) {
  const currentDate = moment().format('YYYY-MM-DD');
  const [reservationData, setReservationData] = useState({
    date: currentDate,
    time: '',
    partySize: '',
    occasion: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === 'date') {
      onDateChange(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(reservationData);
  };

  useEffect(() => {
    setReservationData((prevState) => ({
      ...prevState,
      date: currentDate,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="booking-form">
      <h1>Reserve a Table</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            min={currentDate}
            value={reservationData.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <select
            id="time"
            name="time"
            value={reservationData.time}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Time</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="partySize">Number of Guests:</label>
          <input
            type="number"
            id="partySize"
            name="partySize"
            min="1"
            max="10"
            value={reservationData.partySize}
            onChange={handleInputChange}
            required
            placeholder="Select the number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="occasion">Occasion:</label>
          <select
            id="occasion"
            name="occasion"
            value={reservationData.occasion}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>
        <button type="submit" className="reservation-button">
          Make your reservation
        </button>
      </form>
    </div>
  );
}

export default BookingForm;

