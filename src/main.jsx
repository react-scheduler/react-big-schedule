import React from "react";
import ReactDOM from "react-dom/client";
import App from "./examples/AddMore";
import "./css/style.css";
import { AuthProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
