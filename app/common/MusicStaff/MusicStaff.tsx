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
    <Note row={midiPositionMap[36]} column={2} /> {/* Bass Drum */}
    <Note row={midiPositionMap[41]} column={4} /> {/* Floor Tom 3 */}
    <Note row={midiPositionMap[38]} column={6} /> {/* Snare */}
    <Note row={midiPositionMap[45]} column={8} /> {/* Rack Tom 2 */}
    <Note row={midiPositionMap[48]} column={10} /> {/* Rack Tom 1 */}
    <Note row={midiPositionMap[42]} column={14} /> {/* Hi Hat */}
    <Note row={midiPositionMap[51]} column={16} /> {/* Ride */}
  </div>
);

export default MusicStaff;
