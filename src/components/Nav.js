import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';

function Nav({ setCurrentPage }) {
  return (
    <>
        <nav className="nav">
            <Link
                to="/"
                className="nav-item"
                onClick={() => setCurrentPage('main')}
            >
                Home
            </Link>
            <Link to="/about" className='nav-item'>About</Link>
            <Link to="/menu" className='nav-item'>Menu</Link>
            <Link
                to="/reservations"
                className="nav-item"
                onClick={() => setCurrentPage('bookingPage')}
            >
                Reservations
            </Link>
            <Link to="/order" className='nav-item'>Order Online</Link>
            <Link to="/login" className='nav-item'>Login</Link>
        </nav>
        <Routes>
            <Route />
        </Routes>
    </>
  );
}

export default Nav;

