// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ProductList from "./components/ProductList/ProductList";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import SignIn from "./components/SignIn/SignIn";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Favorites from "./components/Favorites/Favorites";
import "./App.css";

function App() {
  const location = useLocation();
  const hideHeaderRoutes = ["/signin"];
  const displayHeader = !hideHeaderRoutes.includes(location.pathname);
  return (
    <>
      {displayHeader && <Header />}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          {/* ✅ Category-specific pages */}
          <Route path="/shop-men" element={<ProductList category="men" />} />
          <Route
            path="/shop-women"
            element={<ProductList category="women" />}
          />

          {/* ✅ Favorites page */}
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
