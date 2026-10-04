import urbanlogo from "../assets/urbanlogo.png";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>

      {/* Top Shipping Bar */}
      <div className="top-bar">
        <div className="header-container">
          <div className="row align-items-center">

            <div className="col-md-6">
              <span>FREE SHIPPING On All Orders Over ₹1299</span>
              <span className="shop-now">– SHOP NOW</span>
            </div>

            <div className="col-md-6 text-end">
              <span>Need Help? +91-86689 98753</span>
            </div>

          </div>
        </div>
      </div>


      {/* Main Header */}
      <div className="main-header">
        <div className="header-container">

          <div className="row align-items-center header-row">

            {/* Logo */}
            <div className="col-md-3">
              <Link to="/">
                <img
                  src={urbanlogo}
                  alt="Urban Bharat"
                  className="urban-logo"
                />
              </Link>
            </div>


            {/* Navbar */}
            <div className="col-md-7">
              <nav className="main-nav">

                <a href="/shop">
                  Shop By Category
                  <i className="bi bi-chevron-down"></i>
                </a>

                <a href="/whatsnew">
                  What's New
                </a>

                <a href="/best-selling">
                  Best Selling Products
                </a>

                <a href="/about">
                  About Us
                </a>

                <a href="/sale">
                  Sale
                </a>

              </nav>
            </div>


            {/* Icons */}
            <div className="col-md-2">
              <div className="header-icons">

                <i className="bi bi-search"></i>

                <i className="bi bi-person"></i>

                <i className="bi bi-clock-history"></i>

                <div className="cart-icon">
                  <i className="bi bi-cart3"></i>

                  <span className="cart-count">
                    0
                  </span>
                </div>

                <span className="cart-price">
                  ₹0.00
                </span>

              </div>
            </div>

          </div>

        </div>
      </div>

    </header>
  );
}

export default Header;