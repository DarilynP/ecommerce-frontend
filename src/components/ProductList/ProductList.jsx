import products from "../../data/products";
import { Link } from "react-router-dom";
import "./ProductList.css";

function ProductList() {
  return (
    <section className="product-list">
      <h2 className="product-list__title">All Products</h2>
      <div className="product-list__grid">
        {products.map((product) => (
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
    </section>
  );
}

export default ProductList;
