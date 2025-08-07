// src/components/AdminSidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css'; // Reuse the main dashboard CSS for sidebar styles

const AdminSidebar = ({ setActiveSection }) => {
  return (
    <div className="admin-sidebar">
      <div className="sidebar-header">
        <h2>Admin Panel</h2>
      </div>
      <ul className="sidebar-nav">
        <li>
          <button onClick={() => setActiveSection('overview')}>
            Dashboard
          </button>
        </li>
        <li>
          <button onClick={() => setActiveSection('applications')}>
            Student Requests
          </button>
        </li>
        <li>
          <button onClick={() => setActiveSection('reports')}>
            Student Reports
          </button>
        </li>
        <li>
          <Link to="/">
            Log Out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;