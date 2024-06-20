// src/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate('/register');
  };

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <div>
      <h1>Welcome to SVO</h1>
      <button onClick={navigateToRegister}>Register</button>
      <button onClick={navigateToLogin}>Login</button>
    </div>
  );
};

export default LandingPage;
