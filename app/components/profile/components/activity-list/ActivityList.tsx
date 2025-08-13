"use client";

import Image from "next/image";
import clsx from "clsx";
import styles from "./ActivityList.module.css";
import type { ActivityInterface } from "../../../../types/user";
import { Card } from "@/app/common";
import { useUserActivities } from "../../hooks/useUserActivities";

interface ActivityListProps {
  heading?: string;
  subheading?: string;
}

export default function ActivityList({
  heading,
  subheading,
}: ActivityListProps) {
  const {
    data,
    error: activityError,
    isLoading: activityLoading,
  } = useUserActivities("5706fc6b-af13-4032-bb1e-9c1dead8b010");

  if (activityLoading) {
    return (
      <Card>
        <div className={styles.loading}>Loading activity…</div>
      </Card>
    );
  }

  if (!data) {
    return (
      <Card>
        <div className={styles.loading}>No Recent activities</div>
      </Card>
    );
  }

  if (activityError) {
    return (
      <Card>
        <div className={styles.error}>Failed to load activity.</div>
      </Card>
    );
  }

  console.log("data:", data);
  return (
    <Card>
      {(heading || subheading) && (
        <header className={styles.header}>
          {heading && <h3 className={styles.title}>{heading}</h3>}
          {subheading && <p className={styles.description}>{subheading}</p>}
        </header>
      )}

      <div className={styles.content}>
        {data.items.length === 0 ? (
          <p className={styles.empty}>No recent activity.</p>
        ) : (
          <ul className={styles.list} role="list">
            {data.items.map((it: ActivityInterface) => {
              const isQuiz = it.type === "QUIZ";
              const iconSrc = isQuiz
                ? "/icons/app/flame.svg"
                : "/icons/app/clock.svg";

              // build a meta line based on type
              const meta = isQuiz
                ? `Score ${it.scoreCorrect ?? 0}/${it.scoreTotal ?? 0} • ${it.strikes ?? 0} ${
                    (it.strikes ?? 0) === 1 ? "strike" : "strikes"
                  }`
                : `${Math.round((it.durationSeconds ?? 0) / 60)} mins • ${it.topic ?? "Practice"}`;

              const when = new Date(it.occurredAt);
              const whenText = new Intl.DateTimeFormat(undefined, {
                weekday: "short",
                hour: "2-digit",
                minute: "2-digit",
              }).format(when);

              return (
                <li
                  key={it.id ?? `${it.type}-${it.occurredAt}`}
                  className={clsx(styles.row, styles.withDivider)}
                >
                  <div className={styles.rowInner}>
                    <div className={styles.left}>
                      <div className={styles.topLine}>
                        <Image
                          src={iconSrc}
                          alt={it.type}
                          width={16}
                          height={16}
                        />
                        <span className={styles.itemTitle}>
                          {isQuiz ? "Quiz Round" : "Practice"}
                        </span>
                      </div>
                      <div className={styles.meta}>{meta}</div>
                      <div className={styles.time}>{whenText}</div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </Card>
  );
}
