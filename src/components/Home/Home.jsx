import herobanner from "../../assets/images/shop_hero.png";
import unsplash from "../../assets/images/unsplash.jpg";
import unsplashpurple from "../../assets/images/unsplashpurple.png";
import joggers from "../../assets/images/joggers.png";
import sleeve from "../../assets/images/sleeve.png";
import urbanshirt from "../../assets/images/urban_shirts.png";
import shirts from "../../assets/images/shirts.png";
import "./Home.css";


function Home() {
  return (
    <section className="home">
      {/* Hero banner */}
      <div className="home__banner">
        <img src={herobanner} alt="Hero Banner" className="home__banner-img" />
        <div className="hero_text">
          <h1>T-Shirt / Tops</h1>
          <p>Summer Value Pack</p>
          <button className="home__btn">Shop Now</button>
        </div>
      </div>

      {/* Extra images row below banner */}
      <div className="home__images">
        <div className="home__image-card">
          <img src={unsplash} alt="Unsplash" className="home__picture" />
          <div className="home__image-text">
            Low Price High Coziness up to 50% off
          </div>
        </div>

        <div className="home__image-card">
          <img
            src={unsplashpurple}
            alt="Purple Unsplash"
            className="home__picture"
          />
          <div className="home__image-text">
            Beyoung Presents Breezy Summer Style up to 50% off
          </div>
        </div>
      </div>

      {/* New Arrivals Section - separate from images row */}
      <section className="home__new-arrivals">
        <h2 className="section-title">New Arrival</h2>
        <div className="new-arrivals__grid">
          <div className="new-arrival__item">
            <img src={joggers} alt="Product 1" className="new-arrival__img" />
            <p className="new-arrival__text">Knitted Joggers</p>
          </div>
          <div className="new-arrival__item">
            <img src={sleeve} alt="Product 2" className="new-arrival__img" />
            <p className="new-arrival__text">Full Sleeve</p>
          </div>
          <div className="new-arrival__item">
            <img src={shirts} alt="Product 3" className="new-arrival__img" />
            <p className="new-arrival__text">Active T-Shirt</p>
          </div>
          <div className="new-arrival__item">
            <img
              src={urbanshirt}
              alt="Product 4"
              className="new-arrival__img"
            />
            <p className="new-arrival__text">Urban Shirts</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
