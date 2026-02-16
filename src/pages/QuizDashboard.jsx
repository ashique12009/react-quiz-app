import React from "react";
import { logout } from "../auth/auth";
import { useNavigate } from "react-router-dom";

const QuizDashboard = () => {
  const navigate = useNavigate();

  // Handle logout functionality
  const handleLogout = () => {
    logout();

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div>
      <header className="quiz-header">
        <h1 className="text-center">
          Quiz App
        </h1>
        <button className="small-text small-0border-button" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <div className="quiz-content mt10">
        
        <div className="question-text">
          <h2>Question 1: What is the capital of France?</h2>
          <div className="question-info mt10">
            <span>Question 1 of 5</span>
            <span>Score: 0</span>
          </div>
        </div>

        <div className="answer-container">

        </div>
      </div>
    </div>
  );
};

export default QuizDashboard;
