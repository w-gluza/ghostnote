import React from "react";
import styles from "./Note.module.css";

interface NoteProps {
  row: number; // grid row to start at (1-based)
  column?: number | string;
  velocity: number;
}

const Note: React.FC<NoteProps> = ({ row, column = 1, velocity }) => (
  <div
    className={styles.note}
    style={{
      gridRow: `${row} / span 2`,
      gridColumn: column,
      opacity: velocity && velocity < 64 ? 0.4 : 1,
    }}
  />
);

export default Note;
