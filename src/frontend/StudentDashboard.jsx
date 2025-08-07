// src/components/StudentDashboard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const [studentDetails] = useState({
    name: 'John Doe',
    rollNumber: '2023CS001',
    hostel: 'North Wing',
    roomNumber: 'A-205',
  });

  const [hostelAndAdmin] = useState({
    hostelDetails: {
      totalRooms: 150,
      occupiedRooms: 125,
      amenities: ['Wi-Fi', 'AC', 'Study Table'],
      location: '123 University Blvd, Cityville',
    },
    adminDetails: {
      name: 'Ms. Jane Smith',
      phoneNumber: '987-654-3210',
      email: 'jane.smith@university.edu',
    },
  });

  const [foodMenu] = useState({
    breakfast: 'Idli, Sambar, Chutney',
    lunch: 'Rice, Dal, Chicken Curry, Salad',
    dinner: 'Roti, Paneer Butter Masala, Veg Biryani',
  });

  const [activeSection, setActiveSection] = useState('overview');
  const [complaint, setComplaint] = useState('');
  const [complaintSubmitted, setComplaintSubmitted] = useState(false);

  const handleComplaintSubmit = (e) => {
    e.preventDefault();
    if (complaint.trim() === '') {
      alert('Complaint cannot be empty!');
      return;
    }
    console.log('Complaint submitted:', complaint);
    setComplaintSubmitted(true);
    setTimeout(() => {
      setComplaint('');
      setComplaintSubmitted(false);
    }, 3000);
  };

  const vacancies = hostelAndAdmin.hostelDetails.totalRooms - hostelAndAdmin.hostelDetails.occupiedRooms;

  const renderMainContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="dashboard-grid-container">
            <div className="dashboard-grid">
              <div className="dashboard-card current-hostel-card">
                <h3>Your Room</h3>
                <p><strong>Hostel:</strong> {studentDetails.hostel}</p>
                <p><strong>Room Number:</strong> {studentDetails.roomNumber}</p>
                <Link to="/student-preference" className="dashboard-link">Request a room change</Link>
              </div>

              <div className="dashboard-card vacancy-card">
                <h3>Hostel Vacancies</h3>
                <p className="vacancy-count">{vacancies}</p>
                <p>rooms available</p>
              </div>
              
              <div className="dashboard-card food-menu-card">
                <h3>Today's Food Menu</h3>
                <div className="menu-item">
                  <strong>Breakfast:</strong> {foodMenu.breakfast}
                </div>
                <div className="menu-item">
                  <strong>Lunch:</strong> {foodMenu.lunch}
                </div>
                <div className="menu-item">
                  <strong>Dinner:</strong> {foodMenu.dinner}
                </div>
              </div>
            </div>
          </div>
        );
      case 'details':
        return (
          <div className="details-section">
            <div className="details-card">
              <h3>Hostel Details</h3>
              <p><strong>Hostel Name:</strong> {studentDetails.hostel}</p>
              <p><strong>Location:</strong> {hostelAndAdmin.hostelDetails.location}</p>
              <p><strong>Total Capacity:</strong> {hostelAndAdmin.hostelDetails.totalRooms}</p>
              <p><strong>Amenities:</strong> {hostelAndAdmin.hostelDetails.amenities.join(', ')}</p>
            </div>
            <div className="details-card">
              <h3>Hostel Admin Details</h3>
              <p><strong>Name:</strong> {hostelAndAdmin.adminDetails.name}</p>
              <p><strong>Phone:</strong> {hostelAndAdmin.adminDetails.phoneNumber}</p>
              <p><strong>Email:</strong> {hostelAndAdmin.adminDetails.email}</p>
            </div>
          </div>
        );
      case 'report':
        return (
          <div className="complaint-box-wrapper">
            <div className="complaint-box">
              <h3>Report an Issue</h3>
              <form onSubmit={handleComplaintSubmit}>
                <textarea
                  value={complaint}
                  onChange={(e) => setComplaint(e.target.value)}
                  placeholder="Type your complaint here..."
                  rows="4"
                />
                <button type="submit" disabled={complaintSubmitted}>
                  {complaintSubmitted ? 'Complaint Submitted!' : 'Submit Complaint'}
                </button>
              </form>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-wrapper">
      <Sidebar setActiveSection={setActiveSection} />
      <div className="dashboard-main-content">
        <div className="dashboard-header">
          <h1>Welcome, {studentDetails.name}!</h1>
          <p>Roll Number: {studentDetails.rollNumber}</p>
        </div>
        {renderMainContent()}
      </div>
    </div>
  );
};

export default StudentDashboard;