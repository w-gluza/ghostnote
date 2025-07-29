"use client";
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from "react";
import styles from "./Quiz.module.css";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const quizData: Question[] = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    correctAnswer: "Mars",
  },
  {
    question: 'Who wrote "To Kill a Mockingbird"?',
    options: ["Harper Lee", "Jane Austen", "Mark Twain", "Ernest Hemingway"],
    correctAnswer: "Harper Lee",
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const question = quizData[currentQuestion];

  const handleSubmit = () => {
    if (selectedOption === question.correctAnswer) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Quiz</h1>

      {isFinished ? (
        <div className={styles.result}>
          <h2>Quiz Completed!</h2>
          <p>
            Your score: {score} / {quizData.length}
          </p>
        </div>
      ) : (
        <div>
          <h2 className={styles.question}>{question.question}</h2>
          <ul className={styles.options}>
            {question.options.map((opt, index) => {
              const inputId = `q${currentQuestion}-opt${index}`;
              return (
                <li key={opt} className={styles.option}>
                  <input
                    type="radio"
                    id={inputId}
                    name={`question-${currentQuestion}`}
                    value={opt}
                    checked={selectedOption === opt}
                    onChange={() => setSelectedOption(opt)}
                  />
                  <label htmlFor={inputId}>{opt}</label>
                </li>
              );
            })}
          </ul>

          <button
            className={styles.button}
            onClick={handleSubmit}
            disabled={!selectedOption}
          >
            {currentQuestion + 1 === quizData.length ? "Finish" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
