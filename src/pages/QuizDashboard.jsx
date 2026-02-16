import React from "react";
import { logout } from "../auth/auth";
import { useNavigate } from "react-router-dom";
import Question from "../components/Question";

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
        <h1 className="text-center">Quiz App</h1>
        <button
          className="small-text small-0border-button"
          onClick={handleLogout}
        >
          Logout
        </button>
      </header>

      <div className="quiz-welcome-text mt10">
        <p className="text-center">Test your knowledge with these quizzes!</p>
        <button className="primary-button">Start Quiz</button>
      </div>

      {/* <Question /> */}

    </div>
  );
};

export default QuizDashboard;
