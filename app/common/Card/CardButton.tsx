import { ReactNode, ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./Card.module.css";

export interface CardButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Content inside the clickable card */
  children: ReactNode;
  /** Visual selected state */
  selected?: boolean;
  /** Additional CSS class names */
  className?: string;
}

export function CardButton({
  children,
  selected,
  className,
  ...props
}: CardButtonProps) {
  return (
    <button
      type="button"
      className={clsx(
        styles.card,
        styles.clickable,
        selected && styles.selected,
        className
      )}
      aria-pressed={selected}
      {...props}
    >
      {children}
    </button>
  );
}
