import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      {/* Image Slider */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://via.placeholder.com/1920x500" className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="https://via.placeholder.com/1920x500" className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src="https://via.placeholder.com/1920x500" className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Content Section */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1>Welcome to Our Svo Landing Page</h1>
            <p className="lead">
            Please Firstly Register Our Account And Connect With US. we collect a large no. of selected and best users
            </p>
            <button onClick={navigateToRegister} className="btn btn-secondary me-2">Register</button>
            <button onClick={navigateToLogin} className="btn btn-secondary">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
