import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import './LandingPage.css';

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
                  <FontAwesomeIcon icon={faUserPlus} className="me-1" /> Register
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  <FontAwesomeIcon icon={faSignInAlt} className="me-1" /> Login
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
                    <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-dark">
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-dark">
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-dark">
                    <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
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
