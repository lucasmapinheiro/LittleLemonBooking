import React from 'react';

function Main() {
  return (
    <div className="main">
      <div className="banner">
        <div className='banner-content'>
            <div className="banner-text">
                <h1 className="banner-title">Litte Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio placeat, cupiditate aut aspernatur, nobis fuga veniam error, veritatis quidem illo consectetur tempore quo praesentium? Aut ullam esse culpa optio ducimus.</p>
                <button className="banner-button">Reserve a Table</button>
            </div>
            <img
            src={require('../images/banner.png')}
            alt="Imagem do Banner"
            className="banner-image"
            />
        </div>
      </div>

      <div className="section">
        <h2>This weeks specials!</h2>
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
            <h3 className="card-title">Greek salad</h3>
            <p className="card-price">$12.99</p>
          </div>
          <p className="card-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus nesciunt adipisci, nemo ab eos natus eveniet cumque iure doloribus voluptas expedita neque, inventore reprehenderit. Nostrum iste rerum odio illum cupiditate?
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum maiores delectus fugiat quibusdam cum, pariatur suscipit impedit odit molestiae laboriosam officiis sint voluptas? Dignissimos magnam quam ex nesciunt molestiae inventore!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae similique temporibus eius quas sunt expedita, excepturi tempora magni! Molestias ipsam officia porro non voluptatem cupiditate tempore assumenda optio doloremque! Eum.
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
