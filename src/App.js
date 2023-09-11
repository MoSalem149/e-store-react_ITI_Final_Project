// Import necessary React and React Router components and styles
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import custom components
import Footer from "./components/Footer/index";
import Header from "./components/Header/index";
import MainContainer from "./components/MainContainer/index";
import Login from "./components/Loogin/index"; // Note: Typo here, should be "Login" instead of "Loogin"
import "./App.css"; // Import custom CSS
import "bootstrap/dist/css/bootstrap.css"; // Import Bootstrap CSS

function App() {
  // Define state for authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle user login
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Function to handle user logout
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="App">
      <Router>
        {!isAuthenticated && (
          // Display the login route when not authenticated
          <Routes>
            <Route path="/" element={<Login onLogin={handleLogin} />} />
          </Routes>
        )}

        {isAuthenticated && (
          // Display header, main container, and footer when authenticated
          <>
            <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
            <MainContainer />
            <Footer />
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
