// Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../Stylesheet/login.css';
import { useNavigate } from 'react-router-dom';

function Login({ setIsLoggedIn }) {
  const [isLoginSelected, setIsLoginSelected] = useState(true);
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const navigate = useNavigate(); // Using useNavigate for programmatic navigation

  const adminLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:2526/admin', {
        admin_username: adminUsername,
        admin_password: adminPassword
      });
      if (response.status === 200) {
        setIsLoggedIn(true); // Set isLoggedIn to true upon successful login
        navigate('/dashboard'); // Navigate to admin page upon successful login
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      if (error.response.status === 401) {
        alert("Invalid username or password");
      } else {
        console.error('Error logging in:', error);
      }
    }
  };
  
  const facultyLogin = (event) => {
    event.preventDefault();
    console.log('Faculty form submitted');
    // Add faculty login functionality
  };

  const handleRadioChange = (event) => {
    setIsLoginSelected(event.target.id === 'login');
  };

  return (
    <div className="main-container">
      <div className="wrapper"> 
        <div className="title-text">
          <div className={`title ${isLoginSelected ? 'admin' : 'faculty'}`}>
            {isLoginSelected ? 'Admin' : 'Faculty'}
          </div>
        </div>
        <div className="form-container">
          <div className="slide-controls">
            <input type="radio" name="slide" id="login" defaultChecked={isLoginSelected} onChange={handleRadioChange} />
            <input type="radio" name="slide" id="signup" defaultChecked={!isLoginSelected} onChange={handleRadioChange} />
            <label htmlFor="login" className={`slide login ${isLoginSelected ? 'active' : ''}`}>Admin</label>
            <label htmlFor="signup" className={`slide signup ${!isLoginSelected ? 'active' : ''}`}>Faculty</label>
            <div className={`slider-tab ${!isLoginSelected ? 'faculty' : ''}`}></div>
          </div>

          <div className="form-inner">
            {isLoginSelected ? (
              <form onSubmit={adminLogin} className="login">
                <div className="field">
                  <input type="text" placeholder="Username" value={adminUsername} onChange={(e) => setAdminUsername(e.target.value)} required />
                </div>
                <div className="field">
                  <input type="password" placeholder="Password" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} required />
                </div>
                <div className="pass-link"><a href="#">Forgot password?</a></div>
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input type="submit" value="Login" />
                </div>
                <div className="signup-link">Developed by <span className="name-span">@johnmaur8</span></div>
              </form>
            ) : (
              <form onSubmit={facultyLogin} className="signup">
                <div className="field">
                  <input type="text" placeholder="Username" required />
                </div>
                <div className="field">
                  <input type="password" placeholder="Password" required />
                </div>
                <div className="pass-link"><a href="#">Forgot password?</a></div>
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input type="submit" value="Login" />
                </div>
                <div className="signup-link">Developed by <span className="name-span">@johnmaur8</span></div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
