import { useParams } from "react-router-dom";
import products from "../../data/products";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found.</p>;

  return (
    <section className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="product-detail__info">
        <h2>{product.name}</h2>
        <p className="product-detail__price">${product.price}</p>
        <p>{product.description}</p>
        <button className="product-detail__btn">Add to Cart</button>
      </div>
    </section>
  );
}

export default ProductDetail;
