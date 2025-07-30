import type { MidiNoteValue } from "./midiMap";
export type NoteType = "x" | "dot" | "svg";

export type NoteStyle = "dot" | "x" | "svg";

interface NoteVisual {
  defaultStyle: "dot" | "x"; // fallback or simplified visual
  svgIcon: string; // always defined: path to SVG
}

export const midiNoteVisualMap: Record<MidiNoteValue, NoteVisual> = {
  49: { defaultStyle: "x", svgIcon: "/icons/crash.svg" }, // Crash Cymbal
  51: { defaultStyle: "x", svgIcon: "/icons/ride.svg" }, // Ride Cymbal
  42: { defaultStyle: "x", svgIcon: "/icons/hihat.svg" }, // Hi-Hat
  48: { defaultStyle: "dot", svgIcon: "/icons/tom1.svg" }, // Rack Tom 1
  47: { defaultStyle: "dot", svgIcon: "/icons/tom2.svg" }, // Rack Tom 2
  38: { defaultStyle: "dot", svgIcon: "/icons/snare.svg" }, // Snare Drum
  45: { defaultStyle: "dot", svgIcon: "/icons/floor.svg" }, // Floor Tom
  36: { defaultStyle: "dot", svgIcon: "/icons/kick.svg" }, // Bass Drum
};

export function getNoteVisual(note: MidiNoteValue): NoteVisual {
  return midiNoteVisualMap[note];
}
