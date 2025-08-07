// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ setActiveSection }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Dashboard</h2>
      </div>
      <ul className="sidebar-nav">
        <li>
          <button onClick={() => setActiveSection('overview')}>
            My Overview
          </button>
        </li>
        <li>
          <button onClick={() => setActiveSection('details')}>
            Hostel & Admin Details
          </button>
        </li>
        {/* New "Report" option in the sidebar */}
        <li>
          <button onClick={() => setActiveSection('report')}>
            Report an issue
          </button>
        </li>
        <li>
          <Link to="/student-preference">
            Apply for Room/Hostel Change
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;