import React from "react";

const Registration = () => {
  return (
    <div>
      <h1 className="text-center">Quiz App - Registration</h1>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="login-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
