import { ReactNode, HTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./Card.module.css";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Content inside the card */
  children: ReactNode;
  /** Adds the .selected visual state */
  selected?: boolean;
  /** Additional CSS class names */
  className?: string;
}

export function Card({ children, selected, className }: CardProps) {
  return (
    <div className={clsx(styles.card, selected && styles.selected, className)}>
      {children}
    </div>
  );
}
