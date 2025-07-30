import type { MidiNoteValue, VelocityValue } from "@/app/utils/midiMap";

export type Pattern = Array<[MidiNoteValue, VelocityValue][]>;

export interface PatternOption {
  label: string;
  pattern: Pattern;
}
export interface QuizQuestion {
  question: string;
  options: PatternOption[];
  audioUrl: string;
  correctAnswerLabel: string;
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
  [],
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
  [],
];

const patternC: Pattern = [
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
  [
    [38, 100],
    [42, 100],
  ],
  [[42, 100]],
];

const patternD: Pattern = [
  [
    [36, 100],
    [42, 100],
  ],
  [],
  [
    [38, 100],
    [42, 100],
  ],
  [[42, 100]],
  [
    [36, 100],
    [49, 100],
  ],
  [[42, 100]],
  [[38, 100]],
  [],
];

export const quizData: QuizQuestion[] = [
  {
    question:
      "Which pattern has alternating snare and kick with constant hi-hat?",
    audioUrl: "/audio/patternA.wav",
    correctAnswerLabel: "A",
    options: [
      { label: "A", pattern: patternA },
      { label: "B", pattern: patternB },
      { label: "C", pattern: patternC },
      { label: "D", pattern: patternD },
    ],
  },
  {
    question: "Which pattern includes a crash cymbal on beat 5?",
    audioUrl: "/audio/patternD.wav",
    correctAnswerLabel: "D",
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
    audioUrl: "/audio/patternB.wav",
    correctAnswerLabel: "B",
    options: [
      { label: "A", pattern: patternA },
      { label: "B", pattern: patternB },
      { label: "C", pattern: patternC },
      { label: "D", pattern: patternD },
    ],
  },
];
