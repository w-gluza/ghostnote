import Image from "next/image";
import clsx from "clsx";
import Avatar from "@/app/common/Avatar/Avatar";
import Badge from "@/app/common/Badge/Badge";
import styles from "./ProfileHeader.module.css";
import { ProfileData } from "../../types";

export default function ProfileHeader({
  user: { name, handle, location, lastPlayed, skill },
}: {
  user: ProfileData;
}) {
  const hasMeta = location || lastPlayed;

  return (
    <section className={clsx(styles.header)}>
      <div className={styles.headerLeft}>
        <div className={styles.avatarWrap}>
          <Avatar fallback="AR" />
        </div>

        <div className={styles.title}>
          <h1 className={styles.name}>{name}</h1>
          {handle && <p className={styles.handle}>{handle}</p>}

          {hasMeta && (
            <div className={styles.meta}>
              {location && (
                <span className={styles.metaItem}>
                  <Image
                    src="/icons/app/location.svg"
                    alt="Location"
                    width={14}
                    height={14}
                  />
                  {location}
                </span>
              )}

              {location && lastPlayed && (
                <span className={styles.sep} aria-hidden="true" />
              )}

              {lastPlayed && (
                <span className={styles.metaItem}>
                  <span className={styles.icon}>
                    <Image
                      src="/icons/app/clock.svg"
                      alt="Clock"
                      width={14}
                      height={14}
                    />
                  </span>
                  {lastPlayed}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {skill && (
        <div className={styles.headerRight}>
          <div className={styles.badgeRow}>
            <span className={styles.badgeLabel}>Skill</span>
            <Badge label={skill} />
          </div>
        </div>
      )}
    </section>
  );
}
