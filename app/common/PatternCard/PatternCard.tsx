import { ReactNode } from "react";
import styles from "./PatternCard.module.css";

interface PatternCardProps {
  label: string;
  selected: boolean;
  onSelect: () => void;
  children: ReactNode;
}

export function PatternCard({
  label,
  selected,
  onSelect,
  children,
}: PatternCardProps) {
  return (
    <div
      className={`${styles.card} ${selected ? styles.selected : ""}`}
      role="button"
      tabIndex={0}
      aria-pressed={selected}
      aria-label={`Select pattern ${label}`}
      onClick={onSelect}
    >
      {children}
    </div>
  );
}
