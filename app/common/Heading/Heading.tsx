import { ReactNode, ElementType, JSX } from "react";
import clsx from "clsx";
import styles from "./Heading.module.css";

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
};

export function Heading({ level = 2, children, className }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements as ElementType;

  return <Tag className={clsx(styles[`h${level}`], className)}>{children}</Tag>;
}
