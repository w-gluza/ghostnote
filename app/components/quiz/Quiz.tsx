"use client";
import { useEffect, useMemo, useState } from "react";
import styles from "./Quiz.module.css";
import DrumMachine from "./components/drum-machine/DrumMachine";
import { useQuiz } from "./hooks/useQuiz";
import {
  Button,
  Heading,
  MusicStaff,
  PatternCard,
  ProgressBar,
  Score,
} from "@/app/common";

// Dummy placeholder until a real API call is wired
async function submitQuiz({
  score,
  quizLevel,
}: {
  score: number;
  quizLevel: number;
}) {
  console.log("Submitting quiz results", { score, quizLevel });
  // Simulate a network request
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

const Quiz = ({ level = 3, count = 5 }: { level?: number; count?: number }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const {
    quiz,
    error: quizError,
    isLoading: quizLoading,
    refresh,
  } = useQuiz({ level, count });

  useEffect(() => {
    setCurrentQuestion(0);
    setSelectedIndex(null);
    setScore(0);
    setIsFinished(false);
  }, [quiz]);

  const total = quiz.length;
  const question = useMemo(
    () => quiz[currentQuestion],
    [quiz, currentQuestion]
  );
  const correctPattern = useMemo(
    () => question?.options.find((p) => p.id === question.correctPatternId),
    [question]
  );

  const percentage = useMemo(() => {
    if (!total) return 0;
    const answered = isFinished ? total : currentQuestion;
    return Math.round((answered / total) * 100);
  }, [currentQuestion, isFinished, total]);

  if (quizLoading) return <p>Loading quiz patterns...</p>;
  if (quizError) return <p role="alert">Failed to load quiz data.</p>;
  if (!total) return <p>No quiz data available.</p>;

  const handleSelect = (index: number) => setSelectedIndex(index);

  const handleSubmit = async () => {
    if (!question || selectedIndex === null) return;

    const isCorrect =
      question.options[selectedIndex].id === question.correctPatternId;
    if (isCorrect) setScore((s) => s + 1);

    const nextIndex = currentQuestion + 1;
    if (nextIndex < total) {
      setCurrentQuestion(nextIndex);
      setSelectedIndex(null);
    } else {
      setIsFinished(true);
      await submitQuiz({
        score: isCorrect ? score + 1 : score,
        quizLevel: level,
      });
    }
  };

  const handleRetry = async () => {
    await refresh();
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Heading level={1}>
          {!isFinished ? `Quiz Level ${level}` : `Results`}
        </Heading>
        <Score value={score} max={total} />
      </header>

      {!isFinished ? (
        <p className={styles.instruction}>
          Listen to the pattern and select the matching music staff.
        </p>
      ) : (
        <p className={styles.instruction}>
          You scored <strong>{score}</strong> out of <strong>{total}</strong>.
        </p>
      )}

      {!isFinished ? (
        <>
          <div className={styles["player-container"]}>
            {correctPattern && (
              <DrumMachine
                pattern={correctPattern.pattern}
                stepLength={question.stepLength}
              />
            )}
          </div>
          <ProgressBar
            percentage={percentage}
            labelText={`Question ${currentQuestion + 1} of ${total}`}
            labelPosition={"top-right"}
          />
          <div className={styles.grid}>
            {question.options.map((option, index) => (
              <PatternCard
                key={option.id}
                label={option.name}
                selected={selectedIndex === index}
                onSelect={() => handleSelect(index)}
                aria-label={`Select ${option.name}`}
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
          <Button
            onClick={handleSubmit}
            disabled={selectedIndex === null}
            aria-disabled={selectedIndex === null}
            variant="secondary"
          >
            {currentQuestion + 1 === total ? "Finish Quiz" : "Next"}
          </Button>
        </>
      ) : (
        <section className={styles.result}>
          <ProgressBar
            percentage={100}
            labelText={`Completed ${total} questions`}
            labelPosition={"top-right"}
          />
          <div className={styles.actions}>
            <Button onClick={handleRetry}>Try Again</Button>
          </div>
        </section>
      )}
    </div>
  );
};

export default Quiz;
