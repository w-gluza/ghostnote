import React from "react";
import styles from "./Note.module.css";

interface NoteProps {
  row: number; // grid row to start at (1-based)
  column?: number | string; // optional: grid column (default = center)
}

const Note: React.FC<NoteProps> = ({ row, column = 1 }) => (
  <div
    className={styles.note}
    style={{
      gridRow: `${row} / span 2`,
      gridColumn: column,
    }}
  />
);

export default Note;
