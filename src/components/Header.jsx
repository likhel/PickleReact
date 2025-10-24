import React, { useState } from "react";
import { FaUser, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { LuHeartPulse } from "react-icons/lu";
import { IoBagHandleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const bag = useSelector((store) => store.bag);
  const user = useSelector((state) => state.auth.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="modern-header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-section">
          <Link to="/" className="logo-link">
            <div className="logo">
              <span className="logo-icon">🥒</span>
              <div className="logo-text">
                <span className="logo-title">Rita's Achar</span>
                <span className="logo-subtitle">Premium Pickles</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Search Bar */}
        <div className={`search-section ${isSearchOpen ? 'search-open' : ''}`}>
          <div className="search-container">
            <input
              type="search"
              className="search-input"
              placeholder="Search for pickles..."
              aria-label="Search"
            />
            <button className="search-btn" type="button">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-section">
          {/* Profile */}
          {user ? (
            <Link className="action-btn profile-btn" to="/profile">
              <FaUser />
              <span className="action-text">{user.first_name}</span>
            </Link>
          ) : (
            <Link className="action-btn profile-btn" to="/login">
              <FaUser />
              <span className="action-text">Login</span>
            </Link>
          )}

          {/* Wishlist */}
          <Link className="action-btn wishlist-btn" to="/wishlist">
            <LuHeartPulse />
            <span className="action-text">Wishlist</span>
          </Link>

          {/* Shopping Bag */}
          <Link className="action-btn bag-btn" to="/bag">
            <IoBagHandleSharp />
            <span className="action-text">Bag</span>
            {bag.length > 0 && (
              <span className="bag-count">{bag.length}</span>
            )}
          </Link>

          {/* Auth Buttons */}
          <div className="auth-buttons">
            {user ? (
              <button
                className="auth-btn logout-btn"
                onClick={() => dispatch(logout())}
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="auth-btn login-btn">
                  Login
                </Link>
                <Link to="/register" className="auth-btn signup-btn">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;
