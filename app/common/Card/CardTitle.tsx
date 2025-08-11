import { ReactNode, HTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./Card.module.css";

export interface CardTitleProps extends HTMLAttributes<HTMLDivElement> {
  /** Content inside the card */
  children: ReactNode;
  /** Additional CSS class names */
  className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
  return (
    <span className={clsx(styles["card-title"], className)}>{children}</span>
  );
}
