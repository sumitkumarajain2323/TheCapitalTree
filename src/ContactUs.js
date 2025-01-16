import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contactus-container">
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
        <section className="contact-section">
          <h1 className="main-heading">Contact Us</h1>
          <p className="contact-text">
            If you have any questions or need further information, please feel free to contact us.
          </p>
          <form className="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            
            <button type="submit" className="btn primary-btn">Submit</button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 The Capital Tree. Powered by the Medro . All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ContactUs;