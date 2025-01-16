import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <header className="header">
        <div className="logo">TheCapitalTree</div>
        <nav>
          <ul className="nav-menu">
            <li><a className="nav-link" href="/Homepage">Home</a></li>
            <li><a className="nav-link" href="/about">About</a></li>
            <li><a className="nav-link" href="/services">Services</a></li>
            <li><a className="nav-link" href="/contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <section className="about-section">
          <h1 className="main-heading">About Us</h1>
          <p className="about-text">
            Learn more about The Capital Tree and our mission to provide seamless management solutions.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 The Capital Tree. Powered by the Medro . All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;