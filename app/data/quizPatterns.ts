import type { MidiNoteValue, VelocityValue } from "@/app/utils/midiMap";
import type { StepLength } from "@/app/types/music";

export type Pattern = Array<[MidiNoteValue, VelocityValue][]>;

export interface PatternOption {
  label: string;
  pattern: Pattern;
}
export interface QuizQuestion {
  question: string;
  correctAnswerLabel: string;
  correctPattern: Pattern;
  options: PatternOption[];
  stepLength: StepLength;
}

const patternA: Pattern = [
  [
    [36, 100],
    [42, 100],
  ],
  [[42, 100]],
  [
    [38, 100],
    [42, 100],
  ],
  [[42, 100]],
  [
    [36, 100],
    [42, 100],
  ],
  [[42, 100]],
  [
    [38, 100],
    [42, 100],
  ],
  [[42, 100]],
];

const patternB: Pattern = [
  [
    [36, 100],
    [42, 100],
  ],
  [[42, 100]],
  [
    [36, 100],
    [42, 100],
  ],
  [[42, 100]],
  [
    [38, 100],
    [42, 100],
  ],
  [[42, 100]],
  [
    [36, 100],
    [42, 100],
  ],
  [[42, 100]],
];

const patternC: Pattern = [
  [
    [36, 100],
    [49, 100],
  ],
  [[42, 100]],
  [[42, 100]],
  [[42, 100]],
  [
    [38, 100],
    [42, 100],
  ],
  [[42, 100]],
  [
    [36, 100],
    [42, 100],
  ],
  [[42, 100]],
];

const patternD: Pattern = [
  [
    [36, 100],
    [42, 100],
  ],
  [[42, 100]],
  [
    [47, 100],
    [42, 100],
  ],
  [[42, 100]],
  [
    [45, 100],
    [42, 100],
  ],
  [[42, 100]],
  [
    [38, 100],
    [42, 100],
  ],
  [[42, 100]],
];
export const quizData: QuizQuestion[] = [
  {
    question:
      "Which pattern has alternating snare and kick with constant hi-hat?",
    correctPattern: patternA,
    correctAnswerLabel: "A",
    stepLength: 8,
    options: [
      { label: "A", pattern: patternA },
      { label: "B", pattern: patternB },
      { label: "C", pattern: patternC },
      { label: "D", pattern: patternD },
    ],
  },
  {
    question: "Which pattern includes a crash cymbal on beat 5?",
    correctPattern: patternD,
    correctAnswerLabel: "D",
    stepLength: 8,
    options: [
      { label: "A", pattern: patternA },
      { label: "B", pattern: patternB },
      { label: "C", pattern: patternC },
      { label: "D", pattern: patternD },
    ],
  },
  {
    question:
      "Which groove starts with kick + hi-hat and has rests on beats 2 and 8?",
    correctPattern: patternB,
    correctAnswerLabel: "B",
    stepLength: 8,
    options: [
      { label: "A", pattern: patternA },
      { label: "B", pattern: patternB },
      { label: "C", pattern: patternC },
      { label: "D", pattern: patternD },
    ],
  },
];
