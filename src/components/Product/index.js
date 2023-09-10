import React, { useState } from "react";
import "../../style/Product/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const products = [
  {
    id: 1,
    name: "Furry Hooded",
    imageSrc: require("../../assets/images/shop/shop-1.jpg"),
    price: 590.0,
    rating: 5,
    category: "Men",
  },
  {
    id: 2,
    name: "Beautiful Bag",
    imageSrc: require("../../assets/images/shop/shop-2.jpg"),
    price: 390.99,
    rating: 4,
    category: "Women",
  },
  {
    id: 3,
    name: "Awesome Dress",
    imageSrc: require("../../assets/images/shop/shop-3.jpg"),
    price: 300.99,
    rating: 4,
    category: "Kids",
  },
  {
    id: 4,
    name: "Stylish Jeans",
    imageSrc: require("../../assets/images/shop/shop-4.jpg"),
    price: 290.99,
    rating: 3,
    category: "Men",
  },
  {
    id: 5,
    name: "Cool Boots",
    imageSrc: require("../../assets/images/shop/shop-5.jpg"),
    price: 400.99,
    rating: 4,
    category: "Women",
  },
  {
    id: 6,
    name: "Fashionable Bag",
    imageSrc: require("../../assets/images/shop/shop-6.jpg"),
    price: 650.99,
    rating: 5,
    category: "Kids",
  },
  {
    id: 7,
    name: "Amazing Ears Ring",
    imageSrc: require("../../assets/images/shop/shop-7.jpg"),
    price: 500.99,
    rating: 4,
    category: "Baby",
  },
  {
    id: 8,
    name: "Trendy Scarf",
    imageSrc: require("../../assets/images/shop/shop-8.jpg"),
    price: 422.99,
    rating: 4,
    category: "Baby",
  },
  {
    id: 9,
    name: "Furry Hooded",
    imageSrc: require("../../assets/images/shop/shop-1.jpg"),
    price: 590.0,
    rating: 5,
    category: "Men",
  },
  {
    id: 10,
    name: "Furry Hooded",
    imageSrc: require("../../assets/images/shop/shop-1.jpg"),
    price: 590.0,
    rating: 5,
    category: "Women",
  },
  {
    id: 11,
    name: "Awesome Dress",
    imageSrc: require("../../assets/images/shop/shop-3.jpg"),
    price: 300.99,
    rating: 4,
    category: "Kids",
  },
  {
    id: 12,
    name: "Stylish Jeans",
    imageSrc: require("../../assets/images/shop/shop-4.jpg"),
    price: 290.99,
    rating: 3,
    category: "Men",
  },
  {
    id: 13,
    name: "Awesome Dress",
    imageSrc: require("../../assets/images/shop/shop-3.jpg"),
    price: 300.99,
    rating: 4,
    category: "Women",
  },
  {
    id: 14,
    name: "Fashionable Bag",
    imageSrc: require("../../assets/images/shop/shop-6.jpg"),
    price: 650.99,
    rating: 5,
    category: "Kids",
  },
  {
    id: 15,
    name: "Amazing Ears Ring",
    imageSrc: require("../../assets/images/shop/shop-7.jpg"),
    price: 500.99,
    rating: 4,
    category: "Baby",
  },
  {
    id: 16,
    name: "Trendy Scarf",
    imageSrc: require("../../assets/images/shop/shop-8.jpg"),
    price: 422.99,
    rating: 4,
    category: "Baby",
  },
  {
    id: 17,
    name: "Furry Hooded",
    imageSrc: require("../../assets/images/shop/shop-1.jpg"),
    price: 590.0,
    rating: 5,
    category: "Men",
  },
  {
    id: 18,
    name: "Amazing Ears Ring",
    imageSrc: require("../../assets/images/shop/shop-7.jpg"),
    price: 500.99,
    rating: 4,
    category: "Women",
  },
  {
    id: 19,
    name: "Awesome Dress",
    imageSrc: require("../../assets/images/shop/shop-3.jpg"),
    price: 300.99,
    rating: 4,
    category: "Kids",
  },
  {
    id: 20,
    name: "Stylish Jeans",
    imageSrc: require("../../assets/images/shop/shop-4.jpg"),
    price: 290.99,
    rating: 3,
    category: "Men",
  },
  {
    id: 21,
    name: "Wonderful  Boots",
    imageSrc: require("../../assets/images/shop/shop-9.jpg"),
    price: 400.99,
    rating: 4,
    category: "Women",
  },
  {
    id: 22,
    name: "Fashionable Bag",
    imageSrc: require("../../assets/images/shop/shop-6.jpg"),
    price: 650.99,
    rating: 5,
    category: "Kids",
  },
  {
    id: 23,
    name: "Amazing Ears Ring",
    imageSrc: require("../../assets/images/shop/shop-7.jpg"),
    price: 500.99,
    rating: 4,
    category: "Baby",
  },
  {
    id: 24,
    name: "Trendy Scarf",
    imageSrc: require("../../assets/images/shop/shop-8.jpg"),
    price: 422.99,
    rating: 4,
    category: "Baby",
  },
];

const Product = ({ addToCart }) => {
  const [selectedSection, setSelectedSection] = useState("All"); // Set the default section to "All"

  // Separate products into categories
  const menProducts = products.filter((product) => product.category === "Men");
  const womenProducts = products.filter(
    (product) => product.category === "Women"
  );
  const kidsProducts = products.filter(
    (product) => product.category === "Kids"
  );
  const babyProducts = products.filter(
    (product) => product.category === "Baby"
  );

  // Function to set the selected section
  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div>
      {/* Navigation Links */}
      <ul className="nav nav-tabs my-2">
        {/* Add the new "All" section link here */}
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
          : selectedSection === "Men"
          ? menProducts
          : selectedSection === "Women"
          ? womenProducts
          : selectedSection === "Kids"
          ? kidsProducts
          : selectedSection === "Baby"
          ? babyProducts
          : []
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
                <div className="rating">
                  {Array.from({ length: product.rating }).map((_, i) => (
                    <i key={i} className="fa fa-star" />
                  ))}
                </div>
                <div className="product__price">${product.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
