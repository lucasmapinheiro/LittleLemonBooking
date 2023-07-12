import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Nav({ setCurrentPage }) {
  const navigate = useNavigate();

  const handlePageChange = (page) => {
    setCurrentPage(page);
    navigate(page === 'bookingPage' ? '/booking' : '/');
  };

  return (
    <nav className="nav">
      <Link to="/" className="nav-item" onClick={() => handlePageChange('main')}>
        Home
      </Link>
      <Link to="/about" className="nav-item">
        About
      </Link>
      <Link to="/menu" className="nav-item">
        Menu
      </Link>
      <Link to="/booking" className="nav-item" onClick={() => handlePageChange('bookingPage')}>
        Reservations
      </Link>
      <Link to="/order" className="nav-item">
        Order Online
      </Link>
      <Link to="/login" className="nav-item">
        Login
      </Link>
    </nav>
  );
}

export default Nav;






