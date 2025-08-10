/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState, useEffect, useMemo } from "react";
import styles from "./Quiz.module.css";
import MusicStaff from "@/app/common/MusicStaff/MusicStaff";
import PatternCard from "@/app/common/PatternCard/PatternCard";
import DrumMachine from "../drum-machine/DrumMachine";
import { generateQuiz } from "@/app/utils/generateQuiz";
import ProgressBar from "@/app/common/ProgressBar/ProgressBar";
import Score from "@/app/common/Score/Score";
import { patterns } from "../../data/patterns";

const Quiz = () => {
  // const [patterns, setPatterns] = useState([]);
  // const [loading, setLoading] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuizLevel = 3;
  // useEffect(() => {
  //   fetch("/api/patterns")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPatterns(data);
  //       setLoading(false);
  //     })
  //     .catch(() => setLoading(false));
  // }, []);

  const quizData = useMemo(() => {
    if (patterns.length === 0) return [];
    return generateQuiz({
      patterns,
      count: 5,
      difficulty: currentQuizLevel,
    });
  }, []);

  // if (loading) return <p>Loading quiz patterns...</p>;
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
      <header className={styles.header}>
        <h1 className={styles.heading}>Quiz Level {currentQuizLevel}</h1>
        <Score value={score} max={quizData.length} />
      </header>
      {!isFinished && (
        <>
          <p className={styles.instruction}>
            Listen to the pattern and select the matching music staff.
          </p>

          <div className={styles["player-container"]}>
            <DrumMachine
              pattern={correctPattern!.pattern}
              stepLength={question.stepLength}
            />
          </div>
          <ProgressBar
            percentage={25}
            labelText={`Question ${currentQuestion + 1} of ${quizData.length}`}
            labelPosition={"top-right"}
          />

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
    </div>
  );
};

export default Quiz;
