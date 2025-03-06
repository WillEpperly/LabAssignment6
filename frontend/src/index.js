import React from "react";
import ReactDOM from "react-dom/client";  // Using the new root API in React 18
import App from "./App";  // Import your main App component

// Create the root for the app
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component into the root div
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
