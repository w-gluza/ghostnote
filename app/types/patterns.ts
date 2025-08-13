import type { MidiNoteValue, VelocityValue } from "@/app/utils/midiMap";
export type StepLength = 4 | 8 | 16 | 32;
export type Pattern = Array<[MidiNoteValue, VelocityValue][]>;

export interface PatternInterface {
  id: number;
  name: string;
  bpm: number;
  stepLength: StepLength;
  difficulty: number; // 1–10
  pattern: Pattern;
  description?: string;
  tags?: string[];
}

export interface QuizQuestion {
  correctPatternId: number;
  options: PatternInterface[];
  stepLength: StepLength;
}
