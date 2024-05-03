import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Admin_landingPage from './Components/Admin/Admin_landingPage';
import AddFaculty from './Components/Admin/AddFaculty';
import Admin_Index from './Components/Admin/Admin_Index';
import { Navigate } from 'react-router-dom'; // Import Navigate for fallback

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        {/* <Route path="/admin_page" element={isLoggedIn ? <Admin_Index /> : <Navigate to="/" />} /> */}
        <Route path="/dashboard" element={isLoggedIn ? <Admin_landingPage /> : <Navigate to="/login" />} />
        
        <Route path="/Faculty_registration" element={isLoggedIn ? <AddFaculty /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
