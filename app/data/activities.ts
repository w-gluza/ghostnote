import type { ActivityInterface } from "../types/user.ts";

export const activities: ActivityInterface[] = [
  // Matches your examples, but now real timestamps
  {
    type: "QUIZ",
    occurredAt: "2025-08-13T13:20:00Z",
    scoreCorrect: 8,
    scoreTotal: 10,
    strikes: 1,
    topic: "Interval recognition",
  },
  {
    type: "PRACTICE",
    occurredAt: "2025-08-12T18:05:00Z",
    durationSeconds: 12 * 60,
    topic: "Interval recognition",
  },
  {
    type: "QUIZ",
    occurredAt: "2025-08-11T20:12:00Z",
    scoreCorrect: 7,
    scoreTotal: 10,
    strikes: 2,
    topic: "Interval recognition",
  },
];
