import React from "react";
import Question from "../components/Question";

const QuizPage = () => {
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

      <Question />
    </div>
  );
};

export default QuizPage;
