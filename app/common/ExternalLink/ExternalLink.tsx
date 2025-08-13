import { ReactNode } from "react";
import clsx from "clsx";
import styles from "./ExternalLink.module.css";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  label?: string;
  variant?: "primary" | "secondary";
};

export const ExternalLink = ({
  href,
  children,
  icon,
  className,
  label,
  variant = "primary",
}: ExternalLinkProps) => {
  const accessibleLabel =
    label ??
    (typeof children === "string"
      ? `${children} (opens in a new tab)`
      : undefined);

  return (
    <a
      href={href}
      className={clsx(styles[variant], styles.base, className)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={accessibleLabel}
    >
      {children}
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles["sr-only"]}> (opens in a new tab)</span>
    </a>
  );
};
