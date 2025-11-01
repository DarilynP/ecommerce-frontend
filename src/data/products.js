// src/data/products.js
import blackshorts from "../assets/images/blackshorts.png";
import blacksweater from "../assets/images/blacksweater.png";
import hoodie from "../assets/images/hoodie.png";
import whiteshirt from "../assets/images/white_tshirt.png";
import graphicT from "../assets/images/graphicT.png";
import patternshirt from "../assets/images/patternshirt.png";
import yellowsweater from "../assets/images/yellowsweater.png";
import flowerpattern from "../assets/images/flowerpattern.png";

// ---------------- MEN'S PRODUCTS ----------------
import mentshirt from "../assets/images/men_tshirt.png";
import mengraphic from "../assets/images/men_graphict.png";
import menpolo from "../assets/images/men_poloshirt.png";
import sleeve from "../assets/images/sleeve.png";
import menjeans from "../assets/images/men_jeans.png";
import menactive from "../assets/images/men_active.png";

const products = [
  // ---------------- WOMEN'S PRODUCTS ----------------
  {
    id: 1,
    name: "Classic Denim Jacket",
    price: 59.99,
    category: "Jackets",
    gender: "women",
    image: blackshorts,
    description: "Timeless black denim jacket with a tailored fit, perfect for layering over any outfit.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#555555"],
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
    colors: ["#000000", "#ffffff", "#ff0000"],
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
    colors: ["#000000", "#333333", "#888888"],
  },
  {
    id: 4,
    name: "Graphic Tee",
    price: 24.99,
    category: "T-Shirts",
    gender: "women",
    image: graphicT,
    description: "Trendy black graphic T-shirt with a bold print for a casual statement look.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff"],
  },
  {
    id: 5,
    name: "Patterned Button-Up Shirt",
    price: 39.99,
    category: "Shirts",
    gender: "women",
    image: patternshirt,
    description: "Lightweight patterned shirt, perfect for smart-casual styling or layering.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#ffffff", "#cccccc"],
  },
  {
    id: 6,
    name: "White Classic Tee",
    price: 22.99,
    category: "T-Shirts",
    gender: "women",
    image: whiteshirt,
    description: "Crisp white T-shirt made from premium cotton — soft, breathable, and perfect for layering or a minimalist look.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#ffffff"],
  },
  {
    id: 10,
    name: "Yellow Cozy Sweater",
    price: 44.99,
    category: "Sweaters",
    gender: "women",
    image: yellowsweater,
    description: "Bright yellow sweater made from soft knit, perfect for layering and adding a pop of color.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#ffff00", "#ffd700"],
  },
  {
    id: 11,
    name: "Flower Pattern Dress",
    price: 49.99,
    category: "Dresses",
    gender: "women",
    image: flowerpattern,
    description: "Elegant floral dress, perfect for casual outings or special occasions.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#ff69b4", "#ffffff"],
  },

  // ---------------- MEN'S PRODUCTS ----------------
  {
    id: 12,
    name: "Men’s Classic Tee",
    price: 21.99,
    category: "T-Shirts",
    gender: "men",
    image: mentshirt,
    description: "Comfortable cotton T-shirt for men, perfect for casual wear or layering.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#000000", "#ffffff", "#007BFF"],
  },
  {
    id: 13,
    name: "Men’s Graphic Tee",
    price: 26.99,
    category: "T-Shirts",
    gender: "men",
    image: mengraphic,
    description: "Bold graphic T-shirt for men with a stylish print, ideal for casual outings.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#000000", "#ffffff", "#ff0000"],
  },
  {
    id: 14,
    name: "Men’s Polo Shirt",
    price: 34.99,
    category: "Shirts",
    gender: "men",
    image: menpolo,
    description: "Classic polo shirt for men, suitable for both casual and semi-formal occasions.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#0000ff", "#ffffff", "#008000"],
  },
  {
    id: 15,
    name: "Men’s Long Sleeve Shirt",
    price: 29.99,
    category: "Shirts",
    gender: "men",
    image: sleeve,
    description: "Classic long sleeve shirt for men, versatile for work or casual wear.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#ffffff", "#000000", "#808080"],
  },
  {
    id: 16,
    name: "Men’s Jeans",
    price: 49.99,
    category: "Pants",
    gender: "men",
    image: menjeans,
    description: "Stylish and comfortable men’s jeans for everyday wear.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#000080", "#000000"],
  },
  {
    id: 17,
    name: "Men’s Active Hoodie",
    price: 59.99,
    category: "Hoodies",
    gender: "men",
    image: menactive,
    description: "Men’s active hoodie, perfect for workouts or casual wear.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#ff0000", "#000000", "#555555"],
  },
];

export default products;
