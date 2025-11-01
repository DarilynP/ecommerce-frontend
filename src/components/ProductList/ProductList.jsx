import products from "../../data/products";
import { Link } from "react-router-dom";
import "./ProductList.css";

function ProductList({ category }) {
  const filteredProducts = category
    ? products.filter((p) => p.gender === category)
    : products;

  // Example filter options
  const sizes = ["S", "M", "L", "XL"];
  const clothingItems = ["Jackets", "T-Shirts", "Hoodies"];
  const colors = ["#000000", "#ffffff", "#ff0000", "#555555", "#888888"];

  return (
    <section className="product-list-page">
      {/* Left filter sidebar */}
      <aside className="product-list__sidebar">
        <h3>Filter</h3>

        <div className="filter-group">
          <p>Clothing Items</p>
          <ul>
            {clothingItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="filter-group">
          <p>Sizes</p>
          <ul className="size-list">
            {sizes.map((size) => (
              <li key={size}>{size}</li>
            ))}
          </ul>
        </div>

        <div className="filter-group">
          <p>Colors</p>
          <ul className="color-list">
            {colors.map((color) => (
              <li
                key={color}
                className="color-circle"
                style={{ backgroundColor: color }}
              ></li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main content */}
      <div className="product-list__main">
        {/* Header with tabs */}
        <div className="product-list__header">
          <h2>Women’s Clothing</h2>
          <div className="product-list__tabs">
            <button className="tab-btn">News</button>
            <button className="tab-btn">Recommend</button>
          </div>
        </div>

        {/* Product grid */}
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

        {/* Needs Help Section */}
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
