import React from "react";
import { logout } from "../auth/auth";
import { useNavigate } from "react-router-dom";

const QuizPage = () => {
  const navigate = useNavigate();

  // Handle logout functionality
  const handleLogout = () => {
    logout();

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div>
      <h1 className="text-center">
        Quiz App
        <button className="small-text" onClick={handleLogout}>
          Logout
        </button>
      </h1>
    </div>
  );
};

export default QuizPage;
