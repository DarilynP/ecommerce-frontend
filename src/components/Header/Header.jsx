import { Link } from "react-router-dom";
import "./Header.css";
import LikeIcon from "../../assets/images/heart.png";
import CartIcon from "../../assets/images/shopping_cart.png";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">Euphoria</div>

      <nav className="header__nav">
        <Link to="/" className="header__link">Home</Link>
        <Link to="/shop-men" className="header__link">Men</Link>
        <Link to="/shop-women" className="header__link">Women</Link>
      </nav>

      <div className="header__right">
        {/* Search bar */}
        <div className="header__search">
          <input
            type="text"
            placeholder="Search products..."
            className="header__search-input"
          />
          <button className="header__search-btn">Search</button>
        </div>

        {/* Icons */}
        <Link to="/favorites" className="header__icon-link">
          <img src={LikeIcon} alt="Favorites" className="header__icon" />
        </Link>
        <Link to="/cart" className="header__icon-link">
          <img src={CartIcon} alt="Cart" className="header__icon" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
