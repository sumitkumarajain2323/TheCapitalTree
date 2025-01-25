import React from 'react';
import './Get_Started.css'; // Import the custom CSS for the button

const GetStarted = () => {
  return (
    <div className="get-started-container">
      <div className="content">
        <h1 className="title">Welcome to The Capital Tree</h1>
        <p className="subtitle">Your trusted partner for all your financial growth needs.</p>
        <div className="button-container">
          <a href="/register" className="get-started-btn">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
