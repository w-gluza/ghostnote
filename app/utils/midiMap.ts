export type MidiNoteValue =
  | 36 // Bass Drum
  | 38 // Snare Drum
  | 41 // Floor Tom
  | 45 // Tom 2 (Low Tom)
  | 48 // Tom 1 (High Tom / Rack Tom)
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

export const midiPositionMap: Record<number, number> = {
  // Crash cymbal
  49: 1,

  // Closed Hi-Hat
  42: 1,

  // Ride cymbal
  51: 2,

  // Snare Drum
  38: 5,

  // Rack Tom 1
  48: 3,

  // Rack Tom 2
  45: 4,

  // Floor Tom 3
  41: 7,

  // Bass Drum (Kick): Bottom space below staff
  36: 9,
};

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

export type VelocityValue = 127 | 100 | 64 | 30;

export function getVelocityLabel(velocity: VelocityValue): string {
  return velocityLabelMap[velocity];
}
