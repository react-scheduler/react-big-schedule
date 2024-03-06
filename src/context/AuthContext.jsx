import React, { createContext, useContext, useState } from "react";

// Crear el contexto de autenticación
const AuthContext = createContext();

// Proveedor de autenticación
const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  // Función para establecer el nuevo token
  const setAuthToken = (newToken) => {
    setToken(newToken);
  };

  // Función para cerrar la sesión
  const logout = () => {
    // Lógica para cerrar la sesión
    // Por ejemplo, limpiar el token en localStorage
    localStorage.removeItem("token");
    // O realizar otras acciones necesarias para cerrar la sesión
  };

  // Valor del contexto
  const contextValue = {
    token,
    setAuthToken,
    setToken,
    logout,
  };

  // Renderizar el proveedor con el contexto proporcionado
  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

// Hook personalizado para acceder al contexto de autenticación
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser utilizado dentro de un AuthProvider");
  }
  return context;
};

// Exportar las partes necesarias para su uso
export { AuthContext, AuthProvider, useAuth };
