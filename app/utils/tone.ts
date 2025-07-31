import type { VelocityValue } from "./midiMap";

/**
 * Converts MIDI velocity (0–127) to normalized gain (0.0–1.0).
 */
export const velocityToGain = (velocity: VelocityValue): number =>
  Math.min(1, Math.max(0, velocity / 127));
