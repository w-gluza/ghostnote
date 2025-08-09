import styles from "./Profile.module.css";
import { ActivityItem, ProfileData } from "./types";
import Statistics from "./components/statistics/Statistics";
import ProfileHeader from "./components/profile-header/ProfileHeader";
import ActivityList from "./components/activity-list/ActivityList";

const user: ProfileData = {
  name: "Alex Rivera",
  handle: "@beatmaker92",
  location: "London, UK",
  lastPlayed: "Last played 2 hours ago",
  streak: 5,
  streakMax: 7,
  scoreValue: 7,
  scoreMax: 10,
  progressPct: 62,
  skill: "Intermediate",
};

const activity: ActivityItem[] = [
  {
    id: 1,
    title: "Quiz Round",
    meta: "Score 8/10 • 1 strike",
    time: "Today, 14:20",
    type: "quiz",
  },
  {
    id: 2,
    title: "Practice",
    meta: "12 mins • Interval recognition",
    time: "Yesterday, 19:05",
    type: "practice",
  },
  {
    id: 3,
    title: "Quiz Round",
    meta: "Score 7/10 • 2 strikes",
    time: "Mon, 21:12",
    type: "quiz",
  },
];

export default function Profile() {
  return (
    <main className={styles.page} aria-label="Profile page">
      <ProfileHeader user={user} />
      <Statistics user={user} />
      <ActivityList
        heading="Recent activity"
        subheading="Practice sessions and quiz runs"
        items={activity}
      />
    </main>
  );
}
