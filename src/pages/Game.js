import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Game.css';
import BottomNavBar from '../BottomNavBar';
import balanceIcon from '../assets/img/tether-usdt-logo.png';

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

  // Example games list
  const games = [
    { id: 1, name: 'Game 1' },
    { id: 2, name: 'Game 2' },
    { id: 3, name: 'Game 3' },
    { id: 4, name: 'Game 4' },
    { id: 5, name: 'Game 5' },
    { id: 6, name: 'Game 6' },
    { id: 7, name: 'Game 7' },
    { id: 8, name: 'Game 8' },
  ];

  return (
    <div className="game-container">
      <div className="header">
        <h1>Welcome to the Game!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="game-area">
        <div className="user-info">
          <p>{usernameRef.current}</p>
          <div className="balance-container">
            <img src={balanceIcon} alt="Balance Icon" width="30" height="30" />
            <p>{balanceRef.current} USDT</p>
          </div>
        </div>
        <div className="game-list">
          <div className="games-left">
            {games.slice(0, 4).map(game => (
              <div key={game.id} className="game-item">
                <p>{game.name}</p>
                {/* Add any other game info or UI components here */}
              </div>
            ))}
          </div>
          <div className="games-right">
            {games.slice(4, 8).map(game => (
              <div key={game.id} className="game-item">
                <p>{game.name}</p>
                {/* Add any other game info or UI components here */}
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
};

export default Game;
