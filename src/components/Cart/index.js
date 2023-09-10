import React, { useState, useEffect } from "react";
import "../../style/Cart/style.css";

const Cart = ({ cartItems, onRemoveItem, onConfirmPurchase }) => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isPurchaseConfirmed, setIsPurchaseConfirmed] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const product of cartItems) {
      totalPrice += product.price;
    }
    return totalPrice;
  };

  const handleConfirmPurchase = () => {
    onConfirmPurchase();
    setIsPurchaseConfirmed(true);
  };

  return (
    <div
      className={`btn-title section-title my-5  mx-1 ${isFixed ? "fixed" : ""}`}
    >
      <div className="cart-heart ms-3 py-4">
        <button className="btn btn-color" onClick={toggleCartVisibility}>
          <a href="#">
            <i className="fas fa-cart-plus"></i>
          </a>
          {isCartVisible ? "Hide Cart" : "Show Cart"}
        </button>
      </div>
      {isCartVisible && (
        <div
          className="contain bg-dark"
          style={{ maxHeight: "400px", overflowY: "auto" }}
        >
          {/* Add the maxHeight and overflowY styles here */}
          <h2 className="contain-header">Shopping Cart</h2>
          <ul className="list-group">
            {cartItems.map((product, index) => (
              <li className="list-group-item bg-colr" key={index}>
                <div className="cart-item">
                  <h5>{product.name}</h5>
                  <p>Price: ${product.price}</p>
                  <div>
                    <button
                      className="btn btn-danger"
                      onClick={() => onRemoveItem(product)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p>Total Price: ${calculateTotalPrice()}</p>
          <button className="btn btn-success" onClick={handleConfirmPurchase}>
            Confirm Purchase
          </button>
          {isPurchaseConfirmed && (
            <p>Purchase process confirmed. Thank you for shopping!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
