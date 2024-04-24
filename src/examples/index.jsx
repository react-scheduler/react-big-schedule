import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Example from "./Basic";
import "../css/style.css";
import { AuthProvider } from "../context/AuthContext";
import CrearCita from "../screens/CrearCita";
import ListaEspera from "../screens/ListaEspera";
import EditarCita from "../screens/EditarCita";
createRoot(document.getElementById("app")).render(
  <AuthProvider>
    {/* <Example /> */}
    <Router>
      <Routes>
        <Route path="/" element={<Example />} />
        <Route path="/miliga/crearcita" element={<CrearCita />} />
        <Route path="/miliga/listaEspera" element={<ListaEspera />} />
        <Route path="/miliga/editarcita" element={<EditarCita />} />
      </Routes>
    </Router>
  </AuthProvider>
);
