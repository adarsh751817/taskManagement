// src/Components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token');

  if (!isAuthenticated) {
    alert('⚠️ Please log in or sign up to access this page!');
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
