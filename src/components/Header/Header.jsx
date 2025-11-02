import { Link } from "react-router-dom";
import "./Header.css";
import LikeIcon from "../../assets/images/heart.png";
import CartIcon from "../../assets/images/shopping_cart.png";
import UserIcon from "../../assets/images/user.png";

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        {/* Logo */}
        <div className="header__logo">
          <Link to="/" className="header__logo-link">
            Euphoria<span className="header__dot">.</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="header__nav">
          <Link to="/" className="header__link">Home</Link>
          <Link to="/shop-men" className="header__link">Men</Link>
          <Link to="/shop-women" className="header__link">Women</Link>
        </nav>

        {/* Search & Icons */}
        <div className="header__right">
          {/* Search bar */}
          <div className="header__search">
            <input
              type="text"
              placeholder="Search for products..."
              className="header__search-input"
            />
          </div>

          {/* Icons */}
          <div className="header__icons">
            <Link to="/signin" className="header__icon-link">
              <img src={UserIcon} alt="Login" className="header__icon" />
            </Link>

            <Link to="/favorites" className="header__icon-link">
              <img src={LikeIcon} alt="Favorites" className="header__icon" />
            </Link>

            <Link to="/cart" className="header__icon-link header__cart">
              <img src={CartIcon} alt="Cart" className="header__icon" />
              <span className="header__cart-badge">2</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
