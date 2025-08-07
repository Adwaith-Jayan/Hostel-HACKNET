// src/components/AdminLogin.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Changed Navigate to useNavigate
import './AdminLogin.css';

const AdminLogin = () => {
  const navigate = useNavigate(); // Initialize the hook
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleAdminLogin = (e) => {
    e.preventDefault();
    // Admin login logic here
    console.log('Admin logging in with:', { username, password });
    
    // Use the navigate function for redirection
    navigate("/adminrequest");
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Admin Login</h2>
        <form onSubmit={handleAdminLogin}>
          <div className="input-group">
            <label htmlFor="username">Admin Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Log in as Admin</button>
        </form>
        <div className="toggle-form">
          <p>
            <Link to="/">Go back to homepage</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;