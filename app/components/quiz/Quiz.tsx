"use client";
import { useState } from "react";
import styles from "./Quiz.module.css";
import MusicStaff from "@/app/common/MusicStaff/MusicStaff";
import { quizData } from "@/app/data/quizPatterns";
import PatternCard from "@/app/common/PatternCard/PatternCard";
import DrumMachine from "../drum-machine/DrumMachine";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const question = quizData[currentQuestion];

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  const handleSubmit = () => {
    if (
      selectedIndex !== null &&
      question.options[selectedIndex].label === question.correctAnswerLabel
    ) {
      setScore((s) => s + 1);
    }

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion((q) => q + 1);
      setSelectedIndex(null);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>🎵 Groove Recognition Quiz</h1>

      {!isFinished && (
        <>
          <p className={styles.instruction}>
            Listen to the pattern and select the matching visual.
          </p>

          <p className={styles.instruction}>
            Question {currentQuestion + 1} of {quizData.length}
          </p>

          <div className={styles["player-container"]}>
            <DrumMachine
              pattern={question.correctPattern}
              stepLength={question.stepLength}
            />
          </div>

          <h2 className={styles.question}>{question.question}</h2>

          <div className={styles.grid}>
            {question.options.map((option, index) => (
              <PatternCard
                key={option.label}
                label={option.label}
                selected={selectedIndex === index}
                onSelect={() => handleSelect(index)}
              >
                <MusicStaff
                  pattern={option.pattern}
                  tempo={120}
                  timeSignature={[4, 4]}
                  label={option.label}
                />
              </PatternCard>
            ))}
          </div>

          <button
            onClick={handleSubmit}
            className={styles.submit}
            disabled={selectedIndex === null}
          >
            {currentQuestion + 1 === quizData.length ? "Finish Quiz" : "Next"}
          </button>
        </>
      )}

      {isFinished && (
        <div className={styles.result}>
          <h2>🎉 Quiz Completed!</h2>
          <p>
            You scored <strong>{score}</strong> out of{" "}
            <strong>{quizData.length}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
