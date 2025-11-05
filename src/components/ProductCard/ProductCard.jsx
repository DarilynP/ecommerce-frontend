import React, { useState } from "react";
import "./ProductCard.css";
import like from "../../assets/images/like.png";

function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => setLiked(!liked);

  return (
    <div className="product-card">
      <div className="product-card__image-wrapper">
        {/* Product image */}
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
        />

        {/* Like button on top-right of image */}
        <button
          className={`like-btn ${liked ? "liked" : ""}`}
          onClick={handleLike}
        >
          <img src={like} alt="like icon" className="like-icon" />
        </button>
      </div>

      {/* Product details */}
      <div className="product-card__info">
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
