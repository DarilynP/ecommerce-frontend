// src/data/products.js
import blackshorts from "../assets/images/blackshorts.png";
import blacksweater from "../assets/images/blacksweater.png";
import hoodie from "../assets/images/hoodie.png";

const products = [
  {
    id: 1,
    name: "Classic Denim Jacket",
    price: 59.99,
    category: "Jackets",
    gender: "women",  // all products now for women
    image: blackshorts,
    description: "Timeless black denim jacket with a tailored fit, perfect for layering over any outfit.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#555555"]
  },
  {
    id: 2,
    name: "Cotton Crewneck T-Shirt",
    price: 19.99,
    category: "T-Shirts",
    gender: "women",
    image: blacksweater,
    description: "Soft cotton black crewneck T-shirt, comfortable for everyday casual wear or layering.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#ff0000"]
  },
  {
    id: 3,
    name: "Stylish Hoodie",
    price: 49.99,
    category: "Hoodies",
    gender: "women",
    image: hoodie,
    description: "Cozy black hoodie with adjustable drawstring and front pocket, perfect for cooler days.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#333333", "#888888"]
  },
];

export default products;
