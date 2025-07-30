import { ReactNode } from "react";
import styles from "./PatternCard.module.css";

interface PatternCardProps {
  label: string;
  selected: boolean;
  onSelect: () => void;
  children: ReactNode;
}

const PatternCard: React.FC<PatternCardProps> = ({
  label,
  selected,
  onSelect,
  children,
}) => {
  return (
    <div
      className={`${styles.card} ${selected ? styles.selected : ""}`}
      role="button"
      tabIndex={0}
      aria-pressed={selected}
      aria-label={`Select pattern ${label}`}
      onClick={onSelect}
    >
      <div className={styles.label}>{label}</div>
      {children}
    </div>
  );
};

export default PatternCard;
