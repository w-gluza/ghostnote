// 🥁 MIDI Drum Note Definitions and Mappings

/**
 * Represents allowed General MIDI percussion note values
 * Ordered top-to-bottom as they appear on the staff (visual layout).
 */
export type MidiNoteValue =
  | 49 // Crash Cymbal
  | 51 // Ride Cymbal
  | 42 // Hi-Hat (Closed)
  | 48 // Rack Tom 1 (High Tom)
  | 47 // Rack Tom 2 (Mid Tom)
  | 38 // Snare Drum
  | 45 // Floor Tom
  | 36; // Bass Drum

/**
 * Human-readable names for each MIDI note.
 */
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

/**
 * Vertical positioning of each note on the staff (CSS grid row)
 * Lower numbers are higher on the staff.
 */
export const midiPositionMap: Record<MidiNoteValue, number> = {
  49: 1, // Crash Cymbal
  51: 4, // Ride Cymbal
  42: 3, // Hi-Hat
  48: 5, // Rack Tom 1
  47: 6, // Rack Tom 2
  38: 7, // Snare
  45: 9, // Floor Tom
  36: 11, // Bass Drum
};

/**
 * Supported velocity values (dynamics) and their labels.
 */
export type VelocityValue = 127 | 100 | 64 | 30;

export const velocityLabelMap: Record<VelocityValue, string> = {
  127: "Accent", // Very loud hit
  100: "Normal", // Default hit
  64: "Ghost", // Soft, subtle hit
  30: "Very Soft", // Extremely light touch
};

/**
 * Returns the staff position for a given MIDI note.
 */
export function getMidiPosition(note: MidiNoteValue): number {
  return midiPositionMap[note];
}

/**
 * Returns the name of a given MIDI note (e.g., "Snare Drum").
 */
export function getMidiNoteName(note: MidiNoteValue): string {
  return midiNoteMap[note];
}

/**
 * Returns the dynamic label for a given velocity value.
 */
export function getVelocityLabel(velocity: VelocityValue): string {
  return velocityLabelMap[velocity];
}
