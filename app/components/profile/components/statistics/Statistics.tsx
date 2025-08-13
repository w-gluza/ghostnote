import Image from "next/image";
import styles from "./Statistics.module.css";
import type { UserInterface } from "../../../../types/user";
import {
  Streak,
  Score,
  ProgressBar,
  Card,
  CardHeader,
  CardTitle,
} from "@/app/common";

function Statistics({ user }: { user: UserInterface }) {
  return (
    <section className={styles.grid}>
      <Card>
        <Streak
          value={user.streak || 0}
          max={user.streakMax || 5}
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
          value={user.scoreValue || 0}
          max={user.scoreMax || 5}
          labelPosition="left"
        />
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className={styles.cardTitle}>Level Progress</CardTitle>
        </CardHeader>
        <ProgressBar
          percentage={user.progressPct || 0}
          labelText={`${user.progressPct}%`}
          labelPosition="top-right"
        />
      </Card>
    </section>
  );
}
export default Statistics;
