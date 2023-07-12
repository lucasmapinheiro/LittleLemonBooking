import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  const handleReservationClick = () => {
    navigate('/booking');
  };

  return (
    <div className="main">
      <div className="banner">
        <div className='banner-content'>
            <div className="banner-text">
                <h1 className="banner-title">Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Welcome to Little Lemon, a delight in Chicago! Indulge in our unique cuisine, with dishes full of flavor. Experience our traditional dishes, in a cozy ambiance. Make your reservation and be enchanted by an unforgettable dining experience!</p>
                <button className="banner-button" onClick={handleReservationClick}>Reserve a Table</button>
            </div>
            <img
              src={require('../images/banner.png')}
              alt="Imagem do Banner"
              className="banner-image"
            />
        </div>
      </div>

      <div className="section">
        <h2>This week's specials!</h2>
        <button className="section-button">Online Menu</button>
      </div>

      <div className="card-container">
        <div className="card">
          <img
            src={require('../images/greeksalad.png')}
            alt="Imagem do Prato 1"
            className="card-image"
          />
          <div className="card-head">
            <h3 className="card-title">Greek Salad</h3>
            <p className="card-price">$12.99</p>
          </div>
          <p className="card-description">
            Experience the freshness of Greece with our Greek Salad. Made with crisp lettuce, juicy tomatoes, cucumbers, tangy feta cheese, and Kalamata olives, it's a burst of Mediterranean flavors in every bite. Topped with our homemade Greek dressing, this salad is a perfect balance of savory and refreshing. Whether you're a salad lover or a Greek cuisine enthusiast, our Greek Salad is a must-try dish that will transport your taste buds to the sunny shores of Greece.
          </p>
          <div className="card-footer">
            <span className="card-footer-text">Order a delivery</span>
            <img src={require('../images/logo192.png')} alt="Ícone" className="card-footer-icon" />
          </div>
        </div>

        <div className="card">
          <img
            src={require('../images/bruchetta.png')}
            alt="Imagem do Prato 2"
            className="card-image"
          />
          <div className="card-head">
            <h3 className="card-title">Bruschetta</h3>
            <p className="card-price">$5.99</p>
          </div>
          <p className="card-description">
            Indulge in the classic Italian flavors of our Bruschetta. This appetizer features toasted bread slices topped with ripe tomatoes, fresh basil, and garlic-infused olive oil. The combination of the crunchy bread and the vibrant flavors of the toppings creates a mouthwatering bite that will leave you craving more. Whether you're enjoying it as an appetizer or a light snack, our Bruschetta is a delicious way to start your meal and ignite your taste buds with the essence of Italy.
          </p>
          <div className="card-footer">
            <span className="card-footer-text">Order a delivery</span>
            <img src={require('../images/logo192.png')} alt="Ícone" className="card-footer-icon" />
          </div>
        </div>

        <div className="card">
          <img
            src={require('../images/pasta.png')}
            alt="Imagem do Prato 3"
            className="card-image"
          />
          <div className="card-head">
            <h3 className="card-title">Pasta</h3>
            <p className="card-price">$14.99</p>
          </div>
          <p className="card-description">
            Savor the comfort and richness of our Pasta dishes. Handcrafted with love and passion, our pasta is cooked to perfection and tossed in a variety of delectable sauces. From creamy Alfredo to zesty Marinara, each bite is a harmonious blend of flavors and textures. Whether you prefer classic spaghetti or adventurous penne, our Pasta dishes are a celebration of Italian culinary tradition. Experience the comfort food and let the aroma and taste transport you to the streets of Italy.
          </p>
          <div className="card-footer">
            <span className="card-footer-text">Order a delivery</span>
            <img src={require('../images/logo192.png')} alt="Ícone" className="card-footer-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
