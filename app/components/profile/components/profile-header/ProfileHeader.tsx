import Image from "next/image";
import clsx from "clsx";
import styles from "./ProfileHeader.module.css";
import { Avatar, Badge, Heading } from "@/app/common";
import type { UserInterface } from "../../../../types/user";

export default function ProfileHeader({
  user: { name, handle, location, lastPlayedText, skill },
}: {
  user: UserInterface;
}) {
  return (
    <section className={clsx(styles.header)}>
      <div className={styles.about}>
        <Avatar fallback="AR" />

        <div className={styles.title}>
          <Heading level={1}>{name}</Heading>
          {handle && <p className={styles.handle}>{handle}</p>}

          <div className={styles.meta}>
            {location && (
              <span className={styles["meta-item"]}>
                <Image
                  src="/icons/app/location.svg"
                  alt="Location"
                  width={14}
                  height={14}
                />
                {location}
              </span>
            )}

            <span className={styles.sep} aria-hidden="true" />

            <span className={styles["meta-item"]}>
              <span className={styles.icon}>
                <Image
                  src="/icons/app/clock.svg"
                  alt="Clock"
                  width={14}
                  height={14}
                />
              </span>
              {lastPlayedText}
            </span>
          </div>
        </div>
      </div>

      <article className={styles["skills-wrap"]}>
        <div className={styles["skill"]}>
          <span className={styles["skill-label"]}>Skill</span>
          <Badge label={skill} />
        </div>
      </article>
    </section>
  );
}
