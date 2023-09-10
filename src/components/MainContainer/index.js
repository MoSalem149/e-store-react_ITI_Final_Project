import React from "react";
import Sidebar from "../Sidebar/index";
import "../../style/MainContainer/style.css";
import Product from "../Product/index";
import CharAnimation from "../Typography/index";
import Cart from "../Cart/index";
import ContactUs from "../ContactUs/index";
import AboutUs from "../AboutUs/index";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }

  // Function to add a product to the cart
  addToCart = (product) => {
    this.setState((prevState) => ({
      cartItems: [...prevState.cartItems, product],
    }));
  };

  // Function to remove a product from the cart
  removeFromCart = (productToRemove) => {
    this.setState((prevState) => ({
      cartItems: prevState.cartItems.filter(
        (product) => product.id !== productToRemove.id
      ),
    }));
  };

  // Function to confirm the purchase
  handleConfirmPurchase = () => {
    // Define your logic to confirm the purchase
    alert("Purchase process confirmed!"); // Display a confirmation message
  };

  // Define the function as a class method
  handleFormSubmit(formData) {
    // Handle form submission logic here
    console.log("Form submitted with data:", formData);
  }

  render() {
    return (
      <section className="main-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 col-md-3 col-sm-4">
              <Cart
                cartItems={this.state.cartItems}
                onRemoveItem={this.removeFromCart}
                onConfirmPurchase={this.handleConfirmPurchase}
              />
              <Sidebar />
              <ContactUs onSubmitForm={this.handleFormSubmit} />
              <AboutUs />
            </div>
            <div className="col-lg-10 col-md-9 col-sm-8">
              <div className="char-animation">
                <CharAnimation />
              </div>
              <Product addToCart={this.addToCart} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MainContainer;
