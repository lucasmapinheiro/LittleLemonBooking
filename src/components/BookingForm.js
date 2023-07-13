import React, { useState, useEffect } from 'react';
import moment from 'moment';
import '../css/BookingForm.css';

function BookingForm({ onDateChange, selectedDate, isLoading, onSubmit }) {
  const currentDate = moment().format('YYYY-MM-DD');
  const [reservationData, setReservationData] = useState({
    date: currentDate,
    time: '',
    partySize: '',
    occasion: '',
  });
  const [isTimeDisabled, setIsTimeDisabled] = useState(false);
  const [formErrors, setFormErrors] = useState({});

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

    if (validateForm()) {
      onSubmit(reservationData);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!reservationData.date) {
      errors.date = 'Please select a date.';
    }
    if (!reservationData.time) {
      errors.time = 'Please select a time.';
    }
    if (!reservationData.partySize) {
      errors.partySize = 'Please enter the party size.';
    }
    if (!reservationData.occasion) {
      errors.occasion = 'Please select an occasion.';
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  useEffect(() => {
    setReservationData((prevState) => ({
      ...prevState,
      date: currentDate,
    }));
  }, []);

  useEffect(() => {
    setIsTimeDisabled(selectedDate !== currentDate || isLoading);
  }, [selectedDate, currentDate, isLoading]);

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
            aria-label="Date"
            aria-required="true"
            aria-describedby={formErrors.date ? 'date-error' : ''}
          />
          {formErrors.date && (
            <p id="date-error" className="form-error">
              * {formErrors.date}
            </p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <select
            id="time"
            name="time"
            value={reservationData.time}
            onChange={handleInputChange}
            required
            disabled={isTimeDisabled}
            aria-label="Time"
            aria-required="true"
            aria-describedby={formErrors.time ? 'time-error' : ''}
          >
            <option value="">Select Time</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
          </select>
          {formErrors.time && (
            <p id="time-error" className="form-error">
              * {formErrors.time}
            </p>
          )}
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
            aria-label="Number of Guests"
            aria-required="true"
            aria-describedby={formErrors.partySize ? 'partySize-error' : ''}
          />
          {formErrors.partySize && (
            <p id="partySize-error" className="form-error">
              * {formErrors.partySize}
            </p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="occasion">Occasion:</label>
          <select
            id="occasion"
            name="occasion"
            value={reservationData.occasion}
            onChange={handleInputChange}
            required
            aria-label="Occasion"
            aria-required="true"
            aria-describedby={formErrors.occasion ? 'occasion-error' : ''}
          >
            <option value="">Select Occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          {formErrors.occasion && (
            <p id="occasion-error" className="form-error">
              * {formErrors.occasion}
            </p>
          )}
        </div>
        <button type="submit" className="reservation-button">
          Make your reservation
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
