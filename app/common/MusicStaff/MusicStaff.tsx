import React from "react";
import styles from "./MusicStaff.module.css";
import Note from "../Note/Note";
import { midiPositionMap } from "../../utils/midiMap"; // adjust path as needed

const MusicStaff = () => (
  <div className={styles.staff}>
    {/* Staff lines */}
    <div className={styles.line} />
    <div className={styles.line} />
    <div className={styles.line} />
    <div className={styles.line} />
    <div className={styles.line} />
    {/* Test notes */}
    <Note row={midiPositionMap[36]} column={1} /> {/* Bass Drum */}
    <Note row={midiPositionMap[45]} column={2} /> {/* Floor Tom */}
    <Note row={midiPositionMap[48]} column={4} /> {/* Rack Tom 1 (High) */}
    <Note row={midiPositionMap[47]} column={5} /> {/* Rack Tom 2 (Mid) */}
    <Note row={midiPositionMap[38]} column={6} /> {/* Snare */}
    <Note row={midiPositionMap[51]} column={10} /> {/* Ride */}
    <Note row={midiPositionMap[42]} column={12} /> {/* Hi-Hat */}
    <Note row={midiPositionMap[49]} column={14} /> {/* Crash */}
  </div>
);

export default MusicStaff;
