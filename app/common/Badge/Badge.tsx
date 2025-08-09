import clsx from "clsx";
import styles from "./Badge.module.css";

interface BadgeProps {
  /** Visible text inside the badge. */
  label: string;
  /** Optional icon */
  icon?: React.ReactNode;
  /** Where to place the icon relative to the label. */
  iconPosition?: "left" | "right";
  /** Test hook. */
  dataTestId?: string;
  /** Extra class on the root element. */
  className?: string;
}

const Badge = ({
  label,
  icon,
  iconPosition = "left",
  dataTestId,
  className,
}: BadgeProps) => {
  return (
    <span className={clsx(styles.badge, className)} data-testid={dataTestId}>
      {icon && iconPosition === "left" && <span>{icon}</span>}
      {label}
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </span>
  );
};

export default Badge;
