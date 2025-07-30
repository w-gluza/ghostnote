"use client";
import { useState } from "react";
import styles from "./Quiz.module.css";
import MusicStaff from "@/app/common/MusicStaff/MusicStaff";
import { quizData } from "../../data/quizPatterns";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);

  const question = quizData[currentQuestion];

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  const handleSubmit = () => {
    if (
      selectedIndex !== null &&
      question.options[selectedIndex].label === question.correctAnswerLabel
    ) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedIndex(null);
    } else {
      setIsFinished(true);
    }
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>
        Listen to the groove and select the correct pattern
      </h1>

      {/* 🎵 Insert audio player or playback trigger here */}
      <button className={styles.playButton}>🔊 Play Pattern</button>

      <div className={styles.optionsGrid}>
        {question.options.map((option, index) => (
          <div
            key={option.label}
            className={`${styles.optionCard} ${
              selectedIndex === index ? styles.selected : ""
            }`}
            onClick={() => handleSelect(index)}
          >
            <span className={styles.optionLabel}>{option.label}</span>
            <MusicStaff
              pattern={option.pattern}
              tempo={120}
              timeSignature="4/4"
            />
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className={styles.button}
        disabled={selectedIndex === null}
      >
        {currentQuestion + 1 === quizData.length ? "Finish" : "Next"}
      </button>

      {isFinished && (
        <div className={styles.result}>
          <h2>Quiz Completed!</h2>
          <p>
            Your score: {score} / {quizData.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
