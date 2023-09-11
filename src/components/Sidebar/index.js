import React, { useState, useEffect } from "react";
import "../../style/Sidebar/style.css";

const Sidebar = () => {
  const [isFixed, setIsFixed] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       setIsFixed(true);
  //     } else {
  //       setIsFixed(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const [isMenOpen, setIsMenOpen] = useState(false);
  const [isWomenOpen, setIsWomenOpen] = useState(false);
  const [isKidsOpen, setIsKidsOpen] = useState(false);
  const [isBabyOpen, setIsBabyOpen] = useState(false);

  const toggleCard = (cardName) => {
    // Close all cards
    setIsMenOpen(false);
    setIsWomenOpen(false);
    setIsKidsOpen(false);
    setIsBabyOpen(false);

    // Toggle the selected card
    if (cardName === "Men") {
      setIsMenOpen(!isMenOpen);
    } else if (cardName === "Women") {
      setIsWomenOpen(!isWomenOpen);
    } else if (cardName === "Kids") {
      setIsKidsOpen(!isKidsOpen);
    } else if (cardName === "Baby") {
      setIsBabyOpen(!isBabyOpen);
    }
  };

  return (
    <div className="sidebar_category bg-dark py-4 my-5">
      {/* Sidebar container */}
      <div className={`section-title bg-dark ${isFixed ? "fixed" : ""}`}>
        <a href="#">
          <h4>
            <i className="fas fa-folder px-2"></i>Categories
          </h4>
        </a>
      </div>
      <div className="category_accordion">
        <div className="accordion">
          {/* Card for Men category */}
          <div className="card card-background">
            <div className="card-heading" onClick={() => toggleCard("Men")}>
              <a href="#">
                <i className="fas fa-male"></i> Men{" "}
                <i
                  className={`fas ${
                    isMenOpen ? "fa-caret-up" : "fa-caret-down"
                  } px-2`}
                ></i>
              </a>
            </div>
            <div className={`card-body ${isMenOpen ? "visible" : "hidden"}`}>
              {/* List of items under the Men category */}
              <ul>
                <li>
                  <i className="fas fa-caret-right"></i>{" "}
                  <a href="#">T-Shirts</a>
                </li>
                <li>
                  <i className="fas fa-caret-right"></i> <a href="#">Jeans</a>
                </li>
                <li>
                  <i className="fas fa-caret-right"></i> <a href="#">Suits</a>
                </li>
                <li>
                  <i className="fas fa-caret-right"></i> <a href="#">Shoes</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Repeat the structure for Women, Kids, and Baby cards */}
          {/* Card for Women category */}
          <div className="card card-background">
            <div className="card-heading" onClick={() => toggleCard("Women")}>
              <a href="#">
                <i className="fas fa-female"></i> Women{" "}
                <i
                  className={`fas ${
                    isWomenOpen ? "fa-caret-up" : "fa-caret-down"
                  } px-2`}
                ></i>
              </a>
            </div>
            <div className={`card-body ${isWomenOpen ? "visible" : "hidden"}`}>
              {/* List of items under the Women category */}
              <ul>
                <li>
                  <i className="fas fa-caret-right"></i> <a href="#">Dresses</a>
                </li>
                <li>
                  <i className="fas fa-caret-right"></i> <a href="#">Blouses</a>
                </li>
                <li>
                  <i className="fas fa-caret-right"></i> <a href="#">Skirts</a>
                </li>
                <li>
                  <i className="fas fa-caret-right"></i> <a href="#">Shoes</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Card for Kids category */}
          <div className="card card-background">
            <div className="card-heading" onClick={() => toggleCard("Kids")}>
              <a href="#">
                <i className="fas fa-child"></i> Kids{" "}
                <i
                  className={`fas ${
                    isKidsOpen ? "fa-caret-up" : "fa-caret-down"
                  } px-2`}
                ></i>
              </a>
            </div>
            <div className={`card-body ${isKidsOpen ? "visible" : "hidden"}`}>
              {/* List of items under the Kids category */}
              <ul>
                <li>
                  <i className="fas fa-caret-right"></i> <a href="#">Toys</a>
                </li>
                <li>
                  <i className="fas fa-caret-right"></i>{" "}
                  <a href="#">School Supplies</a>
                </li>
                <li>
                  <i className="fas fa-caret-right"></i>{" "}
                  <a href="#">Clothing</a>
                </li>
                <li>
                  <i className="fas fa-caret-right"></i> <a href="#">Shoes</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Card for Baby category */}
          <div className="card card-background">
            <div className="card-heading" onClick={() => toggleCard("Baby")}>
              <a href="#">
                <i className="fas fa-baby"></i> Baby{" "}
                <i
                  className={`fas ${
                    isBabyOpen ? "fa-caret-up" : "fa-caret-down"
                  } px-2`}
                ></i>
              </a>
            </div>
            <div className={`card-body ${isBabyOpen ? "visible" : "hidden"}`}>
              {/* List of items under the Baby category */}
              <ul>
                <li>
                  <i className="fas fa-caret-right"></i> <a href="#">Diapers</a>
                </li>
                <li>
                  <i className="fas fa-caret-right"></i>{" "}
                  <a href="#">Baby Food</a>
                </li>
                <li>
                  <i className="fas fa-caret-right"></i>{" "}
                  <a href="#">Clothing</a>
                </li>
                <li>
                  <i className="fas fa-caret-right"></i> <a href="#">Toys</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
