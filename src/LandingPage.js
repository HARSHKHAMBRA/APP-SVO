import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faSignInAlt, faDollarSign, faCoins, faGamepad, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './LandingPage.css';
import { faPercentage, faUnlockAlt, faAward } from '@fortawesome/free-solid-svg-icons'; // Adjust icons as needed
// Sample images (replace with your own)
import usdtPortalImg from './assets/img/tether-usdt-logo.png';
import videoSource from './icons/TheImpactWillBeReal.webm'; // Replace with your video file


const LandingPage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">AI & Metaverse</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  <FontAwesomeIcon icon={faUserPlus} className="me-1 text-primary" /> Register
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  <FontAwesomeIcon icon={faSignInAlt} className="me-1 text-primary" /> Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section text-center">
        <div className="hero-section-content">
          <h1 className="display-4">Welcome to the Future of AI & Metaverse</h1>
          <p className="lead">Join us to explore the infinite possibilities of AI and the Metaverse.</p>
        </div>
      </div>
      <section className="video-section py-5">
      <h2 className="explore-rewards-title mb-4">Experience Our Vision</h2>
          <video autoPlay loop className="w-100">
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      </section>
      {/* Vouchers/Rewards Section */}
      <section className="vouchers-section bg-light text-left py-5">
      <h2 className="explore-rewards-title mb-4">Explore Our Rewards</h2>
        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="card text-center">
              <div className="card-body">
                <FontAwesomeIcon icon={faPercentage} className="voucher-icon mb-3" style={{ color: 'green', fontSize: '2rem' }} />
                <h5 className="card-title">50% Off Voucher</h5>
                <p className="card-text">Use this voucher to get 50% off on your next purchase.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card text-center">
              <div className="card-body">
                <FontAwesomeIcon icon={faAward} className="voucher-icon mb-3" style={{ color: 'purple', fontSize: '2rem' }} />
                <h5 className="card-title">Free Access Voucher</h5>
                <p className="card-text">Redeem this voucher for free access to exclusive content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card text-center">
              <div className="card-body">
                <FontAwesomeIcon icon={faUnlockAlt} className="voucher-icon mb-3" style={{ color: 'red', fontSize: '2rem' }} />
                <h5 className="card-title">Bonus Points Reward</h5>
                <p className="card-text">Earn bonus points for every purchase and redeem them later.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card text-center">
              <div className="card-body">
                <FontAwesomeIcon icon={faPercentage} className="voucher-icon mb-3" style={{ color: 'blue', fontSize: '2rem' }} />
                <h5 className="card-title">25% Off Voucher</h5>
                <p className="card-text">Use this voucher to get 25% off on your next purchase.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="cards-section bg-light text-center py-5">
      <h2 className="explore-rewards-title mb-4">Explore Different Phases</h2>
        <div className="row gx-4">
          {/* Card 1: Add Money */}
          <div className="col-md-3 mb-4">
            <div className="card h-100">
              <img src={usdtPortalImg} className="card-img-top" alt="USDT Portal" style={{ width: '40px', height: '40px', objectFit: 'contain', margin: 'auto' }} />
              <div className="card-body">
                <h5 className="card-title">Add Money</h5>
                <p className="card-text">Add funds to your account seamlessly with USDT.</p>
              </div>
            </div>
          </div>
          {/* Card 2: Payout */}
          <div className="col-md-3 mb-4">
            <div className="card h-100">
              <img src={usdtPortalImg} className="card-img-top" alt="USDT Portal" style={{ width: '40px', height: '40px', objectFit: 'contain', margin: 'auto' }} />
              <div className="card-body">
                <h5 className="card-title">Payout</h5>
                <p className="card-text">Withdraw your earnings quickly and securely.</p>
              </div>
            </div>
          </div>
          {/* Card 3: Trading Games */}
          <div className="col-md-3 mb-4">
            <div className="card h-100">
              <FontAwesomeIcon icon={faGamepad} className="card-icon mb-3" style={{ color: '#4e73df', fontSize: '2rem' }} />
              <div className="card-body">
                <h5 className="card-title">Trading Games</h5>
                <p className="card-text">Engage in exciting trading games to earn rewards.</p>
              </div>
            </div>
          </div>
          {/* Card 4: Metaverse Investment */}
          <div className="col-md-3 mb-4">
            <div className="card h-100">
              <FontAwesomeIcon icon={faDollarSign} className="card-icon mb-3" style={{ color: '#ffc107', fontSize: '2rem' }} />
              <div className="card-body">
                <h5 className="card-title">Metaverse Investment</h5>
                <p className="card-text">Invest in the future of the metaverse with confidence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical Cards Section */}
      <section className="vertical-cards-section bg-light py-5">
      <h2 className="explore-rewards-title mb-4">Our Journey</h2>
        <div className="row align-items-center">
          <div className="col-md-6 text-end">
            <div className="card mb-4 mx-auto" style={{ width: '18rem' }}>
              <div className="card-body">
                <FontAwesomeIcon icon={faCoins} className="card-icon mb-3" style={{ color: 'red', fontSize: '2rem' }} />
                <h5 className="card-title">Phase 1</h5>
                <p className="card-text">Start by accumulating your first digital assets.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-start">
            <div className="card mb-4 mx-auto" style={{ width: '18rem' }}>
              <div className="card-body">
                <FontAwesomeIcon icon={faHandHoldingUsd} className="card-icon mb-3" style={{ color: 'blue', fontSize: '2rem' }} />
                <h5 className="card-title">Phase 2</h5>
                <p className="card-text">Diversify your investments in the metaverse.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-end">
            <div className="card mb-4 mx-auto" style={{ width: '18rem' }}>
              <div className="card-body">
                <FontAwesomeIcon icon={faGamepad} className="card-icon mb-3" style={{ color: 'green', fontSize: '2rem' }} />
                <h5 className="card-title">Phase 3</h5>
                <p className="card-text">Participate in trading games and earn rewards.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-start">
            <div className="card mb-4 mx-auto" style={{ width: '18rem' }}>
              <div className="card-body">
                <FontAwesomeIcon icon={faDollarSign} className="card-icon mb-3" style={{ color: 'purple', fontSize: '2rem' }} />
                <h5 className="card-title">Phase 4</h5>
                <p className="card-text">Secure your financial future through smart investments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-light text-center text-lg-start mt-5">
        <div className="container p-4">
          <div className="row footer-content">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">AI & Metaverse</h5>
              <p>
                Join us to explore the infinite possibilities of AI and the Metaverse. Stay connected through our social media channels.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <Link to="/terms" className="text-dark">Terms and Conditions</Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-dark">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Follow Us</h5>
              <ul className="list-unstyled d-flex justify-content-around">
                <li>
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-dark">
                    <FontAwesomeIcon icon={faFacebookF} className="text-primary" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-dark">
                    <FontAwesomeIcon icon={faTwitter} className="text-primary" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-dark">
                    <FontAwesomeIcon icon={faInstagram} className="text-primary" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-dark">
                    <FontAwesomeIcon icon={faLinkedinIn} className="text-primary" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center p-3 bg-dark text-white">
          © 2024 SVO. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
