// src/components/AdminConfirmationPage.jsx
import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import './AdminConfirmationPage.css';

const AdminConfirmationPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Extract student data from URL parameters
  const studentData = {
    name: searchParams.get('name'),
    rollNumber: searchParams.get('rollNumber'),
    gender: searchParams.get('gender'),
    batch: searchParams.get('batch'),
    preferredLocation: searchParams.get('location'),
    desiredRoommates: searchParams.get('roommates'),
    roomType: searchParams.get('roomType'),
    amenities: searchParams.get('amenities') ? searchParams.get('amenities').split(',') : [],
  };

  const [applicationStatus, setApplicationStatus] = useState('pending');

  const handleConfirm = () => {
    // In a real app, you would send a request to a backend API here
    console.log(`Application for ${studentData.name} confirmed.`);
    setApplicationStatus('confirmed');
    alert(`Application for ${studentData.name} confirmed!`);
  };

  const handleReject = () => {
    // In a real app, you would send a request to a backend API here
    console.log(`Application for ${studentData.name} rejected.`);
    setApplicationStatus('rejected');
    alert(`Application for ${studentData.name} rejected.`);
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'confirmed': return 'status-confirmed';
      case 'rejected': return 'status-rejected';
      default: return 'status-pending';
    }
  };

  return (
    <div className="admin-page-container">
      <div className="admin-confirmation-card">
        <div className="card-header">
          <h2>Application Review</h2>
          <span className={`application-status ${getStatusClass(applicationStatus)}`}>
            {applicationStatus.toUpperCase()}
          </span>
        </div>
        
        <div className="card-content">
          <h3>Student Details</h3>
          <p><strong>Name:</strong> {studentData.name}</p>
          <p><strong>Roll Number:</strong> {studentData.rollNumber}</p>
          <p><strong>Gender:</strong> {studentData.gender}</p>
          <p><strong>Batch:</strong> {studentData.batch}</p>

          <hr />

          <h3>Hostel Preferences</h3>
          <p><strong>Preferred Location:</strong> {studentData.preferredLocation}</p>
          <p><strong>Room Type:</strong> {studentData.roomType}</p>
          <p><strong>Desired Roommates:</strong> {studentData.desiredRoommates || 'None specified'}</p>
          <p><strong>Amenities:</strong> {studentData.amenities.length > 0 ? studentData.amenities.join(', ') : 'None specified'}</p>
        </div>

        <div className="card-actions">
          {applicationStatus === 'pending' ? (
            <>
              <button className="confirm-btn" onClick={handleConfirm}>Confirm</button>
              <button className="reject-btn" onClick={handleReject}>Reject</button>
            </>
          ) : (
            <button className="back-btn" onClick={() => navigate('/admin-dashboard')}>
              Back to Dashboard
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminConfirmationPage;