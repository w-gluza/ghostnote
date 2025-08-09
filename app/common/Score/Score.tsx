import styles from "./Score.module.css";

interface ScoreProps {
  /** Filled count (current score). */
  value: number;
  /** Total number of dots. */
  max: number;
  /** Optional label shown to the left or right of the dots. If not provided, the auto score may be shown. */
  label?: string;
  /** Hide the auto "value/max" when no custom label is provided. */
  hideScore?: boolean;
  /** Position of the label relative to the dots. */
  labelPosition?: "left" | "right";
  /** Testing hook (rendered as data-testid). */
  dataTestId?: string;
  /** Extra class on root container. */
  className?: string;
  /** Dot size in px (optional, defaults to 10). */
  size?: number;
}

const clamp = (n: number, min: number, max: number) =>
  Math.min(max, Math.max(min, n));

const range = (n: number) => [...Array(n).keys()];

const Score = ({
  value,
  max,
  label,
  hideScore = false,
  labelPosition = "right",
  dataTestId,
  className,
  size = 10,
}: ScoreProps) => {
  const filled = clamp(value, 0, max);

  // Decide what to render in the single label area
  const labelContent = label ?? (hideScore ? null : `${filled}/${max}`);

  const labelElement = labelContent ? (
    <span className={styles.label}>{labelContent}</span>
  ) : null;

  return (
    <div
      className={[styles.container, className].filter(Boolean).join(" ")}
      data-testid={dataTestId}
      aria-label={
        label
          ? `${label}: ${filled} out of ${max} points`
          : `${filled} out of ${max} points`
      }
      role="status"
      aria-live="polite"
    >
      {labelPosition === "left" && labelElement}

      <div className={styles.row} aria-hidden="true">
        {range(max).map((i) => {
          const isFilled = i < filled;
          return (
            <span
              key={i}
              className={`${styles.dot} ${
                isFilled ? styles.filled : styles.outlined
              }`}
              style={{ width: size, height: size }}
            />
          );
        })}
      </div>

      {labelPosition === "right" && labelElement}
    </div>
  );
};

export default Score;
