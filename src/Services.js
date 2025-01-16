import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
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
        <section className="services-section">
          <h1 className="main-heading">Our Services</h1>
          <p className="services-text">
            Discover the range of services we offer to help you manage your investments and achieve your goals.
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

export default Services;