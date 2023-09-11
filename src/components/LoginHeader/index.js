// Import React and the CSS file for styling
import React from "react";
import "../../style/LoginHeader/style.css";

// Define a functional component called LoginHeader
function LoginHeader({ showSignUp }) {
  return (
    // Render a header with specific styling and conditionally add the "expanded" class
    <header
      className={`bg-dark text-center py-4 ${showSignUp ? "expanded" : ""}`}
    >
      <h2 className="heading">Welcome to eStore</h2>
    </header>
  );
}

// Export the LoginHeader component for use in other parts of the application
export default LoginHeader;
