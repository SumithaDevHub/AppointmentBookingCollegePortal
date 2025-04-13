import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import StudentLogin from "./pages/Login";  // Assuming this is the student login page
import StaffLogin from "./pages/StaffLogin"; // Assuming this is the staff login page
import AdminLogin from "./pages/AdminLogin"; // Import AdminLogin

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/staff-login" element={<StaffLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} /> 
      </Routes>
    </Router>
  );
};

export default App;
