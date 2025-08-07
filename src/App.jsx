// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./frontend/Homepage.jsx";
import LoginPage from "./frontend/StudentLogin.jsx";
import AdminLogin from "./frontend/AdminLogin.jsx";
import { StudentPreferenceForm } from './frontend/StudentPreferenceForm.jsx';
import StudentDashboard from './frontend/StudentDashboard.jsx';
import AdminConfirmationPage from './frontend/AdminConfirmationPage.jsx';



const App = () => {
  return (
    // Wrap your entire application in a div with a class
    <div className="app-body">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/studentlogin" element={<LoginPage />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminrequest" element={<AdminConfirmationPage/>}/>
          <Route path="/student-preference" element={<StudentPreferenceForm/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;