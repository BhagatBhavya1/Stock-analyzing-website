import React, { useState } from "react";
import { Helmet } from "react-helmet";
import './App.css';
import Home_Page from "./Home_Page";

 const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Static email and password for demonstration purposes
    const staticEmail = 'user@gmail.com';
    const staticPassword = 'password';

    if (email === staticEmail && password === staticPassword) {
      setLoggedIn(true);
    } else {
      alert('Invalid email or password');
    }
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="App">
      {loggedIn ? (
        <Home_Page />
      ) : (
    
    <div className="box">
    
    
      <Helmet>
        <meta charSet="utf-8" /> 
        <title>Kizan Universal</title>
        <link rel="canonical" href="http://localhost:3000/" />
      </Helmet>
      <div className="login-wrapper">
        <div className="login">
          <div className="overlap">
            <h1 className="text-wrapper">Kizan Universal</h1>
            <div className="rectangle" />
            {/* <img className="trading-app-logo" alt="Trading app logo" src="https://cdn.dribbble.com/users/27903/screenshots/5370954/v.png" /> */}
          </div>
          <div className="overlap-group">
            <div className="ellipse" />
            <div className="welcome-again-lets">
              Welcome Again
              <br />
              Lets get started...
            </div>
          </div>
          <div className="div" />
          <div className="ellipse-2" />
          <div className="ellipse-3" />
          <div className="ellipse-4" />
          <div className="text-wrapper-2">Login</div>
          <div className="text-wrapper-3">
            Email
            <div className="email-box">
              <input
                type="email"
                className="email-input"
                placeholder="enter email"
                value={email}
                onChange={handleChangeEmail}
              />
            </div>
          </div>
          <div className="text-wrapper-4">
            Password
            <div className="password-box">
              <input
                type="password"
                className="password-input"
                placeholder="Your password"
                value={password}
                onChange={handleChangePassword}
              />
            </div>
            <div className="loginbut">
              <button className="login-button" onClick={handleLogin}>
                Login 
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
      )}
    </div>
  );
};


export default App;