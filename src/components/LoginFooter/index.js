// Import React and the CSS file for styling
import React from "react";
import "../../style/LoginFooter/style.css";

// Define a functional component called LoginFooter
function LoginFooter() {
  return (
    // Render a footer with a specific styling
    <footer className="bg-dark text-center py-4">
      <p>
        &copy; {new Date().getFullYear()} eStore. All rights reserved By
        MoSale149.
      </p>
    </footer>
  );
}

// Export the LoginFooter component for use in other parts of the application
export default LoginFooter;
