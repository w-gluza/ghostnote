"use client";
import styles from "./Profile.module.css";
import Statistics from "./components/statistics/Statistics";
import ProfileHeader from "./components/profile-header/ProfileHeader";
import ActivityList from "./components/activity-list/ActivityList";
import { useUser } from "./hooks/useUser";

export default function Profile() {
  const {
    user,
    error: userError,
    isLoading: userLoading,
  } = useUser("5706fc6b-af13-4032-bb1e-9c1dead8b010");

  if (userLoading) return <p>Loading profile…</p>;
  if (userError) return <p>Failed to load user: {userError.message}</p>;
  if (!user) return <p>User not found.</p>;

  return (
    <main className={styles.page} aria-label="Profile page">
      <ProfileHeader user={user} />

      <Statistics user={user} />
      <ActivityList
        heading="Recent activity"
        subheading="Practice sessions and quiz runs"
      />
    </main>
  );
}
