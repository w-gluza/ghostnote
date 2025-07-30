export type MidiNoteValue =
  | 36 // Bass Drum
  | 41 // Floor Tom
  | 38 // Snare Drum
  | 48 // Rack Tom
  | 42 // Hi-Hat (Closed)
  | 49 // Crash Cymbal
  | 51 // Ride Cymbal
  | 55 // Splash Cymbal
  | 52; // China Cymbal

export const midiNoteMap: Record<MidiNoteValue, string> = {
  36: "Bass Drum",
  41: "Floor Tom",
  38: "Snare Drum",
  48: "Rack Tom",
  42: "Hi-Hat (Closed)",
  49: "Crash Cymbal",
  51: "Ride Cymbal",
  55: "Splash Cymbal",
  52: "China Cymbal",
};

export const midiPositionMap: Record<MidiNoteValue, number> = {
  // 🎶 Above the top line
  49: 1, // Crash Cymbal (space above line 5)
  55: 1, // Splash Cymbal (same zone)
  52: 1, // China Cymbal

  // 🥁 Line 5 (top line)
  42: 2, // Hi-Hat (Closed)

  // 🎶 Space between lines 5 and 4
  51: 3, // Ride Cymbal

  // 🥁 Line 4
  38: 4, // Snare Drum

  // 🎶 Space between lines 4 and 3
  48: 5, // Rack Tom

  // 🥁 Line 3 (middle line)
  41: 6, // Floor Tom

  // 🎶 Space below bottom line (Line 1)
  36: 9, // Bass Drum
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
