import React from 'react';
import './Homepage.css'; // Import updated CSS for styling
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="homepage-container">
      {/* Navigation Bar */}
      <header className="navbar">
        <nav className="navbar-content">
          <div className="brand-name">The Capital Tree</div>
          <ul className="navbar-links">
            <li><Link to="/" className="navbar-link">Home</Link></li>
            <li><Link to="/about" className="navbar-link">About</Link></li>
            <li><Link to="/services" className="navbar-link">Services</Link></li>
            <li><Link to="/contact" className="navbar-link">Contact Us</Link></li>
            <li><Link to="/dashboard" className="navbar-link">Dashboard</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">Welcome to The Capital Tree</h1>
          <p className="hero-description">Your trusted partner for all your financial growth needs.</p>
          <div className="hero-buttons">
            <Link to="/register" className="btn-get-started">Get Started</Link>
            <Link to="/login" className="btn-login">Login</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="section-container">
          <h2 className="section-title">About Us</h2>
          <p className="section-description">
            At The Capital Tree, we believe that the growth of your financial future begins with solid, reliable support. 
            Our mission is to provide innovative and effective solutions that help our clients achieve financial success.
          </p>
          <p className="section-description">
            Whether you're a small business or an individual, we offer personalized services to help you navigate and thrive in the ever-evolving financial world.
            With years of expertise, we work closely with you to understand your goals and deliver strategies that make a real difference.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-cards">
            <div className="service-card">
              <h3 className="service-card-title">Custom Website Design</h3>
              <p className="service-card-description">We create visually stunning, responsive websites tailored to your brand’s identity and goals.</p>
            </div>
            <div className="service-card">
              <h3 className="service-card-title">E-commerce Solutions</h3>
              <p className="service-card-description">We build secure, scalable e-commerce stores that provide a seamless shopping experience for your customers.</p>
            </div>
            <div className="service-card">
              <h3 className="service-card-title">SEO & Digital Marketing</h3>
              <p className="service-card-description">Our SEO strategies help your website rank higher, bringing more traffic and boosting your online presence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-section">
        <div className="section-container">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-description">Have any questions or need assistance? Feel free to reach out to us!</p>
          <form className="contact-form">
            <input type="email" placeholder="Your Email" className="input-field" />
            <textarea placeholder="Your Message" className="input-field" rows="4"></textarea>
            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <p>&copy; 2025 The Capital Tree. All Rights Reserved.</p>
        <div className="footer-links">
          <Link to="/register" className="footer-link">Get Started</Link>
          <Link to="/login" className="footer-link">Login</Link>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
