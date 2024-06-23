import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Game1 = () => {
  const [username, setUsername] = useState('');
  const [userBalance, setUserBalance] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data or use localStorage to get username and user balance
    const storedUsername = localStorage.getItem('username');
    const storedBalance = localStorage.getItem('userBalance');

    if (storedUsername) {
      setUsername(storedUsername);
    }
    if (storedBalance) {
      setUserBalance(parseFloat(storedBalance));
    }
  }, []);

  const handleBack = () => {
    navigate('/game'); // Navigate back to the game main page
  };

  return (
    <div className="game1-container">
      <h2>Welcome to Game 1, {username}!</h2>
      <p>Your balance: {userBalance} USDT</p>
      <div className="game1-content">
        {/* Add your game 1 content and UI components here */}
        <p>This is Game 1 content. Add your game description and UI elements.</p>
      </div>
      <button onClick={handleBack}>Back to Game</button>
    </div>
  );
};

export default Game1;
