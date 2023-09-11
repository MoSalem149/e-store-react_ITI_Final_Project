import React, { useState } from "react";
import "../../style/Product/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { products } from "../../Data/ProductsData/index"; // Import products as a named import

const Product = ({ addToCart }) => {
  const [selectedSection, setSelectedSection] = useState("All"); // Set the default section to "All"

  // Function to set the selected section
  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div>
      {/* Navigation Links */}
      <ul className="nav nav-tabs my-2">
        <li className="nav-item">
          <a
            className={`nav-link item ${
              selectedSection === "All" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("All")}
            style={{ color: selectedSection === "All" ? "#009688" : "#009688" }}
          >
            All
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link item ${
              selectedSection === "Men" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("Men")}
            style={{ color: selectedSection === "Men" ? "#009688" : "#009688" }}
          >
            Men
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link item ${
              selectedSection === "Women" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("Women")}
            style={{
              color: selectedSection === "Women" ? "#009688" : "#009688",
            }}
          >
            Women
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link item ${
              selectedSection === "Kids" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("Kids")}
            style={{
              color: selectedSection === "Kids" ? "#009688" : "#009688",
            }}
          >
            Kids
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link item ${
              selectedSection === "Baby" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("Baby")}
            style={{
              color: selectedSection === "Baby" ? "#009688" : "#009688",
            }}
          >
            Baby
          </a>
        </li>
      </ul>

      {/* Render products based on the selected section */}
      <h2 className="bg-dark py-2 my-3">
        {selectedSection === "All"
          ? "All Products"
          : `${selectedSection}'s Products`}
      </h2>
      <div className="row">
        {(selectedSection === "All"
          ? products
          : products.filter((product) => product.category === selectedSection)
        ).map((product, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
            <div className="product__item">
              <div className="product__item__pic">
                <img
                  className="product__item__pic"
                  src={product.imageSrc}
                  alt={product.name}
                />
                <ul className="product__hover">
                  <li>
                    <a href={product.imageSrc}>
                      <span className="fa fa-arrows-alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => addToCart(product)}>
                      <span className="fa fa-shopping-cart" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product__item__text">
                <h6>
                  <a href="#">{product.name}</a>
                </h6>
                <p>{product.description}</p>{" "}
                {/* Display the product description */}
                <div className="rating">
                  {Array.from({ length: product.rating }).map((_, i) => (
                    <i key={i} className="fa fa-star" />
                  ))}
                </div>
                <div className="product__price">${product.price}</div>
                <a href={product.readMoreLink}>Read More</a>{" "}
                {/* Add "Read More" link */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
