import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../../data/products";
import "./ProductList.css";
import facebookIcon from "../../assets/images/FB.png";
import instagramIcon from "../../assets/images/IG.png";
import twitterIcon from "../../assets/images/twitter.png";
// import tiktokIcon from "../../assets/tiktok.svg";

function ProductList({ category }) {
  const filteredProducts = category
    ? products.filter((p) => p.gender === category)
    : products;

  // Filter options
  const clothingItems = ["Jackets", "T-Shirts", "Hoodies", "Shirts"];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const dressStyles = ["Casual", "Formal", "Party", "Summer", "Vintage"];
  const colors = [
    "#000000",
    "#ffffff",
    "#808080",
    "#ff0000",
    "#ff7f50",
    "#ffa500",
    "#ffff00",
    "#008000",
    "#0000ff",
    "#4b0082",
    "#800080",
    "#964B00",
  ];

  // Section toggle
  const [openSections, setOpenSections] = useState({
    clothing: true,
    size: true,
    color: true,
    price: true,
    style: true,
  });

  // Active tab
  const [activeTab, setActiveTab] = useState("new");

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <>
      <section className="product-list-page">
        {/* ---------- SIDEBAR FILTER ---------- */}
        <aside className="product-list__sidebar">
          <h3 className="sidebar-title">Filter</h3>

          {/* Clothing Items */}
          <div className="filter-group">
            <div
              className="filter-header"
              onClick={() => toggleSection("clothing")}
            >
              <p>Clothing Items</p>
              <span className="arrow">{openSections.clothing ? "▲" : "▼"}</span>
            </div>
            {openSections.clothing && (
              <ul>
                {clothingItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Sizes */}
          <div className="filter-group">
            <div
              className="filter-header"
              onClick={() => toggleSection("size")}
            >
              <p>Sizes</p>
              <span className="arrow">{openSections.size ? "▲" : "▼"}</span>
            </div>
            {openSections.size && (
              <ul className="size-list">
                {sizes.map((size) => (
                  <li key={size}>{size}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Dress Style */}
          <div className="filter-group">
            <div
              className="filter-header"
              onClick={() => toggleSection("style")}
            >
              <p>Dress Style</p>
              <span className="arrow">{openSections.style ? "▲" : "▼"}</span>
            </div>
            {openSections.style && (
              <ul>
                {dressStyles.map((style) => (
                  <li key={style}>{style}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Colors */}
          <div className="filter-group">
            <div
              className="filter-header"
              onClick={() => toggleSection("color")}
            >
              <p>Colors</p>
              <span className="arrow">{openSections.color ? "▲" : "▼"}</span>
            </div>
            {openSections.color && (
              <ul className="color-list">
                {colors.map((color) => (
                  <li
                    key={color}
                    className="color-circle"
                    style={{ backgroundColor: color }}
                  ></li>
                ))}
              </ul>
            )}
          </div>

          {/* Price Range */}
          <div className="filter-group">
            <div
              className="filter-header"
              onClick={() => toggleSection("price")}
            >
              <p>Price Range</p>
              <span className="arrow">{openSections.price ? "▲" : "▼"}</span>
            </div>
            {openSections.price && (
              <div className="price-range">
                <input
                  type="range"
                  min="0"
                  max="500"
                  defaultValue="250"
                  className="price-slider"
                />
                <div className="price-labels">
                  <span>$0</span>
                  <span>$500</span>
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* ---------- MAIN PRODUCT LIST ---------- */}
        <div className="product-list__main">
          <div className="product-list__header">
            <h2>
              {category
                ? `${
                    category.charAt(0).toUpperCase() + category.slice(1)
                  }’s Clothing`
                : "All Products"}
            </h2>
            <div className="product-list__tabs">
              <button
                className={`tab-btn ${activeTab === "new" ? "active" : ""}`}
                onClick={() => setActiveTab("new")}
              >
                New
              </button>
              <button
                className={`tab-btn ${
                  activeTab === "recommended" ? "active" : ""
                }`}
                onClick={() => setActiveTab("recommended")}
              >
                Recommended
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="product-list__grid">
            {filteredProducts.map((product) => (
              <Link
                to={`/products/${product.id}`}
                className="product-card"
                key={product.id}
              >
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FULL-WIDTH FOOTER ---------- */}
      <footer className="footer">
        <div className="footer__container">
          {/* Help / Support */}
          <div className="footer__column">
            <h3 className="footer__title">Need Help?</h3>
            <ul className="footer__links">
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Track Your Order</a>
              </li>
              <li>
                <a href="#">Returns & Exchanges</a>
              </li>
              <li>
                <a href="#">Shipping Information</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div className="footer__column">
            <h3 className="footer__title">Company</h3>
            <ul className="footer__links">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Affiliate Program</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="footer__column">
            <h3 className="footer__title">Follow Us</h3>
            <div className="footer__socials">
              <a href="#">
                 <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="#">
                <img src={instagramIcon} alt="Instagram" />
              </a> 
              <a href="#">
                <img src={twitterIcon} alt="Twitter" />
              </a>
              {/* <a href="#">
                <img src={tiktokIcon} alt="TikTok" />
              </a> */}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="footer__column">
            <h3 className="footer__title">Stay Updated</h3>
            <p>Subscribe for exclusive offers, style tips, and more.</p>
            <form className="footer__form">
              <input
                type="email"
                placeholder="Enter your email"
                className="footer__input"
              />
              <button type="submit" className="footer__btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} Euphoria Clothing. All rights reserved.
          </p>
          <p>
            <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default ProductList;
