"use client";
import { useState, useEffect, useMemo } from "react";
import styles from "./Quiz.module.css";
import MusicStaff from "@/app/common/MusicStaff/MusicStaff";
import PatternCard from "@/app/common/PatternCard/PatternCard";
import DrumMachine from "../drum-machine/DrumMachine";
import { generateQuiz } from "@/app/utils/generateQuiz";

const Quiz = () => {
  const [patterns, setPatterns] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    fetch("/api/patterns")
      .then((res) => res.json())
      .then((data) => {
        setPatterns(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const quizData = useMemo(() => {
    if (patterns.length === 0) return [];
    return generateQuiz({
      patterns,
      count: 5,
      difficulty: 2,
    });
  }, [patterns]);

  if (loading) return <p>Loading quiz patterns...</p>;
  if (!quizData.length) return <p>No quiz data available.</p>;

  const question = quizData[currentQuestion];
  const correctPattern = question.options.find(
    (p) => p.id === question.correctPatternId
  );

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  const handleSubmit = () => {
    if (
      selectedIndex !== null &&
      question.options[selectedIndex].id === question.correctPatternId
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
              pattern={correctPattern!.pattern}
              stepLength={question.stepLength}
            />
          </div>

          <div className={styles.grid}>
            {question.options.map((option, index) => (
              <PatternCard
                key={option.id}
                label={option.name}
                selected={selectedIndex === index}
                onSelect={() => handleSelect(index)}
              >
                <MusicStaff
                  pattern={option.pattern}
                  tempo={120}
                  timeSignature={[4, 4]}
                  label={option.name}
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
