"use client";

import { useEffect, useState } from "react";
import styles from "./QuizPage.module.css";

type Quiz = {
  id: string;
  audioUrl: string;
  options: string[];
  correct: number;
};

export default function QuizPage() {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [selected, setSelected] = useState<number | null>(null);

  const fetchQuiz = async () => {
    const res = await fetch("/api/quiz");
    const data = await res.json();
    setQuiz(data);
    setSelected(null);
  };

  useEffect(() => {
    fetchQuiz();
  }, []);

  if (!quiz) return <p className={styles.loading}>Loading...</p>;

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>🎧 Guess the Groove</h1>
      <audio
        controls
        src={quiz.audioUrl}
        className={styles.audio}
        aria-label="Audio clip for groove guessing"
      />

      <div className={styles.options}>
        {quiz.options.map((option, i) => {
          const isCorrect = selected !== null && i === quiz.correct;
          const isWrong = selected === i && i !== quiz.correct;

          return (
            <button
              key={i}
              disabled={selected !== null}
              className={`${styles.option} 
                ${isCorrect ? styles.correct : ""}
                ${isWrong ? styles.wrong : ""}
                ${
                  selected !== null && !isCorrect && !isWrong
                    ? styles.disabled
                    : ""
                }
              `}
              onClick={() => setSelected(i)}
            >
              {option}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div className={styles.feedback}>
          <p className={styles.feedbackText}>
            {selected === quiz.correct ? "✅ Correct!" : "❌ Nope"}
          </p>
          <button onClick={fetchQuiz} className={styles.tryAnother}>
            Try Another
          </button>
        </div>
      )}
    </main>
  );
}
