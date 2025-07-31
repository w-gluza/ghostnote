import type { MidiNoteValue, VelocityValue } from "./midiMap";
import * as Tone from "tone";

/**
 * Converts a MIDI note number to a Tone.js-compatible note name (e.g., "D1").
 * @param midi - The MIDI note number (e.g., 36 for kick)
 * @returns A musical note name string like "C1", "D#2", etc.
 */
export const midiToNote = (midi: MidiNoteValue): string =>
  Tone.Frequency(midi, "midi").toNote();

/**
 * Converts MIDI velocity (0–127) to normalized gain (0.0–1.0).
 */
export const velocityToGain = (velocity: VelocityValue): number =>
  Math.min(1, Math.max(0, velocity / 127));
