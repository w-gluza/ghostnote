"use client";
import { useState } from "react";
import styles from "./Quiz.module.css";
import DrumMachine from "./components/drum-machine/DrumMachine";
import { useQuiz } from "./hooks/useQuiz";
import {
  Heading,
  MusicStaff,
  PatternCard,
  ProgressBar,
  Score,
} from "@/app/common";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuizLevel = 3;
  const {
    quiz,
    error: quizError,
    isLoading: quizLoading,
  } = useQuiz({
    level: currentQuizLevel,
    count: 5,
  });

  if (quizLoading) return <p>Loading quiz patterns...</p>;
  if (!quiz.length || quizError) return <p>No quiz data available.</p>;

  const question = quiz[currentQuestion];
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
    if (currentQuestion + 1 < quiz.length) {
      setCurrentQuestion((q) => q + 1);
      setSelectedIndex(null);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Heading level={1} className={styles.subheading}>
          Quiz Level {currentQuizLevel}
        </Heading>
        <Score value={score} max={quiz.length} />
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
            labelText={`Question ${currentQuestion + 1} of ${quiz.length}`}
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
            {currentQuestion + 1 === quiz.length ? "Finish Quiz" : "Next"}
          </button>
        </>
      )}
    </div>
  );
};

export default Quiz;
