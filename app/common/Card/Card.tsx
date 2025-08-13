import type { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Card.module.css";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Content inside the card */
  children: ReactNode;
  /** Adds the .selected visual state */
  selected?: boolean;
  /** Additional CSS class names */
  className?: string;
  /** Additional CSS class names */
  variant?: "primary" | "secondary";
}

export function Card({
  children,
  selected,
  className,
  variant = "primary",
}: CardProps) {
  return (
    <div
      className={clsx(styles.card, selected && styles.selected, className, {
        [styles.primary]: variant === "primary",
        [styles.secondary]: variant === "secondary",
      })}
    >
      {children}
    </div>
  );
}
