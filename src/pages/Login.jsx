import React from "react";
import { Link } from "react-router-dom";
import useUser from "../hooks/userHooks";

const Login = () => {

  const handleLogin = (e) => {
    e.preventDefault();
    // Collect email and password from the form
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }
    // Here you would typically call an API to authenticate the user

  };

  return (
    <div>
      <h1 className="text-center">Quiz App - Login</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        <div className="additional-links">
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
          <Link to="/register" className="register-link">
            Don't have an account? Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
