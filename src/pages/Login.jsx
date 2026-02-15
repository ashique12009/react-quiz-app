import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1 className="text-center">Quiz App - Login</h1>
      <form className="login-form">
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
