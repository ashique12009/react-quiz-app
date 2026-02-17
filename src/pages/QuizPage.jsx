import React, { useState } from "react";
import useQuestion from "../hooks/questionHooks";
import Question from "../components/Question";

const QuizPage = () => {
  const { questions } = useQuestion();
  console.log("Fetched questions:", questions);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Handle logout functionality
  const handleLogout = () => {
    logout();

    // Redirect to login page
    navigate("/login");
  };

  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];

    console.log("Selected answer:", selectedAnswer);
    console.log("Correct answer:", currentQuestion.answer);

    // Check if the selected answer is correct
    if (selectedAnswer === currentQuestion.answer) {
      setScore(score + 1);
    }
  };

  if (!questions.length) {
    return <div className="text-center">Please wait while questions are loading.</div>;
  }

  if (isFinished) {
    return (
      <div className="text-center">
        <h2>Quiz Finished!</h2>
        <p>Your score: {score} out of {questions.length}</p>
      </div>
    );
  }

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

      <Question
        question={questions[currentQuestionIndex]} 
        onAnswer={handleAnswer} 
        totalQuestions={questions.length}
      />
    </div>
  );
};

export default QuizPage;
