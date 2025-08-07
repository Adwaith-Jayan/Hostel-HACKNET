// src/components/AdminDashboard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import './AdminDashboard.css';

const AdminDashboard = () => {
  // State to manage the active section
  const [activeSection, setActiveSection] = useState('overview');

  // Mock data for the dashboard
  const [hostelDetails, setHostelDetails] = useState({
    name: 'North Wing Hostel',
    totalRooms: 150,
    occupiedRooms: 125,
  });

  const [foodMenu, setFoodMenu] = useState({
    breakfast: 'Idli, Sambar, Chutney',
    lunch: 'Rice, Dal, Chicken Curry, Salad',
    dinner: 'Roti, Paneer Butter Masala, Veg Biryani',
  });

  // Mock data for student applications and reports
  const [applications, setApplications] = useState([
    {
      id: 1, name: 'Jane Doe', rollNumber: '2023CS002', gender: 'female', 
      location: 'South Wing', roomType: 'single', status: 'pending',
    },
    {
      id: 2, name: 'Michael Chen', rollNumber: '2024EE010', gender: 'male', 
      location: 'North Wing', roomType: 'double', status: 'pending',
    },
  ]);

  const [reports, setReports] = useState([
    { id: 1, student: 'Jane Doe', rollNumber: '2023CS002', content: 'The Wi-Fi is very slow on the 3rd floor.' },
    { id: 2, student: 'Michael Chen', rollNumber: '2024EE010', content: 'The common room fan is not working.' },
  ]);

  const vacancies = hostelDetails.totalRooms - hostelDetails.occupiedRooms;

  const handleEdit = (section) => {
    alert(`Editing ${section} details... (functionality not implemented)`);
    // In a real application, this would open a modal or navigate to an edit form.
  };

  const getConfirmationUrl = (app) => {
    const params = new URLSearchParams({
      name: app.name,
      rollNumber: app.rollNumber,
      gender: app.gender,
      location: app.location,
      roomType: app.roomType,
    });
    return "/adminrequest";
  };

  const renderMainContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <>
            <div className="admin-grid">
              <div className="admin-card">
                <div className="card-header-with-btn">
                  <h3>Hostel Details</h3>
                  <button onClick={() => handleEdit('hostel')}>Edit</button>
                </div>
                <p><strong>Hostel Name:</strong> {hostelDetails.name}</p>
                <p><strong>Total Students:</strong> {hostelDetails.occupiedRooms}</p>
                <p><strong>Vacancies:</strong> {vacancies}</p>
              </div>

              <div className="admin-card">
                <div className="card-header-with-btn">
                  <h3>Food Menu</h3>
                  <button onClick={() => handleEdit('food menu')}>Edit</button>
                </div>
                <p><strong>Breakfast:</strong> {foodMenu.breakfast}</p>
                <p><strong>Lunch:</strong> {foodMenu.lunch}</p>
                <p><strong>Dinner:</strong> {foodMenu.dinner}</p>
              </div>
            </div>
          </>
        );
      case 'applications':
        return (
          <div className="applications-section">
            <h2>Student Requests</h2>
            <p className="applications-subtitle">Click on a pending application to review it.</p>
            <div className="applications-grid">
              {applications.filter(app => app.status === 'pending').map((app) => (
                <Link key={app.id} to={getConfirmationUrl(app)} className="application-card-link">
                  <div className="application-card">
                    <div className="card-info">
                      <h3>{app.name}</h3>
                      <p>Roll No: {app.rollNumber}</p>
                      <p>Room Type: {app.roomType}</p>
                    </div>
                    <div className="card-status">
                      <span className="status-badge status-pending">Pending</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      case 'reports':
        return (
          <div className="reports-section">
            <h2>Student Reports</h2>
            <div className="reports-list">
              {reports.map(report => (
                <div key={report.id} className="report-card">
                  <h4>{report.student} ({report.rollNumber})</h4>
                  <p>{report.content}</p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="admin-dashboard-wrapper">
      <AdminSidebar setActiveSection={setActiveSection} />
      <div className="admin-dashboard-main-content">
        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <p>Manage student applications, reports, and hostel details.</p>
        </div>
        {renderMainContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;