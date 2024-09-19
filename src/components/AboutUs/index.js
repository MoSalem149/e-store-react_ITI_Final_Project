import React, { useState } from "react";
import "../../style/AboutUs/style.css";

const AboutUs = () => {
  const [isAboutUsVisible, setIsAboutUsVisible] = useState(false);

  const toggleAboutUsVisibility = () => {
    setIsAboutUsVisible(!isAboutUsVisible);
  };

  return (
    <div className="btn-title section-title">
      <div className="about-icon ms-3 py-4">
        <button
          className="btn btn-color py-3"
          onClick={toggleAboutUsVisibility}
        >
          <i className="fas fa-info-circle px-1"></i>
          {isAboutUsVisible ? "Hide About Us" : "Show About Us"}
        </button>
      </div>
      {isAboutUsVisible && (
        <div className="container bg-dark p-3">
          <h2 className="about-header">About Us</h2>
          <div className="paragraphs bg-custom">
            <p>
              Welcome to our e-store website! We are passionate about providing
              you with the best products and shopping experience. Our mission is
              to offer high-quality items, exceptional customer service, and a
              seamless online shopping journey.
            </p>
            <hr />
            <p>
              Discover a wide range of clothing options at our online store,
              from trendy outfits to timeless classics, all curated to keep you
              in vogue. Upgrade your wardrobe today with our stylish essentials
              and statement pieces.
            </p>
            <hr />
            <p>
              We prioritize transparency, security, and convenience. Your trust
              is paramount, and we take data protection seriously. Shop with
              confidence, knowing that your information is safe with us.
            </p>
            <hr />
            <p>
              Thank you for choosing us as your preferred online shopping
              destination. We look forward to serving you and providing an
              unforgettable shopping experience.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
