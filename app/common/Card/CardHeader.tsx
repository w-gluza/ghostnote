import { ReactNode, HTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./Card.module.css";

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /** Content inside the card */
  children: ReactNode;
  /** Additional CSS class names */
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={clsx(styles["card-header"], className)}>{children}</div>
  );
}
