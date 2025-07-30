import React from "react";
import styles from "./MusicStaff.module.css";
import Note from "../Note/Note";

const MusicStaff = () => (
  <div className={styles.staff}>
    <div className={styles.line} />
    <div className={styles.line} />
    <div className={styles.line} />
    <div className={styles.line} />
    <div className={styles.line} />
    <Note row={2} column={3} />
  </div>
);

export default MusicStaff;
