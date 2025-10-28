import React from "react";
import { useParams } from "react-router-dom";

const mockProducts = [
  { id: 1, name: "T-Shirt", price: 29.99, image: "https://via.placeholder.com/400", description: "A comfortable cotton t-shirt." },
  { id: 2, name: "Jeans", price: 49.99, image: "https://via.placeholder.com/400", description: "Stylish blue jeans for everyday wear." },
  { id: 3, name: "Sneakers", price: 89.99, image: "https://via.placeholder.com/400", description: "Trendy sneakers with great cushioning." },
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = mockProducts.find(p => p.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>${product.price}</p>
      <p>{product.description}</p>
      <button>Add to Cart</button>
    </div>
  );
}
