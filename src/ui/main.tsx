import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Types are automatically included via tsconfig.json

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
