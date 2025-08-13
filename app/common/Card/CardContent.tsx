import clsx from "clsx";
import styles from "./Card.module.css";
import type { ReactNode } from "react";

export interface CardContentProps {
  /** Content inside the card */
  children: ReactNode;
  /** Additional CSS class names */
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <span className={clsx(styles["card-content"], className)}>{children}</span>
  );
}
