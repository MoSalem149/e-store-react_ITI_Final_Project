import React from "react";
import "../../style/Footer/style.css";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="container">
        <div className="row">
          {/* Social Section */}
          <div className="col-sm-3">
            <h4 className="title">
              <i class="fas fa-users px-2"></i>Social
            </h4>
            <p>
              Connect, engage, and stay updated with our online community. Join
              discussions, share insights, and be part of the conversation.
              Welcome to our Social hub!
            </p>
            <ul className="social-icon">
              <a href="https://www.facebook.com" className="social">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="https://www.twitter.com" className="social">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com" className="social">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="https://www.youtube.com" className="social">
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
              </a>
              <a href="https://www.google.com" className="social">
                <i className="fa fa-google" aria-hidden="true"></i>
              </a>
              <a href="https://www.dribbble.com" className="social">
                <i className="fa fa-dribbble" aria-hidden="true"></i>
              </a>
            </ul>
          </div>
          {/* My Account Section */}
          <div className="col-sm-3">
            <h4 className="title">
              <i class="fas fa-id-card px-2"></i>My Account
            </h4>
            <span className="acount-icon">
              <a href="/wishlist">
                <i className="fa fa-heart" aria-hidden="true"></i> Wish List
              </a>
              <a href="/cart">
                <i className="fa fa-cart-plus" aria-hidden="true"></i> Cart
              </a>
              <a href="/profile">
                <i className="fa fa-user" aria-hidden="true"></i> Profile
              </a>
              <a href="/language">
                <i className="fa fa-globe" aria-hidden="true"></i> Language
              </a>
            </span>
          </div>
          {/* Category Section */}
          <div className="col-sm-3">
            <h4 className="title">
              <i class="fas fa-folder px-2"></i>Category
            </h4>
            <div className="category">
              <a href="/category/men">men</a>
              <a href="/category/women">women</a>
              <a href="/category/boy">boy</a>
              <a href="/category/girl">girl</a>
              <a href="/category/bag">bag</a>
              <a href="/category/tshirt">tshirt</a>
              <a href="/category/top">top</a>
              <a href="/category/shoes">shoes</a>
              <a href="/category/glass">glass</a>
              <a href="/category/kit">kit</a>
              <a href="/category/baby-dress">baby dress</a>
              <a href="/category/kurti">kurti</a>
            </div>
          </div>
          {/* Payment Methods Section */}
          <div className="col-sm-3">
            <h4 className="title">
              <i class="fas fa-dollar-sign px-2"></i>Payment Methods
            </h4>
            <p>
              Discover hassle-free payment options at your fingertips. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Simplify your transactions with ease.
            </p>
            <ul className="payment">
              <li>
                <a href="https://www.americanexpress.com">
                  <i className="fa fa-cc-amex" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://www.mastercard.com">
                  <i className="fa fa-credit-card" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://www.paypal.com">
                  <i className="fa fa-paypal" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://www.visa.com">
                  <i className="fa fa-cc-visa" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row text-center">
          {/* Copyright Text */}
          <div className="col-12">© 2023. Made with by MoSalem149.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
