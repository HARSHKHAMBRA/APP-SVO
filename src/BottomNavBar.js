// BottomNavBar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faWallet, faExchangeAlt, faChartLine, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import './BottomNavBar.css'; // Import the CSS file

function BottomNavBar() {
  return (
    <div className="bottom-nav-bar">
      <div className="nav-item">
        <FontAwesomeIcon icon={faChartLine} />
        <p>Market</p>
      </div>
      <div className="nav-item">
        <FontAwesomeIcon icon={faBriefcase} />
        <p>My Assets</p>
      </div>
      <div className="nav-item home">
        <FontAwesomeIcon icon={faHome} />
        <p>Home</p>
      </div>
      <div className="nav-item">
        <FontAwesomeIcon icon={faWallet} />
        <p>Wallet</p>
      </div>
      <div className="nav-item">
        <FontAwesomeIcon icon={faExchangeAlt} />
        <p>Transactions</p>
      </div>
    </div>
  );
}

export default BottomNavBar;
