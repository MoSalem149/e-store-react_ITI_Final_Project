import React from "react";
import ReactDOM from "react-dom/client";

// Import the CSS file for styling
import "./index.css";

// Import the main App component
import App from "./App";

// Import the function for reporting web vitals
import reportWebVitals from "./reportWebVitals";

// Create a React root using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the main application component within a React Strict Mode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Report web vitals to gather performance metrics
reportWebVitals();
