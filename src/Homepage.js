import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage-container">
      <header className="header">
        <div className="logo">TheCapitalTree</div>
        <nav>
          <ul className="nav-menu">
            <li><Link className="nav-link" to="/Homepage">Home</Link></li>
            <li><Link className="nav-link" to="/about">About</Link></li>
            <li><Link className="nav-link" to="/services">Services</Link></li>
            <li><Link className="nav-link" to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <section className="description-section">
          <h1 className="main-heading">Welcome to The Capital Tree</h1>
          <p className="description-text">
            Experience seamless management with our powerful, user-friendly application. Whether you're here to explore, track progress, or connect with others, MyApp has everything you need in one place.
          </p>
          <p className="description-text">
            Get started now by creating your account or logging in to access your personalized dashboard. Let us help you achieve your goals effortlessly.
          </p>
          <div className="cta-buttons">
            <Link to="/register" className="btn primary-btn">Get Started</Link>
            <Link to="/login" className="btn secondary-btn">Login</Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 The Capital Tree. Powered by the Medro . All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Homepage;