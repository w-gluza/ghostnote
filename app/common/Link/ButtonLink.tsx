import NextLink, { LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Link.module.css";

export interface ButtonLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>,
    LinkProps {
  /** Visible content inside the link */
  children: ReactNode;
  /** Visual style variant */
  variant?: "primary" | "secondary";
  /** Optional block display (full width) */
  block?: boolean;
  /** Test hook. */
  dataTestId?: string;
  /** Extra class on the anchor element. */
  className?: string;
  /** Accessible name override if needed */
  ariaLabel?: string;
}

export function ButtonLink({
  children,
  variant = "primary",
  block = false,
  dataTestId,
  className,
  ariaLabel,
  ...linkProps
}: ButtonLinkProps) {
  return (
    <NextLink
      {...linkProps}
      className={clsx(
        styles.buttonLink,
        styles[variant],
        block && styles.block,
        className
      )}
      data-testid={dataTestId}
      aria-label={ariaLabel}
    >
      {children}
    </NextLink>
  );
}
