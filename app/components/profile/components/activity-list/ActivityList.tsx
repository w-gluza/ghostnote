import Image from "next/image";
import clsx from "clsx";
import styles from "./ActivityList.module.css";
import { ActivityItem } from "../../types";
import { Card } from "@/app/common";

interface ActivityListProps {
  items: ActivityItem[];
  heading?: string;
  subheading?: string;
  className?: string;
  dividers?: boolean;
}

export default function ActivityList({
  items,
  heading,
  subheading,
  dividers = true,
}: ActivityListProps) {
  return (
    <Card>
      {(heading || subheading) && (
        <header className={styles.header}>
          {heading && <h3 className={styles.title}>{heading}</h3>}
          {subheading && <p className={styles.description}>{subheading}</p>}
        </header>
      )}

      <div className={styles.content}>
        {items.length === 0 ? (
          <p className={styles.empty}>No recent activity.</p>
        ) : (
          <ul className={styles.list} role="list">
            {items.map((it) => {
              const iconSrc =
                it.type === "quiz"
                  ? "/icons/app/flame.svg"
                  : "/icons/app/clock.svg";

              const RowContent = (
                <div className={styles.left}>
                  <div className={styles.topLine}>
                    <Image
                      src={iconSrc}
                      alt={it.type || ""}
                      width={16}
                      height={16}
                    />
                    <span className={styles.itemTitle}>{it.title}</span>
                  </div>
                  {it.meta && <div className={styles.meta}>{it.meta}</div>}
                  <div className={styles.time}>{it.time}</div>
                </div>
              );

              return (
                <li
                  key={it.id}
                  className={clsx(styles.row, dividers && styles.withDivider)}
                >
                  {it.href ? (
                    <a
                      className={styles.rowLink}
                      href={it.href}
                      aria-label={it.title}
                    >
                      {RowContent}
                    </a>
                  ) : (
                    <div className={styles.rowInner}>{RowContent}</div>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </Card>
  );
}
