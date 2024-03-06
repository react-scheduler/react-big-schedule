import React from "react";
import { createRoot } from "react-dom/client";
import Example from "./Basic";
import "../css/style.css";
import { AuthProvider } from "../context/AuthContext";
createRoot(document.getElementById("app")).render(
  <AuthProvider>
    <Example />
  </AuthProvider>
);
