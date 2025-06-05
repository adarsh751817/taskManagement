// src/Components/Logout.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear token from localStorage
    localStorage.removeItem('token');

    // Optional: Clear all localStorage (not recommended unless needed)
    // localStorage.clear();

    // Optional feedback
    alert('👋 You have been logged out successfully!');

    // Redirect to login
    navigate('/login');
  }, [navigate]);

  return null; // No UI needed
};

export default Logout;
