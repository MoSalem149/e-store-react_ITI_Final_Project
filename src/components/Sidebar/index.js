import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../../style/Sidebar/style.css";

const Sidebar = () => {
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
        <Link to="#">
          <h4>
            <i className="fas fa-folder px-2"></i>Categories
          </h4>
        </Link>
      </div>
      <div className="category_accordion">
        <div className="accordion">
          {/* Card for Men category */}
          <div className="card card-background">
            <div className="card-heading" onClick={() => toggleCard("Men")}>
              <Link to="#">
                <i className="fas fa-male"></i> Men{" "}
                <i
                  className={`fas ${
                    isMenOpen ? "fa-caret-up" : "fa-caret-down"
                  } px-2`}
                ></i>
              </Link>
            </div>
            <div className={`card-body ${isMenOpen ? "visible" : "hidden"}`}>
              {/* List of items under the Men category */}
              <ul>
                <li>
                  <i className="fas fa-caret-right"></i>{" "}
                  <Link to="/men/t-shirts">T-Shirts</Link>
                </li>
                <li>
                  <i className="fas fa-caret-right"></i>{" "}
                  <Link to="/men/jeans">Jeans</Link>
                </li>
                <li>
                  <i className="fas fa-caret-right"></i>{" "}
                  <Link to="/men/suits">Suits</Link>
                </li>
                <li>
                  <i className="fas fa-caret-right"></i>{" "}
                  <Link to="/men/shoes">Shoes</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Card for Women category */}
          <div className="card card-background">
            <div className="card-heading" onClick={() => toggleCard("Women")}>
              <Link to="#">
                <i className="fas fa-female"></i> Women{" "}
                <i
                  className={`fas ${
                    isWomenOpen ? "fa-caret-up" : "fa-caret-down"
                  } px-2`}
                ></i>
              </Link>
            </div>
            <div className={`card-body ${isWomenOpen ? "visible" : "hidden"}`}>
              {/* List of items under the Women category */}
              <ul>
                <li>
                  <i className="fas fa-caret-right"></i>{" "}
                  <Link to="/women/dresses">Dresses</Link>
                </li>
                <li>
                  <i className="fas fa-caret-right"></i>{" "}
                  <Link to="/women/blouses">Blouses</Link>
                </li>
                <li>
                  <i className="fas fa-caret-right"></i>{" "}
                  <Link to="/women/skirts">Skirts</Link>
                </li>
                <li>
                  <i className="fas fa-caret-right"></i>{" "}
                  <Link to="/women/shoes">Shoes</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Card for Kids category */}
          <div className="card card-background">
            <div className="card-heading" onClick={() => toggleCard("Kids")}>
              <Link to="#">
                <i className="fas fa-child"></i> Kids{" "}
                <i
                  className={`fas ${
                    isKidsOpen ? "fa-caret-up" : "fa-caret-down"
                  } px-2`}
                ></i>
              </Link>
            </div>
            <div className={`card-body ${isKidsOpen ? "visible" : "hidden"}`}>
              {/* List of items under the Kids category */}
              <ul>
                <li>
                  <i className="fas fa-caret-right"></i>{" "}
                  <Link to="/kids/toys">Toys</Link>
                </li>
                <li>
                  <i className="fas fa-caret-right"></i>{" "}
                  <Link to="/kids/school-supplies">School Supplies</Link>
                </li>
                <li>
                  <i className="fas fa-caret-right"></i>{" "}
                  <Link to="/kids/clothing">Clothing</Link>
                </li>
                <li>
                  <i className="fas fa-caret-right"></i>{" "}
                  <Link to="/kids/shoes">Shoes</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Card for Baby category */}
          <div className="card card-background">
            <div className="card-heading" onClick={() => toggleCard("Baby")}>
              <Link to="#">
                <i className="fas fa-baby"></i> Baby{" "}
                <i
                  className={`fas ${
                    isBabyOpen ? "fa-caret-up" : "fa-caret-down"
                  } px-2`}
                ></i>
              </Link>
            </div>
            <div className={`card-body ${isBabyOpen ? "visible" : "hidden"}`}>
              {/* List of items under the Baby category */}
              <ul>
                <li>
                  <i className="fas fa-caret-right"></i>{" "}
                  <Link to="/baby/diapers">Diapers</Link>
                </li>
                <li>
                  <i className="fas fa-caret-right"></i>{" "}
                  <Link to="/baby/food">Baby Food</Link>
                </li>
                <li>
                  <i className="fas fa-caret-right"></i>{" "}
                  <Link to="/baby/clothing">Clothing</Link>
                </li>
                <li>
                  <i className="fas fa-caret-right"></i>{" "}
                  <Link to="/baby/toys">Toys</Link>
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
