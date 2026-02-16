import React from "react";
import useQuestion from "../hooks/questionHooks";

const Question = () => {
  const { questions, fetchQuestions } = useQuestion();

  console.log("Fetched questions:", questions);

  return (
    <div>
      <div className="quiz-content mt10">

        {questions.map((question) => (
          <div key={question.id} className="question-text">
            <h2>{question.question}</h2>
            <div className="question-info mt10">
              <span>Question {question.id} of {questions.length}</span>
              <span>Score: 0</span>
            </div>
            <div className="answer-container mt10">
              {question.options.map((option, index) => (
                <button key={index} className="answer-button">
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}

        <div className="progressbar"></div>
      </div>
    </div>
  );
};

export default Question;
