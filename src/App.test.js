// Import necessary functions and components from testing libraries
import { render, screen } from "@testing-library/react";
import App from "./App";

// Define a test case using the 'test' function
test("renders learn react link", () => {
  // Render the 'App' component
  render(<App />);

  // Find an element in the rendered component by its text content
  const linkElement = screen.getByText(/learn react/i);

  // Use an assertion to check if the element is in the document
  expect(linkElement).toBeInTheDocument();
});
