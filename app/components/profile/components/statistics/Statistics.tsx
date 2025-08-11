import Image from "next/image";
import styles from "./Statistics.module.css";
import { ProfileData } from "../../types";
import {
  Streak,
  Score,
  ProgressBar,
  Card,
  CardHeader,
  CardTitle,
} from "@/app/common";

function Statistics({ user }: { user: ProfileData }) {
  return (
    <section className={styles.grid}>
      <Card>
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
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className={styles.cardTitle}>Best Score</CardTitle>
        </CardHeader>
        <Score
          value={user.scoreValue}
          max={user.scoreMax}
          labelPosition="left"
        />
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className={styles.cardTitle}>Level Progress</CardTitle>
        </CardHeader>
        <ProgressBar
          percentage={user.progressPct}
          labelText={`${user.progressPct}%`}
          labelPosition="top-right"
        />
      </Card>
    </section>
  );
}
export default Statistics;
