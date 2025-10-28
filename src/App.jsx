import React from "react";
import ProductCard from "./components/ProductDetail";

const testProduct = {
  name: "Awesome Mug",
  price: 19.99,
  image: "https://via.placeholder.com/150",
};

function App() {
  return (
    <div>
      <h1>hi darilyn</h1>
      <ProductCard product={testProduct} />
    </div>
  );
}

export default App;
