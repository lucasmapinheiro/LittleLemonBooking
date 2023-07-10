import React from 'react';
import logo from '../images/littlelemonlogo.png';

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Restaurante Logo" className="header-logo" />
    </div>
  );
}

export default Header;
