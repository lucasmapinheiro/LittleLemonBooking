import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import BookingSlot from './BookingSlot';
import '../css/BookingPage.css';

function BookingPage({ onReservationConfirmation, onDateChange, selectedDate }) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    if (!formData.date || !formData.time || !formData.partySize || !formData.occasion) {
      alert('Please fill in all required fields.');
      return;
    }

    // Call your submitAPI function here with formData

    // Simulating a successful reservation for demonstration
    navigate('/confirmed');
    onReservationConfirmation();
  };

  return (
    <div className="booking-page">
      <BookingForm
        onDateChange={onDateChange}
        selectedDate={selectedDate}
        isLoading={isLoading}
        onSubmit={handleSubmit}
      />
      {selectedDate && (
        <BookingSlot
          selectedDate={selectedDate}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      )}
    </div>
  );
}

export default BookingPage;




