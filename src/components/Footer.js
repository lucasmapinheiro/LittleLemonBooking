import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <p>Adress: 15 S Newcastle Avenue, Chicago,il, 60638 United States</p>
      <p>Contact: 312-926-4528</p>
      <p>{currentYear}</p>
    </div>
  );
}

export default Footer;
