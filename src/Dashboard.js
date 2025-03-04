import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import BottomNavBar from './BottomNavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignOutAlt, faChartLine, faCoins, faExchangeAlt,
  faGamepad, faWallet, faTicketAlt, faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';
import balanceIcon from './assets/img/tether-usdt-logo.png';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('jwtToken');
      if (token) {
        try {
          // Fetch balance
          const userBalanceResponse = await fetch('/.netlify/functions/user-balance', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (userBalanceResponse.ok) {
            const balanceData = await userBalanceResponse.json();
            setBalance(balanceData.balance);

            // Once balance is fetched, fetch user details
            const userDetailsResponse = await fetch('/.netlify/functions/user-details', {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });

            if (userDetailsResponse.ok) {
              const userData = await userDetailsResponse.json();
              setUser(userData);
            } else {
              const errorData = await userDetailsResponse.json();
              setError(errorData.error || 'Failed to fetch user details');
            }
          } else {
            const errorData = await userBalanceResponse.json();
            setError(errorData.error || 'Failed to fetch balance');
          }
        } catch (err) {
          setError(err.message || 'Failed to fetch user balance');
        }
      } else {
        setError('No token found');
      }
    };

    fetchUserData();
  }, []);

  const handleNavigation = (page) => {
    switch (page) {
      case 'MARKET':
        navigate('/Market');
        break;
      case 'MY GAMES':
        navigate('/Game', { state: { token: localStorage.getItem('jwtToken') } });
        break;
      case 'WALLET':
        navigate('/wallet', { state: { token: localStorage.getItem('jwtToken') } });
        break;
      case 'VOUCHERS':
        // Add logic for navigating to Vouchers page
        break;
      case 'ADD MONEY':
        navigate('/AddMoneyPage', { state: { token: localStorage.getItem('jwtToken') } });
        break;
      case 'HELP&SUPPORT':
        navigate('/HelpSupportPage', { state: { token: localStorage.getItem('jwtToken') } });
        break;
      case 'TRANSACTIONS':
        navigate('/TransactionsPage', { state: { token: localStorage.getItem('jwtToken') } });
        break;
      case 'ASSETS':
        navigate('/YourAssets', { state: { token: localStorage.getItem('jwtToken') } });
        break;
      case 'LOGOUT':
        localStorage.removeItem('jwtToken');
        navigate('/login');
        break;
      default:
        break;
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user || balance === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <div className="main-box">
        <h1>Dashboard</h1>
        <div className="user-info">
          <p>Welcome, {user.username}!</p>
          <div className="balance-container">
            <img src={balanceIcon} alt="Balance Icon" width="30" height="30" />
            <p>{balance} USDT</p>
          </div>
        </div>
      </div>
      <div className="Scrolling-container">
        <div className="left-container">
          <div className="left-box" onClick={() => handleNavigation('MARKET')}>
            <FontAwesomeIcon icon={faChartLine} size="2x" className="icon-market" />
            <p>MARKET</p>
          </div>
          <div className="left-box" onClick={() => handleNavigation('MY GAMES')}>
            <FontAwesomeIcon icon={faGamepad} size="2x" className="icon-my-games" />
            <p>MY GAMES</p>
          </div>
        </div>
        <div className="right-container">
          <div className="right-box" onClick={() => handleNavigation('WALLET')}>
            <FontAwesomeIcon icon={faWallet} size="2x" className="icon-wallet" />
            <p>WALLET</p>
          </div>
          <div className="right-box" onClick={() => handleNavigation('VOUCHERS')}>
            <FontAwesomeIcon icon={faTicketAlt} size="2x" className="icon-vouchers" />
            <p>VOUCHERS</p>
          </div>
        </div>
        <div className="left-container">
          <div className="left-box" onClick={() => handleNavigation('ADD MONEY')}>
            <FontAwesomeIcon icon={faCoins} size="2x" className="icon-add-money" />
            <p>ADD MONEY</p>
          </div>
          <div className="left-box" onClick={() => handleNavigation('HELP&SUPPORT')}>
            <FontAwesomeIcon icon={faQuestionCircle} size="2x" className="icon-help-support" />
            <p>HELP&SUPPORT</p>
          </div>
        </div>
        <div className="right-container">
          <div className="right-box" onClick={() => handleNavigation('TRANSACTIONS')}>
            <FontAwesomeIcon icon={faExchangeAlt} size="2x" className="icon-transactions" />
            <p>TRANSACTIONS</p>
          </div>
          <div className="right-box" onClick={() => handleNavigation('ASSETS')}>
            <FontAwesomeIcon icon={faWallet} size="2x" className="icon-assets" />
            <p>ASSETS</p>
          </div>
        </div>
        <div className="right-container">
          <div className="logout-icon right-box" onClick={() => handleNavigation('LOGOUT')}>
            <FontAwesomeIcon icon={faSignOutAlt} size="2x" className="icon-logout" />
            <p>LOGOUT</p>
          </div>
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
};

export default Dashboard;
