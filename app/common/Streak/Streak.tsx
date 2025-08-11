import clsx from "clsx";
import styles from "./Streak.module.css";

interface StreakProps {
  /** Current streak value (e.g., days in a row). */
  value: number;
  /** Maximum possible streak (used to render total segments). */
  max: number;
  /** Optional text label displayed near the streak bar. */
  label?: string;
  /** Optional icon (e.g., flame SVG) displayed next to the label. */
  icon?: React.ReactNode;
  /** Position of the icon relative to the label. Defaults to "left". */
  iconPosition?: "left" | "right";
  /** Optional caption text displayed below the streak bar. */
  caption?: string;
  /** Testing hook. Renders as `data-testid` on the container. */
  dataTestId?: string;
  /** Optional extra class applied to the root container. */
  className?: string;
}

const clamp = (n: number, min: number, max: number) =>
  Math.min(max, Math.max(min, n));

const range = (n: number) => [...Array(n).keys()];

export function Streak({
  value,
  max,
  label = "Streak",
  icon,
  iconPosition = "left",
  caption,
  dataTestId,
  className,
}: StreakProps) {
  const v = clamp(value, 0, max);

  return (
    <section
      className={clsx(styles.container, className)}
      data-testid={dataTestId}
      aria-label={`${label}: ${v} of ${max}`}
    >
      {(label || icon) && (
        <div className={styles.header}>
          {iconPosition === "left" && icon && (
            <span className={styles.icon}>{icon}</span>
          )}
          {label && <span className={styles.label}>{label}</span>}
          {iconPosition === "right" && icon && (
            <span className={styles.icon}>{icon}</span>
          )}
        </div>
      )}

      <div className={styles.bar} aria-label={`${v} of ${max}`} role="img">
        {range(max).map((i) => (
          <span
            key={i}
            className={clsx(styles.segment, i < v && styles.filled)}
            aria-hidden="true"
          />
        ))}
      </div>

      {caption && <p className={styles.caption}>{caption}</p>}
    </section>
  );
}
