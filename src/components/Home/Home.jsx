import herobanner from "../../assets/images/shop_hero.png";
import unsplash from "../../assets/images/unsplash.jpg";
import unsplashpurple from "../../assets/images/unsplashpurple.png";
import joggers from "../../assets/images/joggers.png";
import sleeve from "../../assets/images/sleeve.png";
import urbanshirt from "../../assets/images/urban_shirts.png";
import shirts from "../../assets/images/shirts.png";
import unsplashleaf from "../../assets/images/unsplash_leaf.png";
import grouppic from "../../assets/images/grouppic.png";
import "./Home.css";
import HM from "../../assets/images/HM.png";
import Levis from "../../assets/images/Levis.png";
import nike from "../../assets/images/nike.png";
import Puma from "../../assets/images/Puma.png";
import polo from "../../assets/images/polologo.png";

function Home() {
  return (
    <section className="home">
      {/* Hero banner */}
      <div className="home__banner">
        <img src={herobanner} alt="Hero Banner" className="home__banner-img" />
        <div className="hero_text">
          <h1>T-Shirt / Tops</h1>
          <p>
            Summer <br />
            Value Pack
          </p>
          <h2>cool / colorful / comfy</h2>
          <button className="home__btn">Shop Now</button>
        </div>
      </div>

      {/* Page content wrapper */}
      <div className="page-content">
        {/* Extra images row */}
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

        {/* New Arrivals Section */}
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

        {/* Featured Images Section */}
        <section className="home__featured-images">
          <div className="home__featured-image-card">
            <img
              src={unsplashleaf}
              alt="Featured 1"
              className="home__featured-img"
            />
            <div className="featured__overlay-text">
              <span className="featured__overlay-text--bold">
                WE MADE YOUR EVERYDAY <br /> FASHION BETTER!
              </span>
              <span className="featured__overlay-text--light">
                In our journey to improve everyday fashion, Euphoria presents
                EVERYDAY wear range — comfortable & affordable fashion 24/7.
              </span>
            </div>
          </div>

          <div className="home__featured-image-card">
            <img
              src={grouppic}
              alt="Featured 2"
              className="home__featured-img"
            />
          </div>
        </section>

        {/* Brand Deals Section */}
        <section className="brand__deals">
          <h3>
            <span className="brand__deals-title">Top Brand Deals</span>
            <br />
            <span className="brand__deals-subtitle">
              Up To 60% off on brands
            </span>
          </h3>
          <div className="brand__deals-logos">
            <img src={nike} alt="Nike" className="brand__deals-img" />
            <img src={Puma} alt="Puma" className="brand__deals-img" />
            <img src={HM} alt="HM" className="brand__deals-img" />
            <img src={Levis} alt="Levis" className="brand__deals-img" />
            <img src={polo} alt="polo" className="brand__deals-img" />
          </div>
        </section>

        {/* Footer Section */}
        <footer className="home__footer">
          <div className="footer__container">
            {/* Contact Section */}
            <div className="footer__section">
              <h4 className="footer__title">Contact</h4>
              <ul className="footer__list">
                <li>Email: support@euphoria.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Order Tracking</li>
                <li>Refunds & Returns</li>
              </ul>
            </div>

            {/* Company Section */}
            <div className="footer__section">
              <h4 className="footer__title">Company</h4>
              <ul className="footer__list">
                <li>About Us</li>
                <li>Careers</li>
                <li>Media</li>
                <li>Blog</li>
              </ul>
            </div>

            {/* More Info Section */}
            <div className="footer__section">
              <h4 className="footer__title">More Info</h4>
              <ul className="footer__list">
                <li>Shipping Policy</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>

          <div className="footer__bottom">
            <p>© 2025 Euphoria. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Home;
