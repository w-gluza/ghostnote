export type ActivityInterface = {
  id?: string;
  userId?: string;
  type: "QUIZ" | "PRACTICE";
  occurredAt: string;
  topic?: string;
  durationSeconds?: number;
  scoreCorrect?: number;
  scoreTotal?: number;
  strikes?: number;
};

export type UserInterface = {
  id?: string; // optional because Prisma can auto-generate with @default(uuid())
  email: string;
  handle: string;
  name: string;
  location: string;
  lastPlayedAt?: Date | null;
  lastPlayedText?: string | null;
  streak?: number;
  streakMax?: number;
  scoreValue?: number;
  scoreMax?: number;
  progressPct?: number;
  skill: string;
  createdAt?: Date;
  updatedAt?: Date;
};
