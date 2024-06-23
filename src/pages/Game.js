import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Game.css';
import BottomNavBar from '../BottomNavBar';

const Game = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const usernameRef = useRef(null);
  const balanceRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('jwtToken');
      if (token) {
        try {
          const userResponse = await fetch('/.netlify/functions/user-details', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (userResponse.ok) {
            const userData = await userResponse.json();
            setUser(userData);
            usernameRef.current = userData.username;
            balanceRef.current = userData.balance;
          } else {
            const errorData = await userResponse.json();
            setError(errorData.error || 'Failed to fetch user details');
          }
        } catch (err) {
          setError(err.message || 'Failed to fetch user data');
        }
      } else {
        setError('No token found');
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    navigate('/login');
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="game-container">
      <div className="header">
        <h1>Welcome to the Game!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="game-area">
        <p>username: {usernameRef.current}</p>
        <p>Your balance: {balanceRef.current}</p>
        {/* Add your game UI components here */}
        <div className="game-board">
          <p>Game content goes here</p>
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
};

export default Game;
