import React, { useState } from 'react';
import BookingForm from './BookingForm';
import BookingSlot from './BookingSlot';
import '../css/BookingPage.css';

function BookingPage() {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="booking-page">
      <BookingForm onDateChange={handleDateChange} />
      {selectedDate && <BookingSlot selectedDate={selectedDate} />}
    </div>
  );
}

export default BookingPage;
