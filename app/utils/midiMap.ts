export type MidiNoteValue =
  | 36 // Bass Drum
  | 38 // Snare Drum
  | 41 // Floor Tom
  | 45 // Tom 2 (Low Tom)
  | 48 // Tom 1 (High Tom)
  | 42 // Hi-Hat (Closed)
  | 49 // Crash Cymbal
  | 51; // Ride Cymbal

export const midiNoteMap: Record<MidiNoteValue, string> = {
  36: "Bass Drum",
  38: "Snare Drum",
  41: "Floor Tom",
  45: "Tom 2 (Low Rack Tom)",
  48: "Tom 1 (High Rack Tom)",
  42: "Hi-Hat (Closed)",
  49: "Crash Cymbal",
  51: "Ride Cymbal",
};

export const midiPositionMap: Record<MidiNoteValue, number> = {
  36: 9, // Bass Drum
  38: 5, // Snare Drum
  41: 7, // Floor Tom
  45: 4, // Tom 2
  48: 3, // Tom 1
  42: 1, // Hi-Hat
  49: 1, // Crash Cymbal (same row as Hi-Hat for now)
  51: 2, // Ride Cymbal
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
