import type { QuizQuestion } from "@/app/types/patterns";
import { patterns } from "@/app/data/patterns";

export const quizData: QuizQuestion[] = [
  {
    correctPatternId: patterns[0].id, // Disco Beat
    stepLength: 8,
    options: [patterns[0], patterns[1], patterns[2], patterns[3]],
  },
  {
    correctPatternId: patterns[3].id, // Jazz Swing
    stepLength: 8,
    options: [patterns[0], patterns[1], patterns[2], patterns[3]],
  },
  {
    correctPatternId: patterns[1].id, // Funk Shuffle
    stepLength: 8,
    options: [patterns[0], patterns[1], patterns[2], patterns[3]],
  },
];
