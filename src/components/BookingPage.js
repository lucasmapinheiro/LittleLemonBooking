import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import BookingSlot from './BookingSlot';
import '../css/BookingPage.css';

function BookingPage() {
  const [selectedDate, setSelectedDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (formData) => {
    if (!formData.date || !formData.time || !formData.partySize || !formData.occasion) {
      alert('Please fill in all required fields.');
      return;
    }

    // Call your submitAPI function here with formData

    // Simulating a successful reservation for demonstration
    navigate('/confirmed');
  };

  return (
    <div className="booking-page">
      <BookingForm
        onDateChange={handleDateChange}
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



