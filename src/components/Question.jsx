import React from "react";

const Question = ({ onAnswer, question, totalQuestions }) => {

  if (!question) {
    return null;
  }

  return (
    <div>
      <div className="quiz-content mt10">
        <div key={question.id} className="question-text">
          <h2>{question.questionText}</h2>
          <div className="question-info mt10">
            <span>
              Question {question.id} of {totalQuestions}
            </span>
            <span>Score: 0</span>
          </div>
          <div className="answer-container mt10">
            {question.options.map((option, index) => (
              <button
                key={index}
                className="answer-button"
                onClick={() => {
                  onAnswer(option);
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="progressbar"></div>
      </div>
    </div>
  );
};

export default Question;
