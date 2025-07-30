/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from "react";
import styles from "./Quiz.module.css";
import PatternCard from "@/app/common/PatternCard/PatternCard";
import type { MidiNoteValue, VelocityValue } from "@/app/utils/midiMap";
import MusicStaff from "@/app/common/MusicStaff/MusicStaff";

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

  const pattern: Array<[MidiNoteValue, VelocityValue][]> = [
    [
      [36, 30],
      [42, 100],
    ],
    [[42, 100]],
    [
      [38, 100],
      [42, 100],
    ],
    [[42, 100]],

    [
      [42, 100],
      [36, 100],
    ],
    [[42, 100]],
    [
      [38, 100],
      [42, 100],
    ],

    [[42, 100]],
  ];

  return (
    <div className={styles.container}>
      <MusicStaff pattern={pattern} tempo={120} timeSignature="4/4" />
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
