// app/components/PatternCard.tsx

"use client";

import React from "react";
import styles from "./PatternCard.module.css";
import {
  MidiNoteValue,
  VelocityValue,
  midiNoteMap,
  getMidiPosition,
} from "@/app/utils/midiMap";

interface PatternCardProps {
  bpm: number;
  timeSignature: string;
  pattern: Array<[MidiNoteValue, VelocityValue][]>;
}

const PatternCard: React.FC<PatternCardProps> = ({
  bpm,
  timeSignature,
  pattern,
}) => {
  const steps = pattern.length;

  return (
    <div className={styles.card}>
      <h2 className={styles.heading}>🪘 Pattern Overview</h2>
      <p className={styles.meta}>
        <strong>Time Signature:</strong> {timeSignature} &nbsp; | &nbsp;
        <strong>BPM:</strong> {bpm} &nbsp; | &nbsp;
        <strong>Steps:</strong> {steps}
      </p>

      <div className={styles.gridWrapper}>
        <div
          className={styles.grid}
          style={{
            gridTemplateColumns: `repeat(${steps}, 1fr)`,
          }}
        >
          {[...Array(9)].map((_, rowIdx) => (
            <div
              key={`line-${rowIdx}`}
              className={
                rowIdx % 2 === 1 ? styles.gridLine : styles.gridRowSpacer
              }
              style={{ gridRow: rowIdx + 1 }}
            />
          ))}

          {pattern.map((step, stepIndex) =>
            step.map(([note]) => {
              const row = getMidiPosition(note);
              if (row === undefined) return null;
              return (
                <div
                  key={`${note}-${stepIndex}`}
                  className={styles.noteDot}
                  style={{ gridColumn: stepIndex + 1, gridRow: row }}
                  title={midiNoteMap[note]}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default PatternCard;
