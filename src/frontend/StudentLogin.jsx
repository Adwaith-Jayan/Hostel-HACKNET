// src/components/LoginPage.jsx
import './StudentLogin.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  // Login fields
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isNewStudent, setIsNewStudent] = useState(false);
  const [error, setError] = useState('');

  // New student sign-in fields
  const [name, setName] = useState('');
  const [collegeDetails, setCollegeDetails] = useState('');
  const [dob, setDob] = useState('');
  const [guardianDetails, setGuardianDetails] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validatePhoneNumber = (number) => {
    const regex = /^\d{10}$/;
    return regex.test(number);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (!validatePhoneNumber(phoneNumber)) {
      setError('Phone number must be exactly 10 digits.');
      return;
    }

    // Login logic
    console.log('Logging in with:', { phoneNumber, password });
    navigate('/student-dashboard');
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    setError('');

    if (!validatePhoneNumber(phoneNumber)) {
      setError('Phone number must be exactly 10 digits.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Password and Confirm Password do not match.');
      return;
    }

    // Pass the name and college details to the next page as URL parameters
    navigate(`/student-preference?name=${name}&college=${collegeDetails}`);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>{isNewStudent ? 'Sign In' : 'Login'}</h2>
        <form onSubmit={isNewStudent ? handleSignIn : handleLogin}>
          {isNewStudent && (
            <>
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="collegeDetails">College Details</label>
                <input
                  type="text"
                  id="collegeDetails"
                  value={collegeDetails}
                  onChange={(e) => setCollegeDetails(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  id="dob"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  required
                />
              </div>
            </>
          )}

          <div className="input-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          {isNewStudent && (
            <div className="input-group">
              <label htmlFor="guardianDetails">Guardian Details</label>
              <input
                type="text"
                id="guardianDetails"
                value={guardianDetails}
                onChange={(e) => setGuardianDetails(e.target.value)}
                required
              />
            </div>
          )}

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

          {isNewStudent && (
            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}

          {error && <p className="error-message">{error}</p>}
          <button type="submit">{isNewStudent ? 'Sign In' : 'Login'}</button>
        </form>
        <div className="toggle-form">
          <p>
            {isNewStudent ? 'Already have an account?' : 'New student?'}
            <span onClick={() => {
              setIsNewStudent(!isNewStudent);
              setError('');
              setName('');
              setCollegeDetails('');
              setDob('');
              setGuardianDetails('');
              setPassword('');
              setConfirmPassword('');
              setPhoneNumber('');
            }}>
              {isNewStudent ? ' Login here' : ' Sign in here'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;