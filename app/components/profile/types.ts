export interface ProfileData {
  name: string;
  handle: string;
  location: string;
  lastPlayed: string;
  streak: number;
  streakMax: number;
  scoreValue: number;
  scoreMax: number;
  progressPct: number;
  skill: string;
}

export interface ActivityItem {
  id: string | number;
  title: string;
  meta?: string;
  time: string;
  type?: "quiz" | "practice";
  href?: string;
}
