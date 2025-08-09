import React, { useId } from "react";
import styles from "./ProgressBar.module.css";

interface ProgressBarProps {
  /** Percentage of progress to display (0–100). */
  percentage: number;
  /** Optional text label (e.g., "75%" or "Loading..."). */
  labelText?: string;
  /** Label corner relative to the bar (outside the track). */
  labelPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  /** Testing hook. Will render as data-testid if provided. */
  dataTestId?: string;
  /** Optional extra class on the root container. */
  className?: string;
}

const clamp = (n: number, min = 0, max = 100) =>
  Number.isFinite(n) ? Math.min(max, Math.max(min, n)) : 0;

const ProgressBar = ({
  percentage,
  labelText,
  labelPosition = "top-left",
  dataTestId,
  className,
}: ProgressBarProps) => {
  const pct = Math.round(clamp(percentage));
  const reactId = useId();
  const labelId = labelText ? `progressbar-label-${reactId}` : undefined;

  return (
    <div
      className={[styles.container, className].filter(Boolean).join(" ")}
      data-testid={dataTestId}
    >
      {labelText && (
        <span
          id={labelId}
          className={`${styles.label} ${styles[labelPosition]}`}
        >
          {labelText}
        </span>
      )}

      <div
        className={styles.track}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
        aria-valuetext={labelText}
        aria-labelledby={labelId}
      >
        <div className={styles.filler} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
};

export default ProgressBar;
