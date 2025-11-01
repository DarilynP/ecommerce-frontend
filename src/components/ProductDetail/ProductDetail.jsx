import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  // State for selected size and color
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "");

  if (!product) return <p>Product not found.</p>;

  return (
    <section className="product-detail">
      {/* Left column: Product info */}
      <div className="product-detail__info">
        <h1 className="product-detail__title">{product.name}</h1>
        <p className="product-detail__price">${product.price}</p>

        {/* Size selector */}
        <div className="product-detail__sizes">
          <label htmlFor="size">Size:</label>
          <select
            id="size"
            className="product-detail__size-select"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            {product.sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        {/* Color selector */}
        <div className="product-detail__colors">
          <p>Color:</p>
          <ul className="product-detail__color-options">
            {product.colors.map((color) => (
              <li key={color}>
                <button
                  type="button"
                  className={`product-detail__color-swatch ${
                    selectedColor === color ? "product-detail__color-swatch--selected" : ""
                  }`}
                  style={{ backgroundColor: color }}
                  aria-label={color}
                  onClick={() => setSelectedColor(color)}
                ></button>
              </li>
            ))}
          </ul>
        </div>

        <button className="product-detail__btn">Add to Cart</button>

        {/* Description */}
        <div className="product-detail__description">
          <h2>Description</h2>
          <p>{product.description}</p>
        </div>
      </div>

      {/* Right column: Product image */}
      <div className="product-detail__image">
        <img
          src={product.image}
          alt={product.name}
          className="product-detail__main-img"
        />
      </div>
    </section>
  );
}

export default ProductDetail;
