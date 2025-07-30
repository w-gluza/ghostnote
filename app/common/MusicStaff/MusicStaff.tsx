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
  timeSignature: string; // e.g., "4/4", "6/8"
}

const MusicStaff: React.FC<MusicStaffProps> = ({
  pattern,
  tempo,
  timeSignature,
}) => (
  <>
    <p>Tempo: {tempo}</p>
    <p>Time Signature: {timeSignature}</p>

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
            // velocity={velocity}
          />
        ))
      )}
    </div>
  </>
);
export default MusicStaff;
