// 🥁 Drum MIDI Note Values (Top-to-Bottom Layout)
export type MidiNoteValue =
  | 49 // Crash Cymbal
  | 51 // Ride Cymbal
  | 42 // Hi-Hat (Closed)
  | 48 // Rack Tom 1 (High Tom)
  | 47 // Rack Tom 2 (Mid Tom)
  | 38 // Snare Drum
  | 45 // Floor Tom
  | 36; // Bass Drum

export const midiNoteMap: Record<MidiNoteValue, string> = {
  49: "Crash Cymbal",
  51: "Ride Cymbal",
  42: "Hi-Hat (Closed)",
  48: "Rack Tom 1 (High)",
  47: "Rack Tom 2 (Mid)",
  38: "Snare Drum",
  45: "Floor Tom",
  36: "Bass Drum",
};

export const midiPositionMap: Record<MidiNoteValue, number> = {
  49: 1, // Crash Cymbal
  51: 4, // Ride Cymbal
  42: 3, // Hi-Hat (Closed)
  48: 5, // Rack Tom 1 (High Tom)
  47: 6, // Rack Tom 2 (Mid Tom)
  38: 7, // Snare Drum
  45: 9, // Floor Tom
  36: 11, // Bass Drum
};

export type VelocityValue = 127 | 100 | 64 | 30;

export const velocityLabelMap: Record<VelocityValue, string> = {
  127: "Accent",
  100: "Normal",
  64: "Ghost",
  30: "Very Soft",
};

export function getMidiPosition(note: MidiNoteValue): number {
  return midiPositionMap[note];
}

export function getMidiNoteName(note: MidiNoteValue): string {
  return midiNoteMap[note];
}

export function getVelocityLabel(velocity: VelocityValue): string {
  return velocityLabelMap[velocity];
}
