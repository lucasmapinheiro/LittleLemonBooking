import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  const [currentPage, setCurrentPage] = useState('main');
  const [reservationConfirmed, setReservationConfirmed] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const handleReservationConfirmation = () => {
    setReservationConfirmed(true);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  let currentComponent;
  if (currentPage === 'main') {
    currentComponent = <Main />;
  }

  return (
    <div className="App">
      <div className="section-top">
        <Header />
        <Nav setCurrentPage={setCurrentPage} />
      </div>
      <Routes>
        <Route path="/" element={currentComponent} />
        <Route path="/booking" element={<BookingPage onReservationConfirmation={handleReservationConfirmation} onDateChange={handleDateChange} selectedDate={selectedDate} />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

