import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS
import "../../style/Header/style.css"; // Your custom CSS file

function Header() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Top Bar */}
      <div className="top-bar bg-dark text-white py-2">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 d-none d-lg-block">
              <div className="nav-text-group">
                <span className="nav-text">
                  <i className="fas fa-phone"></i> +201552675704
                </span>
                <span className="nav-text">
                  <i className="fas fa-envelope"></i> mosalem149@gmail.com
                </span>
              </div>
            </div>
            {/* <div className="col-sm-4 text-center">
              Social Media Icons
              <a href="#" className="social">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-dribbble"></i>
              </a>
            </div> */}
            <div className="col-sm-4 text-left d-sm-block">
              {/* Language and Currency Dropdowns */}
              <ul className="tools">
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    href="#/"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    <i className="fas fa-globe"></i> Language
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#/">
                        Arabic
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#/">
                        Russian
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#/">
                        English
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#/">
                        French
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#/">
                        Mandarin
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#/">
                        Italian
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#/">
                        Georgian
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a className="nav-link" href="#/">
                    <i className="fas fa-user"></i> My Account
                  </a>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    href="#/"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    <i className="fas fa-dollar-sign"></i> Currency
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#/">
                        USD
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#/">
                        EUR
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#/">
                        $
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#/">
                        GBP (Pound Sterling)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#/">
                        Scottish GBP (Scottish Pound)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#/">
                        Jersey GBP (Jersey Pound)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#/">
                        EGP (Egypt Pound)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#/">
                        JPY
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#/">
                        AUD
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#/">
                        SAR (Saudi Riyal)
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar */}
      <nav
        className={`navbar navbar-expand-lg navbar-dark bg-dark ${
          isNavbarFixed ? "fixed-top" : ""
        }`}
      >
        <div className="container">
          <a className="navbar-brand py-3 d-none d-lg-block" href="#/">
            <i className="fas fa-store"></i>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#myNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Navigation Links */}
              <li className="nav-item">
                <a className="nav-link bg-home" href="#/">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sections
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item about-dropdown-item" href="#/">
                      Men
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item about-dropdown-item" href="#/">
                      Woman
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item about-dropdown-item" href="#/">
                      Kids
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item about-dropdown-item" href="#/">
                      Baby
                    </a>
                  </li>
                </ul>
              </li>

              {/* Other menu items */}
              <li className="nav-item">
                <a className="nav-link" href="#/">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/">
                  Contact Us
                </a>
              </li>
            </ul>

            {/* Search Bar */}
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </form>
            {/* User Account and Cart Icons */}
            <div className="cart-heart ms-3">
              <a href="#/">
                <i className="fas fa-user"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
