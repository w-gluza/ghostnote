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
  label?: string;
}

const MusicStaff = ({
  pattern,
  tempo,
  timeSignature,
  label,
}: MusicStaffProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.meta}>
        {label && <span>{label}</span>}
        <span>♪ = {tempo}</span>
      </div>
      <div className={styles["staff-container"]}>
        <div className={styles.staff}>
          {/* Staff lines */}
          <div className={styles.line} />
          <div className={styles.line} />
          <div className={styles.line} />
          <div className={styles.line} />
          <div className={styles.line} />

          <div className={styles.timeSignatureInStaff}>
            <span>{timeSignature[0]}</span>
            <span>{timeSignature[1]}</span>
          </div>

          <div className={styles.doubleBar} />
          {/* Notes (offset by +2) */}
          {pattern.map((notesInStep, stepIndex) =>
            notesInStep.map(([midi, velocity], i) => (
              <Note
                key={`${stepIndex}-${midi}-${i}`}
                row={midiPositionMap[midi]}
                column={stepIndex + 3}
                velocity={velocity}
                midi={midi}
                visualMode="svg"
              />
            ))
          )}
          <div className={styles.barLine} />
          {pattern.map((notesInStep, stepIndex) =>
            notesInStep.map(([midi, velocity], i) => (
              <Note
                key={`${stepIndex}-${midi}-${i}`}
                row={midiPositionMap[midi]}
                column={stepIndex + 3 + 9}
                velocity={velocity}
                midi={midi}
                visualMode="svg"
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MusicStaff;
