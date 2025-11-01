import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../../data/products";
import "./ProductList.css";

function ProductList({ category }) {
  const filteredProducts = category
    ? products.filter((p) => p.gender === category)
    : products;

  // Filters
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

  const [openSections, setOpenSections] = useState({
    clothing: true,
    size: true,
    color: true,
    price: true,
    style: true,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <section className="product-list-page">
      {/* Sidebar */}
      <aside className="product-list__sidebar">
        <h3 className="sidebar-title">Filter</h3>

        {/* Clothing Items */}
        <div className="filter-group">
          <div
            className="filter-header"
            onClick={() => toggleSection("clothing")}
          >
            <p>Clothing Items</p>
            <span className="arrow">
              {openSections.clothing ? "▲" : "▼"}
            </span>
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
          <div className="filter-header" onClick={() => toggleSection("size")}>
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
          <div className="filter-header" onClick={() => toggleSection("color")}>
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
          <div className="filter-header" onClick={() => toggleSection("price")}>
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

      {/* Main Product Area */}
      <div className="product-list__main">
        {/* Breadcrumb + Sort Bar */}
        <div className="product-list__top">
          <p className="breadcrumb">
            Home / <span>Women</span> / <span>New Arrivals</span>
          </p>
          <div className="sort-options">
            <label htmlFor="sort">Sort by:</label>
            <select id="sort" name="sort">
              <option value="recommended">Recommended</option>
              <option value="new">Newest</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Title + Tabs */}
        <div className="product-list__header">
          <h2>Women’s Clothing</h2>
          <div className="product-list__tabs">
            <button className="tab-btn active">New</button>
            <button className="tab-btn">Recommended</button>
          </div>
        </div>

        {/* Grid */}
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

        {/* Help Section */}
        <div className="needs-help">
          <h3>Need Help?</h3>
          <ul>
            <li>Contact Us</li>
            <li>Track Order</li>
            <li>FAQ</li>
            <li>About Us</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProductList;
