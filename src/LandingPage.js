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
            <h1>Welcome to Our Tech Landing Page</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae nulla aliquam luctus. Duis euismod, risus at facilisis luctus, nunc lorem fringilla erat, ac euismod orci sapien sit amet purus.
            </p>
            <button onClick={navigateToRegister} className="btn btn-secondary me-2">Register</button>
            <button onClick={navigateToLogin} className="btn btn-secondary">Login</button>
          </div>
        </div>
        <div className="row mt-5">
          {/* Card 1 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <img src="https://via.placeholder.com/350x250" className="card-img-top" alt="Card 1" />
              <div className="card-body">
                <h5 className="card-title">Card Title 1</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non urna non velit malesuada tincidunt.
                </p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <img src="https://via.placeholder.com/350x250" className="card-img-top" alt="Card 2" />
              <div className="card-body">
                <h5 className="card-title">Card Title 2</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non urna non velit malesuada tincidunt.
                </p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <img src="https://via.placeholder.com/350x250" className="card-img-top" alt="Card 3" />
              <div className="card-body">
                <h5 className="card-title">Card Title 3</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non urna non velit malesuada tincidunt.
                </p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
