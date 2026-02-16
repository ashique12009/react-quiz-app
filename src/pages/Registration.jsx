import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../hooks/userHooks";
import { hashPassword } from "../utils/hash";

const Registration = () => {
  const { registerUser } = useUser();

  const navigate = useNavigate();

  // Handle form submission (you can replace this with actual registration logic)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    const hashedPassword = hashPassword(password);

    registerUser({ name, email, password: hashedPassword });

    // Navigate to the login page after successful registration
    navigate("/login");

    // Reset the form after submission
    // e.target.reset();
  };

  return (
    <div>
      <h1 className="text-center">Quiz App - Registration</h1>
      <form className="login-form" onSubmit={handleSubmit}>
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
        <Link to="/login" className="register-link">
          Already have an account? Login
        </Link>
      </form>
    </div>
  );
};

export default Registration;
