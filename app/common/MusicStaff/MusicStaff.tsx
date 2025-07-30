import React from "react";
import styles from "./MusicStaff.module.css";
import Note from "../Note/Note";
import {
  midiPositionMap,
  MidiNoteValue,
  VelocityValue,
} from "../../utils/midiMap";

interface MusicStaffProps {
  pattern: Array<[MidiNoteValue, VelocityValue][]>;
  tempo: number;
  timeSignature: [number, number]; // e.g., "4/4", "6/8"
}

const MusicStaff: React.FC<MusicStaffProps> = ({
  pattern,
  tempo,
  timeSignature,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.meta}>
        <span>
          {timeSignature[0]} / {timeSignature[1]}
        </span>
        <span>♪ = {tempo}</span>
      </div>

      <div className={styles.staff}>
        {/* Staff lines */}
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />

        {/* Notes */}
        {pattern.map((notesInStep, stepIndex) =>
          notesInStep.map(([midi, velocity], i) => (
            <Note
              key={`${stepIndex}-${midi}-${i}`}
              row={midiPositionMap[midi]}
              column={stepIndex + 1}
              velocity={velocity}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MusicStaff;
