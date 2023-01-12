import "../css/header.css";
import {
  HeartIcon,
  ShoppingBagIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
const Header = ({ openSidebar, cartCount }) => {
  return (
    <header>
      <nav className="top-nav">
        <img
          src="https://www.yeshtery.com/files/69/brand-logo-yellow.svg"
          alt="logo"
          loading="lazy"
          className="logo"
        />
        <div className="search-container">
          <MagnifyingGlassIcon className="icon" />
          <input type="text" placeholder="Search..." />
        </div>
        <div className="header-icons">
          <div className="icon-container">
            <MagnifyingGlassIcon className="icon search" />
          </div>
          <div className="icon-container" onClick={() => openSidebar(true)}>
            <p className="cart-count">{cartCount}</p>
            <ShoppingBagIcon className="icon" />
            <span>Cart</span>
          </div>
          <div className="icon-container">
            <HeartIcon className="icon" />
            <span>Wishlist</span>
          </div>
          <div className="icon-container">
            <UserIcon className="icon" />
            <span>Login</span>
          </div>
        </div>
      </nav>
      <nav className="bottom-nav">
        <ul>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Sports & Fitness</li>
          <li>Electronics</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
