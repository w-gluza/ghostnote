import clsx from "clsx";
import styles from "./ProfileAchievements.module.css";

export interface AchievementItem {
  /** Visible text for the achievement, e.g., "10-day Streak" */
  label: string;
  /** Optional icon (SVG/ReactNode) shown left or right of the label */
  icon?: React.ReactNode;
  /** Where the icon appears relative to the label (default: "left") */
  iconPosition?: "left" | "right";
  /** If false, render as locked/inactive (outlined style) */
  earned?: boolean;
  /** Optional tooltip/title */
  title?: string;
}

interface AchievementsCardProps {
  /** Card header */
  title?: string;
  /** List of achievements to display */
  items: AchievementItem[];
  /** Testing hook */
  dataTestId?: string;
  /** Extra class on the root element */
  className?: string;
}

export default function AchievementsCard({
  title = "Achievements",
  items,
  dataTestId,
  className,
}: AchievementsCardProps) {
  return (
    <section
      className={clsx(styles.card, className)}
      data-testid={dataTestId}
      aria-label={title}
    >
      <header className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
      </header>

      <div className={styles.content}>
        <ul className={styles.list} role="list">
          {items.map((item, i) => {
            const {
              label,
              icon,
              iconPosition = "left",
              earned = true,
              title,
            } = item;
            return (
              <li key={i}>
                <span
                  className={clsx(styles.chip, !earned && styles.locked)}
                  title={title}
                >
                  {icon && iconPosition === "left" && (
                    <span className={styles.icon} aria-hidden="true">
                      {icon}
                    </span>
                  )}
                  <span className={styles.label}>{label}</span>
                  {icon && iconPosition === "right" && (
                    <span className={styles.icon} aria-hidden="true">
                      {icon}
                    </span>
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
