import React from "react";
import styles from "./Note.module.css";
import { MidiNoteValue } from "@/app/utils/midiMap";
import { getNoteVisual } from "../../utils/midiNoteRepresentation";
import Image from "next/image";

interface NoteProps {
  row: number;
  column?: number | string;
  velocity: number;
  midi: MidiNoteValue;
  visualMode?: "svg" | "simplified";
}

const Note: React.FC<NoteProps> = ({
  row,
  column = 1,
  velocity,
  midi,
  visualMode = "simplified",
}) => {
  const { defaultStyle, svgIcon } = getNoteVisual(midi);
  const style = visualMode === "svg" ? "svg" : defaultStyle;

  return (
    <div
      className={`${styles.note} ${styles[style]}`}
      style={{
        gridRow: `${row} / span 2`,
        gridColumn: column,
      }}
    >
      {style === "svg" && (
        <Image src={svgIcon} alt="" fill className={styles.icon} priority />
      )}
    </div>
  );
};

export default Note;
