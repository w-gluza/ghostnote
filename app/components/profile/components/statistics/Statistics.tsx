import Image from "next/image";
import clsx from "clsx";
import Streak from "@/app/common/Streak/Streak";
import Score from "@/app/common/Score/Score";
import ProgressBar from "@/app/common/ProgressBar/ProgressBar";
import styles from "./Statistics.module.css";
import { ProfileData } from "../../types";

function Statistics({ user }: { user: ProfileData }) {
  return (
    <section className={styles.grid}>
      <div className={clsx(styles.card)}>
        <Streak
          value={user.streak}
          max={user.streakMax}
          icon={
            <Image
              src="/icons/app/flame.svg"
              alt="Flame"
              width={14}
              height={14}
            />
          }
          caption={`${user.streak} days in a row`}
        />
      </div>

      <div className={clsx(styles.card)}>
        <div className={styles.cardHeader}>
          <span className={styles.cardTitle}>Best Score</span>
        </div>
        <Score
          value={user.scoreValue}
          max={user.scoreMax}
          labelPosition="left"
        />
      </div>

      <div className={clsx(styles.card)}>
        <div className={styles.cardHeader}>
          <span className={styles.cardTitle}>Level Progress</span>
        </div>
        <ProgressBar
          percentage={user.progressPct}
          labelText={`${user.progressPct}%`}
          labelPosition="top-right"
        />
      </div>
    </section>
  );
}
export default Statistics;
