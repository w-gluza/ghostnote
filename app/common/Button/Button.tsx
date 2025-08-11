import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Content inside the button */
  children: ReactNode;
  /** Visual style variant */
  variant?: "primary" | "secondary";
  /** Test hook. */
  dataTestId?: string;
  /** Additional CSS class names */
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  dataTestId,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={clsx(styles.button, styles[variant], className)}
      data-testid={dataTestId}
      {...props}
    >
      {children}
    </button>
  );
}
