import React from "react";

const Login = () => {
  return (
    <div>
      <h1 className="text-center">Quiz App - Login</h1>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
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
          <a href="#" className="register-link">
            Don't have an account? Register
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
