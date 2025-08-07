// src/components/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // You'll create this CSS file

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="login-options">
        <h1>Welcome</h1>
        <p>Please select your user type to log in.</p>
        <Link to="/studentlogin" className="login-button student-button">
          Student Login
        </Link>
        <Link to="/adminlogin" className="login-button admin-button">
          Admin Login
        </Link>
      </div>
    </div>
  );
};

export default HomePage;