import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Wingo = () => {
  const [username, setUsername] = useState('');
  const [userBalance, setUserBalance] = useState(0);
  const [error, setError] = useState(null);
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
            setUsername(userData.username);
            setUserBalance(userData.balance);
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

  const handleBack = () => {
    navigate('/game'); // Navigate back to the game main page
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="wingo-container">
      <h2>Welcome to Wingo, {username}!</h2>
      <p>Your balance: {userBalance} USDT</p>
      <div className="wingo-content">
        {/* Add your Wingo content and UI components here */}
        <p>This is Wingo content. Add your game description and UI elements.</p>
      </div>
      <button onClick={handleBack}>Back to Game</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Wingo;
