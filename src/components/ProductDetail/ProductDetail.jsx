import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../../data/products";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "");
  const [reviews, setReviews] = useState([
    { name: "Ava", rating: 5, comment: "Perfect fit, love the quality!" },
    { name: "Mia", rating: 4, comment: "Color exactly as shown, fabric feels premium." },
  ]);
  const [newReview, setNewReview] = useState({ name: "", rating: 5, comment: "" });

  if (!product) return <p>Product not found.</p>;

  const similarProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;
    setReviews([...reviews, newReview]);
    setNewReview({ name: "", rating: 5, comment: "" });
  };

  return (
    <section className="product-detail-page">
      {/* ---------- TOP SECTION ---------- */}
      <div className="product-detail__container">
        <div className="product-detail__image">
          <img src={product.image} alt={product.name} className="product-detail__main-img" />
        </div>

        <div className="product-detail__info">
          <h1 className="product-detail__title">{product.name}</h1>
          <p className="product-detail__price">${product.price}</p>

          <div className="product-detail__rating">
            <span>⭐ ⭐ ⭐ ⭐ ☆</span>
            <p>(120 Reviews)</p>
          </div>

          {/* Sizes */}
          <div className="product-detail__sizes">
            <h3>Choose Size</h3>
            <ul className="size-options">
              {product.sizes.map((size) => (
                <li key={size}>
                  <button
                    type="button"
                    className={`size-box ${selectedSize === size ? "active" : ""}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Colors */}
          <div className="product-detail__colors">
            <h3>Choose Color</h3>
            <ul className="color-options">
              {product.colors.map((color) => (
                <li key={color}>
                  <button
                    type="button"
                    className={`color-swatch ${selectedColor === color ? "selected" : ""}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  ></button>
                </li>
              ))}
            </ul>
          </div>

          <div className="product-detail__actions">
            <button className="btn btn--add">Add to Cart</button>
            <button className="btn btn--wishlist">♡ Wishlist</button>
          </div>
        </div>
      </div>

      {/* ---------- DESCRIPTION SECTION ---------- */}
      <div className="product-detail__section product-detail__description">
        <h2>Product Description</h2>

        {/* Tabs */}
        <div className="desc-tabs">
          <button className="tab active">Description</button>
          <button className="tab">User Comments (2)</button>
          <button className="tab">Q&A</button>
        </div>

        <div className="desc-content">
          {/* LEFT TEXT & TABLE */}
          <div className="desc-left">
            <p className="desc-text">
              100% bio-washed cotton makes the fabric extra soft and silky.
              Flexible ribbed crew neck with high-precision stitching.
              Designed for comfort, durability, and modern casual wear.
            </p>

            <table className="desc-table">
              <tbody>
                <tr>
                  <td><strong>Fabric</strong></td>
                  <td>Bio-washed Cotton</td>
                  <td><strong>Pattern</strong></td>
                  <td>Printed</td>
                </tr>
                <tr>
                  <td><strong>Fit</strong></td>
                  <td>Regular Fit</td>
                  <td><strong>Neck</strong></td>
                  <td>Round Neck</td>
                </tr>
                <tr>
                  <td><strong>Sleeve</strong></td>
                  <td>Half-sleeve</td>
                  <td><strong>Style</strong></td>
                  <td>Casual Wear</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* RIGHT VIDEO PREVIEW */}
          <div className="desc-video">
            <div className="video-thumbnail">
              <img src={product.image} alt={product.name} />
              <div className="video-overlay">
                <span className="play-btn">▶</span>
              </div>
            </div>
            <p className="video-caption">{product.name}</p>
          </div>
        </div>
      </div>

      {/* ---------- REVIEWS ---------- */}
      <div className="product-detail__section reviews-section">
        <h2>Customer Reviews</h2>
        <ul className="review-list">
          {reviews.map((rev, i) => (
            <li key={i} className="review-item">
              <div className="review-header">
                <strong>{rev.name}</strong>
                <span>{"⭐".repeat(rev.rating)}</span>
              </div>
              <p>{rev.comment}</p>
            </li>
          ))}
        </ul>

        <form className="review-form" onSubmit={handleSubmitReview}>
          <h3>Leave a Review</h3>
          <input
            type="text"
            placeholder="Your name"
            value={newReview.name}
            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
          />
          <select
            value={newReview.rating}
            onChange={(e) =>
              setNewReview({ ...newReview, rating: parseInt(e.target.value) })
            }
          >
            {[5, 4, 3, 2, 1].map((r) => (
              <option key={r} value={r}>
                {r} Stars
              </option>
            ))}
          </select>
          <textarea
            placeholder="Write your review..."
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
          ></textarea>
          <button type="submit" className="btn btn--add">
            Submit Review
          </button>
        </form>
      </div>

      {/* ---------- SIMILAR PRODUCTS ---------- */}
      <div className="product-detail__section similar-products">
        <h2>Similar Products</h2>
        <div className="similar-grid">
          {similarProducts.map((p) => (
            <Link to={`/products/${p.id}`} key={p.id} className="similar-card">
              <img src={p.image} alt={p.name} />
              <h4>{p.name}</h4>
              <p>${p.price}</p>
            </Link>
          ))}
        </div>
      </div>

      <Link to="/products" className="back-link">
        ← Back to Products
      </Link>
    </section>
  );
}

export default ProductDetail;
